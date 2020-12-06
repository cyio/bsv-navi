<template lang="pug">
.address-view
  search-box(:keywords='address' :errors='addressErrors' :submit='submit')
  .address-detail
    .row
      .address-balance
        div
          .label {{$t('address.balance')}}
          .fiat-row
            div
              span.value {{addressFiatBalance || '-----'}}
              span.unit {{fiat.toUpperCase()}}
          .balance-row
            span.value {{addressDetail ? addressBalance : '-----'}}
            span.unit BSV
        div(v-if="!showLoading && !showErrorMsg && addressDetail === null")
          span 账户暂无数据<br>未使用过的地址
      .qr-wrap(v-if="qrUrl")
        img(:src="qrUrl")
    .error(v-if="showErrorMsg") {{$t('address.serviceUnavailable')}}
      Button(@click="setAddressData(address)") {{$t('address.retry')}}
      span 或前往
      a(:href="blockExplorerUrl + address" title="在 btc.com 查看" target="_blank")  BTC.com 
      span 查看
    .address-tx
      // .desp {{$t('address.latestTxs')}}
      v-table(
        is-vertical-resize='',
        :vertical-resize-offset='60',
        is-horizontal-resize='',
        style='width:auto',
        :multiple-sort='false',
        :min-height='399',
        even-bg-color='#f2f2f2',
        :title-rows='tableConfig.titleRows',
        :columns='tableConfig.columns',
        :table-data='tableData',
        row-hover-color='#eee',
        row-click-color='#edf7ff',
        @sort-change='sortChange',
        :paging-index='(pageIndex-1)*pageSize',
        :is-loading="tableConfig.isLoading",
      )
      .mt20.mb20.bold
      v-pagination(
        v-if="addressTxs && addressTxs.total_count"
        @page-change='pageChange',
        @page-size-change='pageSizeChange',
        :total='addressTxs.total_count',
        :page-size='pageSize',
        :layout="['total', 'prev', 'pager', 'next', 'jumper']"
      )
    // Spin(size="large" v-if="showLoading")
</template>

<script>
import 'vue-easytable/libs/themes-base/index.css'
import { VTable, VPagination } from 'vue-easytable'
import mixin from '@/mixin'
import { fetchRetry, inSleepTime } from '@/utils/'
import Modal from '@/components/Modal'
import SearchBox from '@/components/SearchBox'
import bchaddr from 'bchaddrjs'
import { format } from 'date-fns'
// import Timeago from 'timeago.js'
import numeral from 'numeral'
import QRCode from 'qrcode'
import { Button } from 'iview'
// const timeAgo = new Timeago()
const proxyHost = 'https://cnbeta.leanapp.cn/api/proxy?url='
// const proxyHost = 'https://bird.ioliu.cn/v2/?url='
export default {
  name: 'Address',
  mixins: [mixin],
  components: {
    Modal,
    SearchBox,
    VTable,
    VPagination,
    Button,
  },
  data () {
    return {
      address: null,
      addressDetail: null,
      addressTxs: null,
      showLoading: true,
      showErrorMsg: false,
      addressErrors: null,
      qrUrl: null,
      prices: { cny: null, usd: null },
      pageIndex: 1,
      pageSize: 10,
      blockExplorerUrl: 'https://bsv.btc.com/',
      tableConfig: {
        multipleSort: false,
        tableData: [],
        columns: [
          {field: 'title', width: 70, columnAlign: 'center', isFrozen: true},
          {
            field: 'amount',
            width: 110,
            columnAlign: 'left',
            isFrozen: true,
            formatter: (rowData, index, pagingIndex) => {
              return `<span class="tx-amount ${Number(rowData.amount) >= 0 ? 'in' : 'out'}">${rowData.amount}</span>`
            }
          },
          {field: 'time', width: 170, columnAlign: 'center', isFrozen: true},
          {
            field: 'id',
            width: 70,
            columnAlign: 'center',
            isFrozen: true,
            formatter: (rowData, index, pagingIndex) => {
              return `<a href=${this.blockExplorerUrl + rowData.id} target="_blank" title="可复制完整交易 ID 或点击前往 BTC.com 查看">${rowData.id}</a>`
            }
          },
        ],
        titleRows: [
          [
            {fields: ['title'], title: this.$t('address.direction'), titleAlign: 'center'},
            {fields: ['amount'], title: this.$t('address.amount'), titleAlign: 'center'},
            {fields: ['time'], title: this.$t('address.time'), titleAlign: 'center'},
            {fields: ['id'], title: 'ID', titleAlign: 'center'},
          ]
        ],
        isLoading: true,
      }
    }
  },
  methods: {
    submit (address) {
      console.log('trigger submit')
      const keywords = address.trim()
      if (this.isHandle(keywords)) {
        this.go({path: `/?q=${keywords}`})
        return
      }

      try {
        if (bchaddr.isLegacyAddress(address)) {
          this.address = address
          this.setAddressData(address)
        }
      } catch (e) {
        this.addressErrors = '地址格式不正确'
        this.addressDetail = this.addressTxs = this.qrUrl = null
        this.showLoading = true
        console.error(e)
      }
    },
    async setAddressData (id) {
      document.title = '帐户 ' + this.address
      this.showLoading = true
      this.showErrorMsg = false
      this.addressDetail = this.addressTxs = this.addressErrors = null
      this.qrUrl = await QRCode.toDataURL(id)
      this.getAddressDetail(id).then(async data => {
        this.addressDetail = data
        this.getTableData()
        this.showLoading = false
        if (!Object.keys(this.addressDetail).length) {
          this.showErrorMsg = true
        }
      })
    },
    // leancloud 免费服务有休眠限制，跳往第三方
    checkSleep() {
      if (inSleepTime()) {
        if (window.confirm(`应用休眠中，服务时间 6:00 - 24:00，点击确定前往第三方网站查看 ${this.blockExplorerUrl}`)) { 
          const url = this.blockExplorerUrl + this.address
          window.location.replace(url)
        } else {
          window.history.back()
        }
        throw new Error('') // 阻止请求接口
      }
    },
    getAddressDetail (address) {
      if (proxyHost.indexOf('lean') > -1) {
        this.checkSleep()
      }
      // const url = `/api/address?${address}`
      const url = `${proxyHost}https://bsv-chain.api.btc.com/v3/address/${address}`
      return fetchRetry(url).then(res => res.json().then(res => {
        return res.headers ? res.data.data : res.data
      }))
    },
    getAddressTxs (address, page = this.pageIndex, pageSize = this.pageSize) {
      // const url = `/api/address-txs?${address}`
      const url = `${proxyHost}${encodeURIComponent(`https://bsv-chain.api.btc.com/v3/address/${address}/tx?page=${page}&pagesize=${pageSize}&verbose=1`)}`
      return new Promise((resolve, reject) => {
        fetchRetry(url).then(res => {
          res.json().then(res => {
            resolve(res.headers ? res.data.data : res.data)
          })
        })
      })
    },
    getPrices () {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cny&ids=bitcoin-cash-sv`
      return fetch(url).then(res => res.json().then(res => {
        return res[0]
      }).catch(err => console.error(err)))
    },
    async getTableData() {
      this.tableConfig.isLoading = true
      if (!this.addressTxs) {
        this.getAddressTxs(this.address).then(data => {
          this.addressTxs = data
          this.tableConfig.isLoading = false
        })
      } else {
        if (!this.addressTxs.list[(this.pageIndex - 1) * this.pageSize]) {
          this.getAddressTxs(this.address).then(data => {
            let newData = data
            this.addressTxs.list[(this.pageIndex - 1) * this.pageSize] = null
            this.addressTxs.list.splice((this.pageIndex - 1) * this.pageSize, 0, ...(newData.list))
            this.tableConfig.isLoading = false
          })
        } else {
          this.tableConfig.isLoading = false
        }
      }
    },
    async pageChange(pageIndex) {
      this.pageIndex = pageIndex
      this.getTableData()
    },
    async pageSizeChange(pageSize) {
      this.pageIndex = 1
      this.pageSize = pageSize
      this.addressTxs = null
      this.getTableData()
    },
    sortChange(params) {
      if (params.height.length > 0) {
        this.tableConfig.tableData.sort(function (a, b) {
          if (params.height === 'asc') {
            return a.height - b.height
          } else if (params.height === 'desc') {
            return b.height - a.height
          } else {
            return 0
          }
        })
      }
    },
    timeFormat (time, locale) {
      // return timeAgo.format(new Date(time * 1000), locale)
      return format(new Date(time * 1000), 'YYYY-MM-DD HH:mm:ss')
    }
  },
  computed: {
    locale () {
      return this.$root.$data.shared.isZh ? 'zh_CN' : 'en_US'
    },
    fiat () {
      return this.$root.$data.shared.isZh ? 'cny' : 'usd'
    },
    addressBalance () {
      return this.addressDetail.balance / 10 ** 8
    },
    tableData () {
      if (!this.addressTxs) return []
      return this.addressTxs.list.map(tx => {
        return tx && {
          'title': tx.balance_diff > 0 ? this.$t('address.received') : this.$t('address.sent'),
          'amount': (tx.balance_diff > 0 ? '+' : '') + Number(tx.balance_diff / 10 ** 8).toFixed(8).replace(/\.?0+$/, ''),
          // block_time 未出块时为 0
          // 接口数据中 created_at 早期交易的时间是错的，只能先取 block_time，如果为 0 时，再取 created_at
          'time': this.timeFormat(tx.block_time || tx.created_at),
          'id': tx.hash,
        }
      })
        .slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize)
        .filter(i => !!i)
    },
    addressFiatBalance() {
      return this.addressDetail && this.prices.usd && numeral(this.addressBalance * this.prices[this.fiat]).format('0,0.00')
    }
  },
  filters: {
    format (value, unit) {
      if (unit === 'btc') return numeral(value * 10 ** 6).format('0,000,000.00')
      return numeral(value).format('0,0.00')
    }
  },
  watch: {
    '$route.query.q': function (newRoute, oldRoute) {
      console.log({newRoute, oldRoute})
      let id = newRoute
      if (id && (!this.address || newRoute !== oldRoute)) {
        this.address = id
        this.submit(this.address)
      } else {
      }
    },
  },
  created () {
    let id = this.$route.query.q
    if (id && !this.address) {
      this.address = id
      this.submit(this.address)
    }
    this.getPrices().then(data => {
      this.prices.cny = data.current_price
      this.prices.usd = this.prices.cny / 6.8
    })
  },
  mounted () {
  }
}
</script>

<style lang="stylus">
  .address-view {
    display: flex;
    width: 100%;
    min-height: 500px;
    flex-direction: column;
    padding: 0 10px;
  }
  .address-detail {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }
  .address-detail .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    box-shadow: 0 0 black;
    width: 20rem;
    min-height: 112px;
  }
  .qr-wrap {
    text-align: right;
  }
  .address-balance {
    width: 13rem;
    padding: 10px;
  }
  .address-balance .label {
    color: #7d7d7d;
    margin-bottom: 10px;
    font-size: .8rem;
  }
  .address-balance .balance-row .value {
    font-size: 1.5rem;
  }
  .address-balance .unit {
    margin-left: .3rem;
    color: #7c7a7a;
  }
  .address-balance .fiat-row {
    height: 20px;
  }
  .address-balance .unit, .fiat-row {
		font-size: .9rem;
  }
  .tx-item {
    width: 20rem;
    border: 1px solid #eee;
    padding: .6rem;
  }
  .tx-item-header {
    display: flex;
    justify-content: space-between;
    color: #908d8d;
  }
  .tx-amount {
    font-weight: bold;
    margin-left: .5rem;
  }
  .in {
    color: green;
  }
  .out {
    color: red;
  }
  .loading {
    margin-top: 50px;
  }
  .address-tx {
    font-size: 0.9rem;
    overflow-x: scroll;
    max-width: 100%;
  }
  .address-tx .desp {
    text-align: right;
    line-height: 2rem;
    color: #adadad;
    font-size: .9rem;
    margin-right: .12rem;
  }
  .v-table-views {
    min-height: 442px;
    min-width: 450px;
    border: none!important;
  }
  .v-table-leftview {
    border: 1px solid rgba(221, 221, 221, 1);
    border-bottom: none;
  }
  .v-table-loading-content {
    left: 30%!important;
  }
  .v-page-li-active {
    border-color: var(--theme)!important;
    background-color: @border-color;
  }
  .v-page-li-active:hover {
    border-color: darken(#fff, 10)!important;
    background-color: @border-color!important;
  }
  .v-page-li:hover {
    border-color: darken(#f08b16, 10)!important;
  }
  .v-page-li-active a {
    color: #fff!important;
  }
  .v-page-li:hover a {
    color: var(--theme)!important;
  }
  .v-page-li-active:hover a {
    color: #fff!important;
  }
  .ivu-spin {
    position: absolute;
    top: 295px;
    left: 45%;
  }
  .error {
    padding: 20px;
  }
  .error button {
    margin: 0 10px;
  }
  </style>
