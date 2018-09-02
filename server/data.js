const request = require('superagent')

const getMarket = () => {
  let market = {
    price: null,
    circulating_supply: null,
    max_supply: null,
    bch_against_btc: null,
  }
  return Promise.all([
    request.get('https://api.coinmarketcap.com/v2/ticker/1831/?convert=CNY'),
    request.get('https://api.fork.lol/exchangerate'),
  ])
    .then((result) => {
      let [cmc, forkLol] = result
      let cmcData = cmc.body
      let forkLolData = forkLol.body
      // console.log({cmcData, forkLolData})
      market.price = cmcData.data.quotes.CNY.price
      market.percent_change_24h = cmcData.data.quotes.CNY.percent_change_24h
      market.circulating_supply = cmcData.data.circulating_supply
      market.max_supply = cmcData.data.max_supply
      market.bch_against_btc = forkLolData['bch/btc']
      return market
    })
    .catch(e => {
      console.log()
      return market
    })
}
module.exports = { getMarket }
