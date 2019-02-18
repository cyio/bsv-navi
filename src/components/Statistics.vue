<template lang="pug">
  .statistics
    ul(v-if="list")
      li(v-for="item in list")
        span.label {{item.label}}: 
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
      },
    }
  },
  methods: {
    formatPercentage (portion, total) {
      return ((portion / total) * 100).toFixed(2) + '%'
    },
    getMaintainData() {
      let url = 'https://gitee.com/api/v5/gists/ba375uensivprto2c08xq70'
      fetch(url).then(res => res.json().then(result => {
        let fileContent = JSON.parse(result.files['main.json'].content)
        let delayMinute = (Number(new Date()) - Number(new Date(result.updated_at))) / 1000 / 60
        if (delayMinute > 5) {
          console.warn('delayMinute: ', delayMinute)
        }
        let data = fileContent.data
        this.market = {
          price: `￥${Math.round(data.price)}`,
          percent_change_24h: ` (${data.percent_change_24h > 0 ? '+' : ''}${data.percent_change_24h.toFixed(2)}%)`,
          supply: numeral(data.circulating_supply / (10 ** 4)).format('0,000') + '万' + ' / ' + this.formatPercentage(data.circulating_supply, data.max_supply),
          usdt_otc_price: data.usdt_otc_price,
          usd_otc_price: data.usd_otc_price,
        }
        // this.market['bch/btc'] = data.bch_against_btc.toFixed(3)
      }))
    }
  },
  computed: {
    list() {
      let market = this.market
      return [
        { label: '最新价', value: market.price + market.percent_change_24h },
        // { label: 'BSV/BTC', value: market['bsv/btc'] },
        { label: '已供应', value: market.supply },
        { label: '火币USDT', value: market.usdt_otc_price },
        { label: '离岸人民币', value: market.usd_otc_price },
      ]
    }
  },
  beforeMount () {
    this.getMaintainData()
    task = setInterval(() => {
      this.getMaintainData()
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
