<template lang="pug">
  .handle-view
    .name {{handle}}
    .qr-wrap()
      img(v-if="qrUrl" :src="qrUrl" @click='copyAddress')
      .preloader(v-else) ....
    .address(@click='copyAddress')
      #tocopy.text {{receivingAddress}}
    .err-msg(v-if="!showLoading && !receivingAddress") 查询失败，请检查 $handle 拼写是否正确
    Button(size="large" @click="copyAddress" :class="{success: isCopied}") {{isCopied ? '已' : ''}}复制
    .desc
      span 本页面使用
      a(href="http://handcash.io/api-docs/" target="_blank") HandCash API
      span 查询 $handle 的收款地址
    // Spin(size="large" v-if="showLoading")
</template>

<script>
import mixin from '@/mixin.js'
import bchaddr from 'bchaddrjs'
import { generateQR, copyToClipboard } from '@/utils'
import { Spin, Button } from 'iview'
export default {
  name: 'Home',
  mixins: [mixin],
  components: {
    Button,
    Spin
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
          this.receivingAddress = bchaddr.toCashAddress(result.receivingAddress)
          this.qrUrl = await generateQR(this.receivingAddress)
          this.showLoading = false
        })
      })
    },
    setHandle() {
      let uri = window.location.search.substring(1)
      let params = new URLSearchParams(uri)
      this.handle = params.get('q')
      if (!this.handle) {
        window.location.assign(window.location.origin)
        return
      }
      document.title = `${this.handle} 的 BCH 收款`
      this.getAddress(this.handle.substr(1))
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
  }
  .handle-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 4rem auto;
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
      margin-top: 5rem;
      width: w;
    }
    button span {
      padding: .1rem .6rem;
      transition: transform .2s ease-out;
    }
    .success span {
      transform: scale(1.5);
    }
  }
</style>
