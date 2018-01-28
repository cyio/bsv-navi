<template lang="pug">
.home-view
  .logo-wrap
    img(src="../assets/bch-logo-512.png")
  search-box(:submit='submit')
  a(href="/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa") {{$t('home.genesisAddr')}}
  .row.justify-content-center.mt-4
    websites
  modal(:show='showModal', @close='showModal = false')
    .donate-modal(slot='content')
      .qrcode(v-if='qrUrls.donateAddr')
        img(:src='qrUrls.donateAddr')
      textarea(readonly="readonly") {{donateAddr}}
      div
        | {{$t('home.mobile')}}：13621208032 
        br
        | {{$t('home.email')}}：ibeceo@gmail.com
      div
        | {{$t('home.sourceCode')}}：
        a(href='https://github.com/cyio/bch123.org', target='_blank') cyio/bch123.org
  // .about(@click='showModal = true') {{$t('home.about')}}
</template>

<script>
import mixin from '@/mixin.js'
// import axios from 'axios'
// import bchaddr from 'bchaddrjs'
import Modal from '../components/Modal'
import SearchBox from '../components/SearchBox'
import Websites from '../components/Websites'
import QRCode from 'qrcode'
export default {
  name: 'Home',
  mixins: [mixin],
  components: {
    Modal,
    SearchBox,
    Websites
  },
  data () {
    return {
      donateAddr: '1M1FYu4zuVaxRPWLZG5CnP8qQrZaqu6c2L',
      useCashAddr: false,
      showModal: false,
      qrUrls: {
        donateAddr: null
      }
    }
  },
  methods: {
    async submit (keywords) {
      this.go({path: '/address/' + keywords})
    },
    async generateQR (text) {
      const url = await QRCode.toDataURL(this.useCashAddr ? text.toUpperCase() : text, { mode: 'alphanumeric' })
      return url
    }
  },
  computed: {
  },
  filters: {
  },
  created () {
    this.generateQR(this.donateAddr).then(data => {
      this.qrUrls.donateAddr = data
    })
  },
  mounted () {
  }
}
</script>

<style>
  .home-view {
		display: flex;
    width: 100%;
    min-height: 500px;
    flex-direction: column;
    align-items: center;
  }
  .home-view .searchbar-input-container {
  }
  .logo {
    background-image: url('../assets/bch-logo-512.png');
    bacground-repeat: no-repeat;
  }
  .logo-wrap {
		margin-top: 3rem;
    margin-bottom: .1rem;
  }
  .logo-wrap img {
    width: 8rem;
  }
  a {
    color: var(--theme);
  }
  .qrcode {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .qrcode img {
  }
  .donate-modal {
    padding-bottom: .1rem;
  }
  .about {
		position: fixed;
    top: .5rem;
    right: 1rem;
    width: 4rem;
    padding: .05rem;
    color: gray;
    z-index: 1000;
  }
  .modal-container {
    text-align: center;
  }
	textarea {
    width: 86%;
    resize: none;
    padding: .05rem 0;
    text-align: center;
    border: none;
	}
</style>
