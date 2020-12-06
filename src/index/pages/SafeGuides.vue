<template lang="pug">
  .safe-guides-view
    .markdown-body(v-html="content")
</template>
<script>
import marked from 'marked'
// const mdFile = require('./../../assets/safe-guides.md')
// import mdFile from '@/assets/safe-guides.md'
// console.log(mdFile)
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
      content: null,
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
    fetch('/safe-guides.md')
      .then(response => {
        return response.text()
      })
      .then(text => {
        console.log(text)
        this.content = marked(text)
      })
  }
}
</script>

<style lang="css">
@import "./../../assets/github-markdown.css"
</style>

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
