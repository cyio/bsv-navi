<template lang="pug">
  .handle-view
    .name {{handle}}
    .qr-wrap()
      img(v-if="qrUrl" :src="qrUrl" @click='copyAddress')
      .preloader(v-else) ....
    .address
      #tocopy.text {{receivingAddress}}
    .err-msg(v-if="!showLoading && !receivingAddress") 查询失败，请检查 $handle 拼写是否正确
    Button(size="large" @click="copyAddress" :class="{success: isCopied}") {{isCopied ? '已' : ''}}复制
    .switch-wrap 使用旧版地址  
      i-switch(@on-change="switchAddressType")
    .desc
      span 本页面使用
      a(href="http://handcash.io/api-docs/" target="_blank") HandCash API
      span 查询 $handle 的收款地址
    // Spin(size="large" v-if="showLoading")
</template>

<script>
import mixin from '@/mixin.js'
import bchaddr from 'bchaddrjs'
import { generateAddressQR, copyToClipboard } from '@/utils/'
import { Spin, Button, Switch } from 'iview'
export default {
  name: 'Home',
  mixins: [mixin],
  components: {
    Button,
    Spin,
    'i-switch': Switch,
  },
  data () {
    return {
      handle: null,
      receivingAddress: null,
      qrUrl: null,
      showLoading: true,
      isCopied: false,
    }
  },
  methods: {
    getAddress(handle) {
      let url = `https://api.handcash.io/api/receivingAddress/${handle}`
      this.showLoading = true
      fetch(url).then(res => {
        if (res.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + res.status)
          this.showLoading = false
          return
        }
        res.json().then(async result => {
          console.log(result)
          const cashAddr = bchaddr.toCashAddress(result.receivingAddress)
          this.receivingAddress = cashAddr.substr(12)
          this.qrUrl = await generateAddressQR(cashAddr)
          this.showLoading = false
        })
      })
    },
    setHandle() {
      let uri = window.location.search.substring(1)
      let params = new URLSearchParams(uri)
      let handle = params.get('q')
      if (!handle) {
        window.location.assign(window.location.origin)
        return
      }
      if (handle.indexOf('$') === 0) {
        handle = handle.substr(1)
        this.handle = handle
      } else {
        this.handle = '$' + handle
      }
      this.$router.replace({path: '?q=' + handle})
      document.title = `${this.handle} 的 BCH 收款`
      this.getAddress(handle)
    },
    copyAddress () {
      if (copyToClipboard('tocopy')) {
        this.isCopied = true
        setTimeout(() => {
          this.isCopied = false
        }, 1000)
      }
    },
    async switchAddressType () {
      const isLegacy = bchaddr.isLegacyAddress(this.receivingAddress)
      this.receivingAddress = bchaddr[isLegacy ? 'toCashAddress' : 'toLegacyAddress'](this.receivingAddress)
      if (this.receivingAddress.indexOf('bitcoincash') > -1)
        this.receivingAddress = this.receivingAddress.substr(12)
      this.qrUrl = await generateAddressQR(this.receivingAddress, !isLegacy)
    },
  },
  computed: {
    originUrl() {
      return window.location.origin
    }
  },
  filters: {
  },
  watch: {
  },
  created () {
    this.setHandle()
  },
  mounted () {
  }
}
</script>

<style lang="stylus">
  w = 14.5rem
  bg = #f8b832
  fg = #fff8ff

  #app.handle {
    background: bg;
    color: fg;
    font-size: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .layout-logo {
      color: fg;
    }
    .ivu-layout {
      overflow-y: scroll;
    }
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
  .handle-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 1.5rem;
    a {
      padding: 0 0.2rem;
    }
    .hidden {
      display: none;
      opacity: 0;
      width: 0;
      height: 0;
    }
    .name {
      font-weight: bold;
      font-size: 1.2rem;
      color: var(--bg);
    }
    .address {
      // width: 96%;
    }
    .address .text {
      width: 14.5rem;
      word-wrap: break-word;
      color: #495060;
      // border: none;
      // resize: none;
      // background: none;
      // color: fg;
    }
    .qr-wrap {
      margin: 1rem;
      width: w;
      height: w;
      background: #fff;
      text-align: center;
      img {
        width: 100%;
      }
      .preloader {
        margin-top: 30%;
        font-size: 3rem;
        color: bg;
      }
    }
    .err-msg {
      color: red;
      margin: 1rem 0;
    }
    .desc {
      margin-top: 2rem;
      font-size: .8rem;
    }
    button {
      margin-top: 2rem;
      margin-bottom: 1rem;
      width: w;
    }
    button span {
      padding: .1rem .6rem;
      transition: transform .2s ease-out;
    }
    .success span {
      transform: scale(1.5);
    }
    .switch-wrap {
      width: w;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
