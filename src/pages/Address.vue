<template lang="pug">
.address-view
  .searchbar-input-container
    input.searchbar-input(type='search' name='q' placeholder='BCH 地址...' autocomplete='off' autofocus v-model="addressId")
    .btn(@click="submit") 查看
  .address-detail
    .address-balance(v-if="!showLoading && !showErrorMsg")
      .label 余额
      span.value {{addressBalance}}
      span.unit BCH
    .address-tx(v-if="addressTxs && addressTxs.total_count")
      .tx-item(v-for="tx in addressTxs.list")
        .tx-item-header
          .tx-item-title {{tx.balance_diff > 0 ? '接收' : '发送'}}
            span.tx-amount(v-bind:class="{ in: tx.balance_diff > 0, out: tx.balance_diff < 0 }") {{(tx.balance_diff > 0 && '+') + tx.balance_diff / 10 ** 8}}
          .tx-time {{tx.created_at | timeFormat(locale)}}
        // .tx-address xxxxx
    .loading(v-if="showLoading") 载入中...
    .error(v-if="showErrorMsg") 服务暂不可用
      button.btn(@click="setAddressData(addressId)") 点击重试
</template>

<script>
import mixin from '@/mixin.js'
import axios from 'axios'
// import bchaddr from 'bchaddrjs'
import Modal from '../components/Modal'
// import QRCode from 'qrcode'
import Timeago from 'timeago.js'
import numeral from 'numeral'
const timeAgo = new Timeago()
export default {
  name: 'Address',
  mixins: [mixin],
  components: {
    Modal
  },
  data () {
    return {
      addressId: null,
      addressDetail: null,
      addressTxs: null,
      showLoading: true,
      showErrorMsg: false
    }
  },
  methods: {
    submit (e) {
      this.setAddressData(e.target.value)
    },
    setAddressData (id) {
      this.addressDetail = this.addressTxs = null
      this.$bar.start()
      this.showLoading = true
      this.showErrorMsg = false
      axios.all([this.getAddressDetail(id), this.getAddressTxs(id)]).then(axios.spread((detail, txs) => {
        this.$bar.finish()
        this.showLoading = false
        if (!Object.keys(txs).length || !Object.keys(detail).length) {
          this.showErrorMsg = true
          return
        }
        this.addressDetail = detail
        this.addressTxs = txs
      }))
    },
    getAddressDetail (address) {
      // return axios.get(`/api/address?${address}`).then(res => {
      return axios.get(`https://bird.ioliu.cn/v1/?url=https://bch-chain.api.btc.com/v3/address/${address}`).then(res => {
        return res.data.data
      }).catch(err => console.log(err))
    },
    getAddressTxs (address) {
      // return axios.get(`/api/address-txs?${address}`).then(res => {
      return axios.get(`https://bird.ioliu.cn/v1/?url=https://bch-chain.api.btc.com/v3/address/${address}/tx?pagesize=10&verbose=1`).then(res => {
        return res.data.data
      }).catch(err => console.log(err))
    }
  },
  computed: {
    locale () {
      return this.$root.$data.shared.isZh ? 'zh_CN' : 'en_US'
    },
    addressBalance () {
      return this.addressDetail.balance / 10 ** 8
    }
  },
  filters: {
    format (value, unit) {
      if (unit === 'btc') return numeral(value * 10 ** 6).format('0,000,000.00')
      return numeral(value).format('0,0.00')
    },
    timeFormat (time, locale) {
      // console.log(+new Date() - time * 1000)
      // let i = +new Date() - time * 1000
      // let day = 1000 * 60 * 60 * 24
      // console.log(i > day)
      // if (i > day) return (new Date(time * 1000))
      return timeAgo.format(new Date(time * 1000), locale)
    }
  },
  created () {
    if (this.$route.params.id && this.addressId !== this.$route.params.id) {
      this.addressId = this.$route.params.id
      this.setAddressData(this.addressId)
    }
  },
  mounted () {
  }
}
</script>

<style>
  .address-view {
    display: flex;
		width: 100%;
		min-height: 500px;
		flex-direction: column;
		padding-top: 100px;
  }
  .searchbar-input-container {
		display: flex;
    margin: 20px auto;
    padding: 10px;
    max-width: 500px;
    width: 90%;
    background-color: #fff;
    border: 1px solid #666666;
    border-radius: 5px;
  }
  .searchbar-input {
		flex: 1;
    min-width: 150px;
    padding: 0;
    border: 0;
    transition: border .2s ease;
		font-size: .13rem;
  }
  .address-detail {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .address-balance {
    text-align: center;
		margin-bottom: .2rem;
  }
  .address-balance .label {
    color: #7d7d7d;
  }
  .address-balance .value {
		font-size: .3rem;
  }
  .address-balance .unit {
    margin-left: .05rem;
  }
  .tx-item {
    width: 2.8rem;
    border: 1px solid #eee;
    padding: .1rem;
  }
  .tx-item-header {
    display: flex;
    justify-content: space-between;
    color: #908d8d;
  }
  .tx-amount {
    font-weight: bold;
		margin-left: .1rem;
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
  </style>
