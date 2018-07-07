<template lang="pug">
  .safe-guides-view
    .markdown-body(v-html="content")
</template>
<script>
import marked from 'marked'
import mdFile from '@/assets/safe-guides.md'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})
export default {
  name: 'SafeGuides',
  props: {
  },
  data () {
    return {
      content: marked(mdFile)
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
  .safe-guides-view {
    min-height: 500px;
		padding: 1rem;
		max-width: 800px;
    margin: 0 auto;
    ul {
      list-style: square;
    }
    ol {
      list-style: decimal!important;
    }
    ul ol, ul ul {
			// margin-left: 1rem;
    }
  }
</style>
