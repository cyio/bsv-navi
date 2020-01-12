const config = require('../private-config.json')
const request = require('superagent')
const dataApi = require('./data.js')
const querystring = require('querystring')
const fs = require('fs')
Promise.almost = r => Promise.all(r.map(p => (p.catch ? p.catch(e => e) : p)))

const buildFileContent = async () => {
  Promise.almost([
    dataApi.getMarket(),
    dataApi.getOTC(),
    dataApi.getUSDTOTC(),
    dataApi.getChangeOf60Days(),
  ]).then(values => {
    const content = {
      data: {
        price: null,
        percent_change_24h: null,
        circulating_supply: null,
        max_supply: null,
        usd_otc_price: null,
        usdt_otc_price: null,
        bsv_bch: null,
        bsv_btc: null,
        change_of_60days: null,
      }
    }
    Object.assign(content.data, ...values)
    console.log(content.data)
    updateGist(content)
  })
}
let tryTimes = 0
const updateGist = (content) => {
  console.log('begin update gist')
  let gistId = 'ba375uensivprto2c08xq70'
  let gistData = {
    access_token: config.gitee.access_token,
    description: 'the description for this gist',
    files: {
      'main.json': {
        content: JSON.stringify(content),
      },
    },
    public: 'true',
  }
  let url = `https://gitee.com/api/v5/gists/${gistId}`
  request
    .patch(url, gistData)
    .then(res => {
      console.log('update gist success')
      tryTimes = 0
    })
    .catch(e => {
      tryTimes++
      if (tryTimes >= 3) {
        clearInterval(task)
        throw 'Error: give up update gist'
      }
      if (e.response.status === 401) {
        refreshGiteeToken(content)
      } else {
        console.log(e.response.status, e.response.statusText, e.response.config)
      }
    })
}

const refreshGiteeToken = (content) => {
  if (!config.gitee.refresh_token) {
    throw 'can not find gitee refresh_token in private-config.json'
  }
  let refreshUrl = `https://gitee.com/oauth/token?grant_type=refresh_token&refresh_token=${
    config.gitee.refresh_token
  }`
  return request.post(refreshUrl).end((err, res) => {
    if (err) {
      throw err.status
    }
    console.log('refresh gitee token success')
    config.gitee.access_token = res.body['access_token']
    config.gitee.refresh_token = res.body['refresh_token']
    fs.writeFileSync('./private-config.json', JSON.stringify(config, null, 2))
    updateGist(content) // 无法再用 then 调用，暂时放在这里
    // return res.body
  })
}

// refreshGiteeToken()
buildFileContent()
let task = setInterval(() => {
  buildFileContent()
}, 1000 * 60 * 3)
