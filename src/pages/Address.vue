<template lang="pug">
.address-view
  search-box(:keywords='cashAddress' :errors='addressErrors' :submit='submit')
  .address-detail
    .row(v-if="!showLoading")
      .address-balance
        div(v-if="addressDetail")
          .label {{$t('address.balance')}}
          span.value {{addressBalance}}
          span.unit BCH
        div(v-if="addressDetail === null")
          span 账户暂无数据<br>未使用过的地址
      .qr-wrap
        .qrcode(v-if="qrUrl")
          img(:src="qrUrl")
    .address-tx(v-if="addressTxs && addressTxs.total_count")
      // .desp {{$t('address.latestTxs')}}
      v-table(
        is-vertical-resize='',
        :vertical-resize-offset='60',
        is-horizontal-resize='',
        style='width:350px',
        :multiple-sort='false',
        :min-height='399',
        even-bg-color='#f2f2f2',
        :title-rows='tableConfig.titleRows',
        :columns='tableConfig.columns',
        :table-data='tableData',
        row-hover-color='#eee',
        row-click-color='#edf7ff',
        @sort-change='sortChange',
        :paging-index='(pageIndex-1)*pageSize'
				:is-loading="tableConfig.isLoading"
      )
      .mt20.mb20.bold
      v-pagination(
        @page-change='pageChange',
        @page-size-change='pageSizeChange',
        :total='addressTxs.total_count',
        :page-size='pageSize',
        :layout="['total', 'prev', 'pager', 'next', 'jumper']"
      )
    Spin(size="large" v-if="showLoading")
    .error(v-if="showErrorMsg") {{$t('address.serviceUnavailable')}}
      button.btn(@click="setAddressData(cashAddress)") {{$t('address.retry')}}
</template>

<script>
import mixin from '@/mixin'
// import { sleep } from '../utils'
import Modal from '../components/Modal'
import SearchBox from '../components/SearchBox'
import bchaddr from 'bchaddrjs'
import QRCode from 'qrcode'
import { format } from 'date-fns'
// import Timeago from 'timeago.js'
import numeral from 'numeral'
import 'vue-easytable/libs/themes-base/index.css'
import { VTable, VPagination } from 'vue-easytable'
import { Spin } from 'iview'
// const timeAgo = new Timeago()
// const proxyHost = 'http://api.oaker.bid/proxy'
const proxyHost = 'https://bird.ioliu.cn/v1'
export default {
  name: 'Address',
  mixins: [mixin],
  components: {
    Modal,
    SearchBox,
    VTable,
    VPagination,
    Spin
  },
  data () {
    return {
      cashAddress: null,
      legacyAddress: null,
      addressDetail: null,
      addressTxs: null,
      showLoading: true,
      showErrorMsg: false,
      addressErrors: null,
      qrUrl: null,
      pageIndex: 1,
      pageSize: 10,
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
        ],
        titleRows: [
          [
            {fields: ['title'], title: '方向', titleAlign: 'center'},
            {fields: ['amount'], title: '金额', titleAlign: 'center'},
            {fields: ['time'], title: '时间', titleAlign: 'center'},
          ]
        ],
        isLoading: true,
      }
    }
  },
  methods: {
    submit (address) {
      try {
        if (bchaddr.isLegacyAddress(address)) {
          const cashAddr = bchaddr.toCashAddress(address)
          this.$router.replace({path: '/address/' + cashAddr}, () => {
            this.legacyAddress = address
            this.cashAddress = cashAddr
            this.setAddressData(this.legacyAddress)
            this.setAddressData(this.legacyAddress)
          })
        } else if (bchaddr.isCashAddress(address)) {
          this.legacyAddress = bchaddr.toLegacyAddress(address)
          this.cashAddress = address
          this.setAddressData(this.legacyAddress)
        }
      } catch (e) {
        this.addressErrors = '地址格式不正确'
        this.addressDetail = this.addressTxs = this.qrUrl = null
        this.showLoading = true
      }
    },
    async setAddressData (id) {
      // console.log(id)
      this.addressDetail = this.addressTxs = this.addressErrors = null
      this.showLoading = true
      this.showErrorMsg = false
      this.addressDetail = await this.getAddressDetail(id)
      this.getTableData()
      this.qrUrl = await this.generateQR(bchaddr.toCashAddress(id))
      this.showLoading = false
      // if (!Object.keys(this.addressDetail).length || !Object.keys(this.addressTxs).length) {
      // this.showErrorMsg = true
      // }
    },
    getAddressDetail (address) {
      // const url = `/api/address?${address}`
      const url = `${proxyHost}/?url=https://bch-chain.api.btc.com/v3/address/${address}`
      return fetch(url).then(res => res.json().then(res => {
        return res.headers ? res.data.data : res.data
      }).catch(err => console.error(err)))
    },
    async getAddressTxs (address, page = this.pageIndex, pageSize = this.pageSize) {
      // const url = `/api/address-txs?${address}`
      const url = `${proxyHost}/?url=https://bch-chain.api.btc.com/v3/address/${address}/tx?page=${page}&pagesize=${pageSize}&verbose=1`
      return fetch(url).then(res => res.json().then(res => {
        return res.headers ? res.data.data : res.data
      }).catch(err => console.error(err)))
    },
    async generateQR (text) {
      const url = await QRCode.toDataURL(text.toUpperCase(), { mode: 'alphanumeric' })
      return url
    },
    async getTableData() {
      this.tableConfig.isLoading = true
      if (!this.addressTxs) {
        this.addressTxs = await this.getAddressTxs(this.legacyAddress)
      } else {
        if (!this.addressTxs.list[(this.pageIndex - 1) * this.pageSize]) {
          let newData = await this.getAddressTxs(this.legacyAddress)
          this.addressTxs.list[(this.pageIndex - 1) * this.pageSize] = null
          this.addressTxs.list.splice((this.pageIndex - 1) * this.pageSize, 0, ...(newData.list))
        }
      }
      this.tableConfig.isLoading = false
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
    addressBalance () {
      return this.addressDetail.balance / 10 ** 8
    },
    tableData () {
      if (!this.addressTxs) return []
      return this.addressTxs.list.map(tx => {
        return tx && {
          'title': tx.balance_diff > 0 ? this.$t('address.received') : this.$t('address.sent'),
          'amount': (tx.balance_diff > 0 && '+') + tx.balance_diff / 10 ** 8,
          'time': this.timeFormat(Math.min(tx.created_at, tx.block_time))
        }
      })
        .slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize)
        .filter(i => !!i)
    }
  },
  filters: {
    format (value, unit) {
      if (unit === 'btc') return numeral(value * 10 ** 6).format('0,000,000.00')
      return numeral(value).format('0,0.00')
    }
  },
  created () {
    if (this.$route.params.id && this.cashAddress !== this.$route.params.id) {
      this.cashAddress = this.$route.params.id
      this.submit(this.cashAddress)
    }
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
    align-items: start;
  }
  .address-detail .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    box-shadow: 0 0 black;
    width: 20rem;
  }
  .qr-wrap {
    text-align: right;
  }
  .qrcode {
  }
  .qrcode img {
    width: 6rem;
  }
  .address-balance {
    padding: 10px;
  }
  .address-balance .label {
    color: #7d7d7d;
  }
  .address-balance .value {
    font-size: 1.5rem;
  }
  .address-balance .unit {
    margin-left: .3rem;
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
  .address-tx .desp {
    text-align: right;
    line-height: 2rem;
    color: #adadad;
    font-size: .9rem;
    margin-right: .12rem;
  }
  .v-table-views {
    min-height: 442px;
  }
  .address-tx {
    font-size: 0.9rem;
  }
  .v-page-li-active {
    border-color: var(--theme);
    background-color: @border-color;
  }
  .v-page-li-active:hover {
    border-color: darken(#f08b16, 10);
    background-color: @border-color;
  }
  .v-page-li:hover {
    border-color: darken(#f08b16, 10);
  }
  .v-page-li:hover a {
    color: var(--theme);
  }
  .ivu-spin {
    position: absolute;
    top: 295px;
    left: 45%;
  }
  </style>
