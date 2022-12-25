<template lang="pug">
  .statistics
    ul(v-if="market")
      li(v-for="key in Object.keys(market)")
        span.label {{key}}: 
        span.value {{market[key] || '-----'}}
</template>
<script>
import { formatSupply, formatPercentage } from '@/utils/'
let task
export default {
  data () {
    return {
      market: {
        '最新价': null,
        'BSV/BTC': null,
        'BSV/BCH': null,
        '已供应': null,
        // '火币USDT': null,
        '离岸人民币': null,
        '60日累计涨幅': null,
        'OKEx活期年化': null,
      }
    }
  },
  methods: {
    getMaintainDataFromGitee() {
      let url = 'https://gitee.com/api/v5/gists/ba375uensivprto2c08xq70'
      fetch(url).then(res => res.json().then(result => {
        let fileContent = JSON.parse(result.files['main.json'].content)
        let delayMinute = (Number(new Date()) - Number(new Date(result.updated_at))) / 1000 / 60
        if (delayMinute > 5) {
          console.warn('delayMinute: ', delayMinute)
          return
        }
        let data = fileContent.data
        const { percent_change_24h, circulating_supply, max_supply, change_of_60days } = data
        this.market = {
          '最新价': `￥${Math.round(data.price)}`,
          'BSV/BTC': data.bsv_btc.toFixed(4),
          'BSV/BCH': data.bsv_bch.toFixed(4),
          '已供应': formatSupply(circulating_supply, max_supply),
          // '火币USDT': data.usdt_otc_price,
          '离岸人民币': data.usd_otc_price.toFixed(2),
          '60日累计涨幅': change_of_60days !== null && `${change_of_60days > 0 ? '+' : ''}${Math.round(change_of_60days * 100)}%`,
          'OKEx活期年化': data.okex_return_rate
        }
        // this.market['bch/btc'] = data.bch_against_btc.toFixed(3)
      }))
    },
    getMaintainData() {
      let url = 'https://api.oaker.bid/api/bsv/data'
      fetch(url).then(res => res.json().then(result => {
        let data = result.data
        const { percent_change_24h, circulating_supply, max_supply, change_of_60days } = data
        this.market = {
          '最新价': `￥${Math.round(data.price)}`,
          'BSV/BTC': data.bsv_btc.toFixed(4),
          'BSV/BCH': data.bsv_bch.toFixed(4),
          '已供应': formatSupply(circulating_supply, max_supply),
          // '火币USDT': data.usdt_otc_price,
          '离岸人民币': data.usd_otc_price.toFixed(2),
          '60日累计涨幅': change_of_60days !== null && `${change_of_60days > 0 ? '+' : ''}${Math.round(change_of_60days * 100)}%`,
          'OKEx活期年化': data.okex_return_rate
        }
      }))
    }
  },
  computed: {
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
