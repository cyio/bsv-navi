const axios = require('axios')
function consensus(value) {
  if ('bitcoin-cash' === 'bitcoin') {
    if (/0\.[23456789]\./.test(value)) {
      return 0
    }
    if (/0\.1[012]/.test(value)) {
      return 0
    }
    if (/0\.13\.0/.test(value)) {
      return 0
    }
    if (/0\.1[3456]/.test(value)) {
      return 1
    }
  } else if ('bitcoin-cash' === 'bitcoin-cash') {
    if (/0\.15/.test(value)) {
      return 0
    }
    if (/0\.16/.test(value)) {
      return 0
    }
    if (/0\.17/.test(value)) {
      return 1
    }
    if (/BUCash\:1\.3/.test(value)) {
      return 1
    }
    if (/BUCash\:1\.2/.test(value)) {
      return 0
    }
    if (/BUCash\:1\.1/.test(value)) {
      return 0
    }
    if (/Bitcoin XT\:0\.11\.0I/.test(value)) {
      return 1
    }
    if (/Classic/.test(value)) {
      return 0
    }
    if (/Bitcoin XT\:0\.11\.0[ABCDEFGH]/.test(value)) {
      return 0
    }
  }

  return -1
}
function fimplementations(value) {
  if ('bitcoin-cash' === 'bitcoin') {
    if (/Satoshi:0/.test(value)) {
      return 'Bitcoin Core'
    }
  } else if ('bitcoin-cash' === 'bitcoin-cash') {
    if (/Bitcoin ABC/.test(value)) {
      return 'Bitcoin ABC'
    }
    if (/BUCash/.test(value)) {
      return 'Bitcoin Unlimited'
    }
    if (/Bitcoin XT/.test(value)) {
      return 'Bitcoin XT'
    }
    if (/Classic/.test(value)) {
      return 'Bitcoin Classic'
    }
  }

  return 'Others'
}
const getNodes = () => {
  let url = 'https://api.blockchair.com/bitcoin-cash/nodes'
  return axios.get(url).then(res => {
    let data = res.data
    var consensus_total = { total: Object.keys(data['nodes']).length }
    let implementations = {}
    for (let [key, value] of Object.entries(data['versions'])) {
      var fkey = fimplementations(key)
      implementations[fkey] = implementations[fkey]
        ? implementations[fkey] + value
        : value
      var has_consensus = consensus(key)
      consensus_total[has_consensus] = consensus_total[has_consensus]
        ? consensus_total[has_consensus] + value
        : value
    }
    consensus_total['follow'] = consensus_total[1] ? consensus_total[1] : 0
    return consensus_total
  })
}
const getMarket = () => {
  let market = {
    price: null,
    circulating_supply: null,
    max_supply: null,
    bch_against_btc: null,
  }
  return axios
    .all([
      axios.get('https://api.coinmarketcap.com/v2/ticker/1831/?convert=CNY'),
      axios.get('https://api.fork.lol/exchangerate'),
    ])
    .then(
      axios.spread((cmc, forkLol) => {
        // console.log(cmc.data, forkLol.data)
        market.price = cmc.data.data.quotes.CNY.price
        market.percent_change_24h = cmc.data.data.quotes.CNY.percent_change_24h
        market.circulating_supply = cmc.data.data.circulating_supply
        market.max_supply = cmc.data.data.max_supply
        market.bch_against_btc = forkLol.data['bch/btc']
        return market
      }),
    )
    .catch(e => {
      console.log(e.response.status, e.response.config)
      return market
    })
}
module.exports = { getNodes: getNodes, getMarket: getMarket }
