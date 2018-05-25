<template lang="pug">
  .statistics
    ul(v-if="list" )
      li(v-for="item in list")
        span.label {{item.label}}：
        span.value {{item.value}}
</template>
<script>
import numeral from 'numeral'
let task
export default {
  data () {
    return {
      market: null,
    }
  },
  methods: {
    formatPercentage (portion, total) {
      return ((portion / total) * 100).toFixed(2) + '%'
    },
    getMarket() {
      fetch('https://api.coinmarketcap.com/v2/ticker/1831/?convert=CNY').then(res => res.json()).then(result => {
        this.market = result.data
      })
    }
  },
  computed: {
    list() {
      let market = this.market
      if (!market || !market.id) return null
      return [
        { label: '最新价', value: `¥ ${Math.round(market.quotes.CNY.price)}` },
        { label: '已供应', value: numeral(market.circulating_supply / (10 ** 4)).format('0,000') + '万' + ' / ' + this.formatPercentage(market.circulating_supply, market.max_supply) }
      ]
    }
  },
  beforeMount () {
    this.getMarket()
    task = setInterval(() => {
      this.getMarket()
    }, 1000 * 60 * 3)
  },
  beforeDestory () {
    clearInterval(task)
  }
}
</script>
<style lang="stylus" scoped>
  .statistics {
    height: 22px;
    min-width: 1px;
  }
  ul {
    display: flex;
    list-style: none;
    font-size: .9rem;
  }
  li {
    margin-right: 10px;
  }
  .label {
    color: #7b7a7a;
  }
  .value {
    font-weight: bold;
  }
</style>
