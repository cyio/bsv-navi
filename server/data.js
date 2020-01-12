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

const getChangeOf60Days = () => {
  return request.get('https://api-pub.bitfinex.com/v2/candles/trade:1D:tBSVUSD/hist?limit=60&sort=0')
    .then((res) => {
      const data = res.body
      // return data[0]
      const changes = data.map(item => (item[2] - item[1]) / item[1])
      const result = changes.reduce((acc, pre) => acc + pre, 0)
      return {
        change_of_60days: result
      }
    })
    .catch(e => {
      console.log('fetch error', e)
      return {}
    })
}
// getChangeOf60Days().then(d => console.log(d))

module.exports = { getMarket, getUSDTOTC, getOTC, getChangeOf60Days }
