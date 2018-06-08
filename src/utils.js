export function sleep(ms = 0) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent,
  )
}

export const fetchRetry = (url, options, n = 3) =>
  fetch(url, options)
    .then(res => {
      if (n === 1) return console.warn('fetch retry finished')
      return res.status === 403 ? fetchRetry(url, options, n - 1) : res
    })
    .catch(error => {
      if (n === 1) throw error
      return fetchRetry(url, options, n - 1)
    })
