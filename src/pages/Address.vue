<template lang="pug">
.address-view
  search-box(:keywords='addressId' :errors='addressErrors' :submit='submit')
  .address-detail
    .row
      .address-balance(v-if="!showLoading && !showErrorMsg")
        .label {{$t('address.balance')}}
        span.value {{addressBalance}}
        span.unit BCH
      .qr-wrap
        .qrcode(v-if="qrUrl")
          img(:src="qrUrl")
    .address-tx(v-if="addressTxs && addressTxs.total_count")
      .desp {{$t('address.latestTxs')}}
      .tx-item(v-for="tx in addressTxs.list")
        .tx-item-header
          .tx-item-title {{tx.balance_diff > 0 ? $t('address.received') : $t('address.sent')}}
            span.tx-amount(v-bind:class="{ in: tx.balance_diff > 0, out: tx.balance_diff < 0 }") {{(tx.balance_diff > 0 && '+') + tx.balance_diff / 10 ** 8}}
          .tx-time {{tx.created_at | timeFormat(locale)}}
        // .tx-address xxxxx
    .loading(v-if="showLoading") {{$t('address.loading')}}
    .error(v-if="showErrorMsg") {{$t('address.serviceUnavailable')}}
      button.btn(@click="setAddressData(addressId)") {{$t('address.retry')}}
</template>

<script>
import mixin from '@/mixin'
// import { sleep } from '../utils'
import axios from 'axios'
// import jsonp from 'jsonp-es6'
import Modal from '../components/Modal'
import SearchBox from '../components/SearchBox'
import bchaddr from 'bchaddrjs'
import QRCode from 'qrcode'
import Timeago from 'timeago.js'
import numeral from 'numeral'
const timeAgo = new Timeago()
export default {
  name: 'Address',
  mixins: [mixin],
  components: {
    Modal,
    SearchBox
  },
  data () {
    return {
      addressId: null,
      addressDetail: null,
      addressTxs: null,
      showLoading: true,
      showErrorMsg: false,
      addressErrors: null,
      qrUrl: null
    }
  },
  methods: {
    submit (address) {
      try {
        if (bchaddr.isLegacyAddress(address)) {
          const cashAddr = bchaddr.toCashAddress(address)
          this.$router.replace({path: '/address/' + cashAddr}, () => {
            this.setAddressData(address)
            this.addressId = cashAddr
          })
        } else if (bchaddr.isCashAddress(address)) {
          this.setAddressData(bchaddr.toLegacyAddress(address))
        }
      } catch (e) {
        this.addressErrors = '地址格式不正确'
        this.addressDetail = this.addressTxs = null
        this.showLoading = true
        // console.log('address err', e)
      }
    },
    async setAddressData (id) {
      console.log(id)
      this.addressDetail = this.addressTxs = this.addressErrors = null
      this.$bar.start()
      this.showLoading = true
      this.showErrorMsg = false
      this.addressDetail = await this.getAddressDetail(id)
      this.addressTxs = await this.getAddressTxs(id)
      this.qrUrl = await this.generateQR(bchaddr.toCashAddress(id))
      this.$bar.finish()
      this.showLoading = false
      if (!Object.keys(this.addressDetail).length || !Object.keys(this.addressTxs).length) {
        this.showErrorMsg = true
      }
    },
    getAddressDetail (address) {
      // return axios.get(`/api/address?${address}`).then(res => {
      return axios.get(`https://bird.ioliu.cn/v1/?url=https://bch-chain.api.btc.com/v3/address/${address}`).then(res => {
        return res.headers ? res.data.data : res.data
      }).catch(err => console.log(err))
    },
    async getAddressTxs (address) {
      // return axios.get(`/api/address-txs?${address}`).then(res => {
      return axios.get(`https://bird.ioliu.cn/v1/?url=https://bch-chain.api.btc.com/v3/address/${address}/tx?pagesize=10&verbose=1`).then(res => {
        return res.headers ? res.data.data : res.data
      }).catch(err => console.log(err))
    },
    async generateQR (text) {
      const url = await QRCode.toDataURL(text.toUpperCase(), { mode: 'alphanumeric' })
      return url
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
      return timeAgo.format(new Date(time * 1000), locale)
    }
  },
  created () {
    if (this.$route.params.id && this.addressId !== this.$route.params.id) {
      this.addressId = this.$route.params.id
      this.submit(this.addressId)
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
  }
  .address-detail {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
  </style>
