<template lang="pug">
.websites-view
  table
    tr(v-for="cateKey in Object.keys(sites)")
      th(@click="sites[cateKey].expand = !sites[cateKey].expand") {{sites[cateKey].name}}
      .tr-inner
        td(v-for="(site, index) in sites[cateKey].list")
          a.link(v-if="site.url.includes('http')" :href='site.url', :title='site.desc', target='_blank') {{site.title}}
          a.link(v-else @click="go({path: site.url})" tabindex="0") {{site.title}}
</template>
<script>
import mixin from '@/mixin.js'
import sites from '@/api/websites-data.json'
import { fetchData } from '@/api/'

export default {
  name: 'websites',
  mixins: [mixin],
  props: {
  },
  data () {
    return {
      sites: sites
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
    fetchData('/bsv/websites').then(res => {
      this.sites = res
    })
  }
}
</script>
<style lang="stylus">
  .websites-view {
    width: 100%;
    margin: .5rem;
    max-width: 55rem;
    overflow-x: auto;
    white-space: nowrap;
    border: 2px solid #F1F1F1;
    border-radius: 5px;
    padding: 10px;
    table {
      max-width: 100%;
    }
    .tr-inner {
      display: flex;
      flex-wrap: wrap;
      margin-left: .5rem;
    }
    th {
      padding-top: 5px;
      vertical-align: top;
      color: #929191;
    }
    td {
      height: 2.2rem;
      line-height: @height;
      padding: 0 .5rem;
    }
  }
  </style>
