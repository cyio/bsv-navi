<template lang="pug">
  .handle-view
    .name {{handle}}
    .qr-wrap()
      img(v-if="qrUrl" :src="qrUrl" @click='copyAddress')
      .preloader(v-else) .
    .address
      span#tocopy.text {{receivingAddress}}
    Button(size="large" @click="copyAddress" :class="{success: isCopied}") {{isCopied ? $t('handle.copied') : $t('handle.copy')}}
    .desc
      span via
      a(href="http://handcash.io/api-docs/" target="_blank") HandCash API
      span  made by
      a(:href="donateUrl" target="_blank") $oaker
</template>

<script>
import mixin from '@/mixin.js'
import bchaddr from 'bchaddrjs'
import { generateAddressQR, copyToClipboard } from '@/utils/'
import { Button, Switch } from 'iview'
export default {
  name: 'Home',
  mixins: [mixin],
  components: {
    Button,
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
        this.showLoading = false
        if (res.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + res.status)
          return
        }
        res.json().then(async result => {
          console.log(result)
          this.receivingAddress = result.receivingAddress
          this.qrUrl = await generateAddressQR(this.receivingAddress)
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
      document.title = this.handle + this.$t('handle.title')
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
  },
  computed: {
    originUrl() {
      return window.location.origin
    },
    donateUrl() {
      return this.originUrl + '?q=oakerx'
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
  theme = #00d77e
  bg = #fff
  fg = #333

  #app.handle {
    background: bg;
    color: fg;
    font-size: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #333;
    .layout-logo {
      color: fg;
    }
    .ivu-layout {
      overflow-y: scroll;
    }
    .layout-nav .link {
      color: #fff;
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
    margin: .8rem;
    border-radius: 1rem;
    padding-bottom: 1rem;
    background: #fff;
    a {
      padding: 0 0.2rem;
      color: theme;
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
      background: theme;
      width: 100%;
      height: 4rem;
      line-height: @height;
      color: #fff;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
    .address {
      width: 100%;
      height: 3rem;
      padding: 0 1rem;
    }
    .address .text {
      word-wrap: break-word;
      color: #495060;
      // border: none;
      // resize: none;
      // background: none;
      // color: fg;
    }
    .qr-wrap {
      width: w;
      height: w;
      text-align: center;
      img {
        width: 100%;
      }
      .preloader {
        margin-top: 30%;
        font-size: 3rem;
        color: theme;
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
    @keyframes fa-spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(359deg);
      }
    }
    .preloader {
      animation: fa-spin 2s infinite linear;
    }
  }
</style>
