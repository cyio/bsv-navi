<template lang="pug">
.home-view
  search-box(:submit='submit')
</template>

<script>
import mixin from '@/mixin.js'
// import axios from 'axios'
// import bchaddr from 'bchaddrjs'
import Modal from '../components/Modal'
import SearchBox from '../components/SearchBox'
// import QRCode from 'qrcode'
export default {
  name: 'Home',
  mixins: [mixin],
  components: {
    Modal,
    SearchBox
  },
  data () {
    return {
    }
  },
  methods: {
    async submit (keywords) {
      this.go({path: '/address/' + keywords})
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
		top: 40%;
  }
</style>
