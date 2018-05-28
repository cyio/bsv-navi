<template lang="pug">
  .searchbar-input-container
    input.searchbar-input(type='search' name='q' v-bind:placeholder="$t('home.searchPlaceholder')" autocomplete='off' spellcheck="false" v-model="words" @keyup.enter="_submit" @change="errMsg = null")
    icon.search-icon(name="search" @click.native="_submit")
    .err-msg(v-if="displayErrMsg") {{displayErrMsg}}
</template>
<script>
import mixin from '@/mixin.js'
export default {
  name: 'search-box',
  mixins: [mixin],
  props: {
    keywords: {
      type: String,
      default: ''
    },
    errors: {
      type: String,
      default: ''
    },
    submit: {
      type: Function
    }
  },
  data () {
    return {
      words: this.keywords,
      errMsg: this.errors
    }
  },
  computed: {
    displayErrMsg () {
      return this.errors || this.errMsg
    }
  },
  methods: {
    _submit () {
      let address = this.words.trim()
      if (!address) {
        this.errMsg = '不得为空'
        return
      }
      this.submit(address)
    }
  },
  mounted () {
  }
}
</script>
<style>
  .searchbar-input-container {
    align-self: flex-start;
    position: relative;
		display: flex;
    margin: 20px 0;
    padding: 0 .03rem;
    max-width: 500px;
    width: 100%;
    background-color: #fff;
    height: 44px;
    vertical-align: top;
    border-radius: 2px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  .searchbar-input {
		flex: 1;
		min-width: 150px;
		padding: .3rem;
		border: 0;
		transition: border .2s ease;
		font-size: .8rem;
  }
  .search-icon {
    color: var(--theme);
    padding: 5px 5px 5px 10px;
		align-self: center;
		width: 2rem;
		height: 2rem;
  }
  .err-msg { 
    position: absolute;
    top: 4rem;
    color: red;
  }
  </style>
