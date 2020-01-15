const request = require('superagent')

const getMarket = () => {
  return request.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cny&ids=bitcoin,bitcoin-cash,bitcoin-cash-sv')
    .then((res) => {
      // 返回数据会根据市值变化
      // const [btcData, bchData, bsvData] = res.body
      const convertedData = {}
      res.body.forEach(i => convertedData[i.symbol] = i)
      const { btc, bch, bsv } = convertedData
      return {
        price: bsv.current_price,
        percent_change_24h: bsv.price_change_percentage_24h,
        circulating_supply: bsv.circulating_supply,
        max_supply: bsv.total_supply,
        bsv_bch: bsv.current_price / bch.current_price,
        bsv_btc: bsv.current_price / btc.current_price,
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
