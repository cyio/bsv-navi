<template lang="pug">
.websites-view
  table
    tr(v-for="cateName in Object.keys(sites)")
      th(@click="sites[cateName].expand = !sites[cateName].expand") {{cateName}}
      .tr-inner
        td(v-for="(site, index) in sites[cateName].content")
          a.link(v-if="site.url.includes('http')" :href='site.url', :title='site.desc', target='_blank') {{site.title}}
          a.link(v-else @click="go({path: site.url})" tabindex="0") {{site.title}}
</template>
<script>
import mixin from '@/mixin.js'
import sites from './websites-data.js'
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
  mounted () {
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
    table {
      max-width: 100%;
      margin: 0 auto;
    }
    .tr-inner {
      margin-left: .5rem;
    }
    td {
      height: 2.2rem;
      line-height: @height;
      padding: 0 .5rem;
    }
  }
  </style>
