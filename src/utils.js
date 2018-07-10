import QRCode from 'qrcode'

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

export async function generateQR(text) {
  const url = await QRCode.toDataURL(text.toUpperCase(), {
    mode: 'alphanumeric',
  })
  return url
}

export function copyToClipboard(containerid) {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(document.getElementById(containerid));
  selection.removeAllRanges();
  selection.addRange(range);
  return document.execCommand("copy");
}
