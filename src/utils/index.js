import numeral from 'numeral'

export function sleep(ms = 0) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent,
  )
}

export function fetchRetry(url, options, n = 3) {
  return fetch(url, options)
    .then(res => {
      if (n === 1) return console.warn('fetch retry finished')
      return res.status === 403 ? fetchRetry(url, options, n - 1) : res
    })
    .catch(error => {
      if (n === 1) throw error
      return fetchRetry(url, options, n - 1)
    })
}

export function copyToClipboard(containerid) {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(document.getElementById(containerid));
  selection.removeAllRanges();
  selection.addRange(range);
  return document.execCommand("copy");
}

export function inSleepTime () {
  const h = new Date().getHours()
  return h >= 0 && h <= 5
}

export function formatPercentage (portion, total) {
  return ((portion / total) * 100).toFixed(2) + '%'
}

export function formatSupply (circulating_supply, max_supply) {
  return numeral(circulating_supply / (10 ** 4)).format('0,000') + '万' + ' / ' + formatPercentage(circulating_supply, max_supply)
}
