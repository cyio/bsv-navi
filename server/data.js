const request = require('superagent')

const getMarket = () => {
  return request.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cny&ids=bitcoin-cash-sv')
    .then((res) => {
      const tickerData = res.body[0]
      return {
        price: tickerData.current_price,
        percent_change_24h: tickerData.price_change_percentage_24h,
        circulating_supply: tickerData.circulating_supply,
        max_supply: tickerData.total_supply,
      }
    })
    .catch(e => {
      console.log('fetch error', e)
      return {}
    })
}

const getOTC = () => {
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
module.exports = { getMarket, getOTC }
