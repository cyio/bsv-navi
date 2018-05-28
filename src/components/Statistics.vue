<template lang="pug">
  .statistics
    ul(v-if="list")
      li(v-for="item in list")
        span.label {{item.label}}：
        span.value {{item.value || '-----'}}
</template>
<script>
import numeral from 'numeral'
let task
export default {
  data () {
    return {
      market: {
        'price': null,
        'bch/btc': null,
        'supply': null,
        'nodes': null,
      },
    }
  },
  methods: {
    formatPercentage (portion, total) {
      return ((portion / total) * 100).toFixed(2) + '%'
    },
    getMarket() {
      fetch('https://api.coinmarketcap.com/v2/ticker/1831/?convert=CNY'
      ).then(res => res.json()).then(result => {
        this.market.price = `¥ ${Math.round(result.data.quotes.CNY.price)}`
        this.market.supply = numeral(result.data.circulating_supply / (10 ** 4)).format('0,000') + '万' + ' / ' + this.formatPercentage(result.data.circulating_supply, result.data.max_supply)
      })
      fetch('https://api.fork.lol/exchangerate').then(res => res.json().then(result => {
        this.market['bch/btc'] = result['bch/btc'].toFixed(3)
      }))
    },
    getMaintainData() {
      let url = 'https://gitee.com/api/v5/gists/ba375uensivprto2c08xq70'
      fetch(url).then(res => res.json().then(result => {
        let fileContent = JSON.parse(result.files['main.json'].content)
        let nodes = fileContent.data.nodes
        this.market.nodes = `${nodes.follow} / ${this.formatPercentage(nodes.follow, nodes.total)}`
      }))
    }
  },
  computed: {
    list() {
      let market = this.market
      return [
        { label: '最新价', value: market.price },
        { label: 'BCH/BTC', value: market['bch/btc'] },
        { label: '已供应', value: market.supply },
        { label: '共识节点', value: market.nodes },
      ]
    }
  },
  beforeMount () {
    this.getMarket()
    this.getMaintainData()
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
    width: 100%;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    font-size: .9rem;
  }
  li {
    margin-right: 10px;
    white-space: nowrap;
  }
  .label {
    color: #7b7a7a;
  }
  .value {
    font-weight: bold;
  }
</style>
