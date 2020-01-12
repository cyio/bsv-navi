import numeral from 'numeral'

export function formatPercentage (portion, total) {
  return ((portion / total) * 100).toFixed(2) + '%'
}

export function formatSupply (circulating_supply, max_supply) {
  return numeral(circulating_supply / (10 ** 4)).format('0,000') + '万' + ' / ' + formatPercentage(circulating_supply, max_supply)
}
