<template lang="pug">
table.table.table-responsive
  tbody
    tr(v-for="(cateName, index) in Object.keys(sites)")
      th(scope='row') {{cateName}}
      td(v-for="(site, index) in sites[cateName]")
        a(:href='site.url', target='_blank') {{site.title}}
</template>
<script>
export default {
  name: 'search-box',
  props: {
  },
  data () {
    return {
      sites: {
        '行情': [
          {title: '非小号', url: 'https://www.feixiaohao.com'},
          {title: 'AICoin', url: 'https://www.aicoin.net.cn/'},
          {title: '币值轻快版', url: 'http://coin.leanapp.cn/'}
        ],
        '工具': [
          {title: 'BTC.com', url: 'http://bch.btc.com'},
          {title: 'Blockchair', url: 'https://blockchair.com/'},
          // {title: '支付测试', url: 'http://bch-echo.leanapp.cn'},
          {title: '最简钱包', url: 'https://tsbw.io/bcc/'}
        ],
        '数据': [
          {title: 'fork.lol', url: 'https://fork.lol/'},
          {title: 'Cash vs Core', url: 'https://cashvscore.com/'},
          {title: 'Hashrates', url: 'https://bitinfocharts.com/comparison/hashrate-btc-bch.html#6m'}
        ],
        '社区': [
          {title: 'Reddit', url: 'https://www.reddit.com/r/btc/'},
          {title: '巴比特论坛', url: 'http://8btc.com/forum-147-1.html'}
        ],
        '人物': [
          {title: 'Craig S Wright', url: 'https://twitter.com/ProfFaustus'},
          {title: 'Roger Ver', url: 'https://twitter.com/rogerkver'},
          {title: 'Rick Falkvinge', url: 'https://twitter.com/Falkvinge'}
          // {title: '吴忌寒', url: 'https://weibo.com/bitcoinqqagent'},
          // {title: '江卓尔', url: 'https://weibo.com/ltc1btc'}
        ]
      }
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
<style>
</style>
