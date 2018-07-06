<template lang="pug">
  .handle-view
    .name ${{handle}}
    .qr-wrap(v-if="qrUrl" @click='copyAddress')
      img(:src="qrUrl")
    .address(@click='copyAddress')
      textarea(ref='addr', readonly='') {{receivingAddress}}
    .err-msg(v-if="!showLoading && !receivingAddress") 查询失败
    .desc
      span 本页面使用
      a(href="http://handcash.io/api-docs/" target="_blank") 官方API
      span 查询 $handle 的收款地址
    Spin(size="large" v-if="showLoading")
</template>

<script>
import mixin from '@/mixin.js'
import bchaddr from 'bchaddrjs'
import { generateQR } from '../utils'
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
      if (this.$route.params.id && this.handle !== this.$route.params.id) {
        this.handle = this.$route.params.id
        this.getAddress(this.handle)
      }
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
  },
  filters: {
  },
  watch: {
    '$route': {
      deep: true,
      handler() {
        this.setHandle()
      }
    }
  },
  created () {
    this.setHandle()
  },
  mounted () {
  }
}
</script>

<style scoped>
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
    width: 14.4rem;
    border: none;
    resize: none;
  }
  .qr-wrap {
    padding: 1rem;
  }
  .err-msg {
    color: red;
    margin: 1rem 0;
  }
  .desc {
    margin-top: 5rem;
    font-size: .9rem;
  }
</style>
