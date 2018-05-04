<template lang="pug">
.home-view
  .logo-wrap
  search-box(:submit='submit')
  websites
</template>

<script>
import mixin from '@/mixin.js'
import SearchBox from '../components/SearchBox'
import Websites from '../components/Websites'
import { Layout, Header, Menu, MenuItem, Breadcrumb, BreadcrumbItem, Card, Footer, Icon } from 'iview'
export default {
  name: 'Home',
  mixins: [mixin],
  components: {
    SearchBox,
    Websites,
    Layout,
    Header,
    Menu,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Footer,
    Icon
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
    width: 100%;
    min-height: 500px;
    flex-direction: column;
    align-items: center;
  }
  .home-view .searchbar-input-container {
  }
  .logo-wrap {
    padding: 4rem;
    margin-top: 2.2rem;
    margin-bottom: .1rem;
    background: url('../assets/logo-bitcoincash-dark.part.svg');
    background-repeat: no-repeat;
    background-size: 100%;
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
  .links a {
    padding: 0 10px;
  }
</style>
