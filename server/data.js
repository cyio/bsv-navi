const request = require('superagent')

const getMarket = () => {
  return request.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cny&ids=bitcoin,bitcoin-cash,bitcoin-cash-sv')
    .then((res) => {
      const [btcData, bchData, bsvData] = res.body
      return {
        price: bsvData.current_price,
        percent_change_24h: bsvData.price_change_percentage_24h,
        circulating_supply: bsvData.circulating_supply,
        max_supply: bsvData.total_supply,
        bsv_bch: bsvData.current_price / bchData.current_price,
        bsv_btc: bsvData.current_price / btcData.current_price,
      }
    })
    .catch(e => {
      console.log('fetch error', e)
      return {}
    })
}

const getUSDTOTC = () => {
  return request.get('https://otc-api.eiijo.cn/v1/data/market/detail?currencyId=1')
    .then((res) => {
      const otcData = res.body.data
      return {
        usdt_otc_price: otcData.detail[2].buy,
      }
    })
    .catch(e => {
      console.log('fetch error', e)
      return {}
    })
}

const getOTC = () => {
  return request.get('https://api.exchangerate-api.com/v4/latest/USD')
    .then((res) => {
      const otcData = res.body
      return {
        usd_otc_price: otcData.rates.CNY
      }
    })
    .catch(e => {
      console.log('fetch error', e)
      return {}
    })
}
module.exports = { getMarket, getUSDTOTC, getOTC }
