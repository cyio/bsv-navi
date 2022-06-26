<template lang="pug">
  .searchbar-input-container
    input.searchbar-input(type='search' name='q' v-bind:placeholder="$t('home.searchPlaceholder')" autocomplete='off' spellcheck="false" v-model.trim="words" @keyup.enter="_submit" @change="errMsg = null")
    //- a.icon.link-icon.btc-com(:href="'https://bsv.btc.com/' + words" title="在 btc.com 查看" target="_blank")
    a.icon.link-icon.wsc-com(:href="'https://whatsonchain.com/address/' + words" title="在 whatsonchain 查看" target="_blank")
    icon.search-icon(type="search" name="search" @click.native="_submit")
    .err-msg(v-if="displayErrMsg") {{displayErrMsg}}
</template>
<script>
import mixin from '@/mixin.js'
import { Icon } from 'iview'
export default {
  name: 'search-box',
  mixins: [mixin],
  components: {
    Icon,
  },
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
      const { words: address } = this
      if (!address) {
        // this.errMsg = '不得为空'
        return
      }
      // if (address.indexOf('bitcoincash:') === 0) {
        // this.words = address = address.substr(12)
        // history.replaceState(null, '', `?q=${address}`);
      // }
      this.submit(address)
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
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
    font-size: 1.5rem;
    color: var(--theme);
    padding: 5px 5px 5px 10px;
    align-self: center;
  }
  .search-icon:hover {
    cursor: pointer;
  }
  .err-msg { 
    position: absolute;
    top: 4rem;
    color: red;
  }
  .icon {
    display: inline-block;
    align-self: center;
    width: 22px;
    height: 22px;
  }
  .link-icon {
    background-size: 100%;
    background-repeat: no-repeat;
    opacity: .8;
  }
  .btc-com {
    background-image: url('../assets/btc-com.png');
  }
  .wsc-com {
    background-image: url('https://whatsonchain.com/assets/images/logo/favicon-woc.ico');
    background-position: center;
    margin-left: 10px;
  }
</style>
