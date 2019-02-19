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
  return request.get('https://api-ddc.wallstreetcn.com/market/real?fields=prod_name%2Cpreclose_px%2Clast_px%2Cpx_change%2Cpx_change_rate%2Cprice_precision&prod_code=000001.SS%2CUS500.OTC%2CEURUSD.OTC%2CXAUUSD.OTC%2CUSDCNH.OTC%2CUKOIL.OTC%2CBTCUSD.Bitfinex')
    .then((res) => {
      const otcData = res.body.data
      return {
        usd_otc_price: otcData.snapshot['USDCNH.OTC'][2]
      }
    })
    .catch(e => {
      console.log('fetch error', e)
      return {}
    })
}
module.exports = { getMarket, getUSDTOTC, getOTC }
