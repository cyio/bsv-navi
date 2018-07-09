<template lang="pug">
  .handle-view
    .name ${{handle}}
    .qr-wrap()
      img(v-if="qrUrl" :src="qrUrl" @click='copyAddress')
      .preloader(v-else) ...
    .address(@click='copyAddress')
      textarea(ref='addr', readonly='') {{receivingAddress}}
    .err-msg(v-if="!showLoading && !receivingAddress") 查询失败，请检查 $handle 拼写是否正确
    .desc
      span 本页面使用
      a(href="http://handcash.io/api-docs/" target="_blank") HandCash API
      span 查询 $handle 的收款地址
      br
      span 由
      a(:href="originUrl") BCH123.org
      span 提供
    Spin(size="large" v-if="showLoading")
</template>

<script>
import mixin from '@/mixin.js'
import bchaddr from 'bchaddrjs'
import { generateQR } from '@/utils'
import { Spin } from 'iview'
export default {
  name: 'Home',
  mixins: [mixin],
  components: {
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
      console.log(params)
      this.handle = params.get("id")
      if (!this.handle) {
        window.location.assign(window.location.origin)
        return
      }
      document.title = `$${this.handle} 的 BCH 收款`
      this.getAddress(this.handle)
    },
    copyAddress () {
      this.$refs.addr.select()
      document.execCommand('copy')
      this.isCopied = true
      setTimeout(() => {
        this.isCopied = false
      }, 3000)
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
  theme = #f8b832
  fg = #fff8ff

  html, body {
    background: theme;
    color: fg;
  }
  a {
    padding: 0 0.2rem;
  }
  .handle-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 4rem auto;
  }
  .name {
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--theme);
  }
  .address {
    width: 96%;
  }
  .address textarea {
    width: 14.5rem;
    border: none;
    resize: none;
    background: none;
    color: fg;
  }
  .qr-wrap {
    margin: 1rem;
    width: w;
    height: w;
    background: #fff;
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
    margin-top: 5rem;
    font-size: .8rem;
  }
</style>
