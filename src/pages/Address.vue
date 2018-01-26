<template lang="pug">
.address-view
  .searchbar-input-container
    input.searchbar-input(type='search' name='q' placeholder='地址、高度或哈希...' autocomplete='off' @keyup.enter="submit" v-model="addressId")
  .address-detail(v-if="addressDetail")
    .address-balance 
      .label 余额
      span.value {{addressDetail.balance / 10 ** 8}}
      span.unit BCH
    .address-tx(v-if="addressTxs && addressTxs.total_count")
      .tx-item(v-for="tx in addressTxs.list")
        .tx-item-header
          .tx-item-title {{tx.balance_diff > 0 ? '接收' : '发送'}}
            span.tx-amount(v-bind:class="{ in: tx.balance_diff > 0, out: tx.balance_diff < 0 }") {{(tx.balance_diff > 0 && '+') + tx.balance_diff / 10 ** 8}}
          .tx-time {{tx.created_at | timeFormat(locale)}}
        // .tx-address xxxxx
    .loading(v-if="showLoading") 载入中...
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
      showLoading: true
    }
  },
  methods: {
    submit (e) {
      this.setAddressData(e.target.value)
    },
    setAddressData (id) {
      // console.log(e.target.value)
      this.getAddressDetail(id).then(data => {
        this.addressDetail = data
      })
      this.showLoading = true
      this.getAddressTxs(id).then(data => {
        this.addressTxs = data
        this.showLoading = false
      })
    },
    getAddressDetail (address) {
      // return axios.get(`/api/address?${address}`).then(res => {
      return axios.get(`https://bird.ioliu.cn/v1/?url=https://bch-chain.api.btc.com/v3/address/${address}`).then(res => {
        return res.data.data
      }).catch(err => console.log(err))
    },
    getAddressTxs (address) {
      // return axios.get(`/api/address-txs?${address}`).then(res => {
      return axios.get(`https://bird.ioliu.cn/v1/?url=https://bch-chain.api.btc.com/v3/address/${address}/tx?pagesize=8&verbose=1`).then(res => {
        return res.data.data
      }).catch(err => console.log(err))
    }
  },
  computed: {
    locale () {
      return this.$root.$data.shared.isZh ? 'zh_CN' : 'en_US'
    }
  },
  filters: {
    format (value, unit) {
      if (unit === 'btc') return numeral(value * 10 ** 6).format('0,000,000.00')
      return numeral(value).format('0,0.00')
    },
    timeFormat (time, locale) {
      return timeAgo.format(new Date(time * 1000), locale)
    }
  },
  created () {
    console.log(this.$route.params.id)
    if (this.$route.params.id && this.addressId !== this.$route.params.id) {
      console.log('get')
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
    width: 80%;
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
