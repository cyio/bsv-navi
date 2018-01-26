<template lang="pug">
.home-view
  .searchbar-input-container
    input.searchbar-input(type='search' name='q' placeholder='BCH 地址...' autocomplete='off' @keyup.enter="submit")
</template>

<script>
import mixin from '@/mixin.js'
// import axios from 'axios'
// import bchaddr from 'bchaddrjs'
import Modal from '../components/Modal'
// import QRCode from 'qrcode'
export default {
  name: 'Home',
  mixins: [mixin],
  components: {
    Modal
  },
  data () {
    return {
      addressDetail: null,
      addressTxs: null
    }
  },
  methods: {
    async submit (e) {
      this.go({path: '/address/' + e.target.value})
    }
  },
  computed: {
  },
  filters: {
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style>
  .home-view {
    display: flex;
		justify-content: center;
		width: 100%;
		min-height: 500px;
  }
  .home-view .searchbar-input-container {
    position: absolute;
    top: 311px;
		display: flex;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    max-width: 500px;
    width: 90%;
    background-color: #fff;
    border: 1px solid #666666;
    border-radius: 5px;
  }
  .home-view .searchbar-input {
		flex: 1;
    min-width: 150px;
    padding: 0;
    border: 0;
    transition: border .2s ease;
		font-size: .13rem;
  }
</style>
