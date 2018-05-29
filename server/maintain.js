const config = require('../private-config.json')
const axios = require('axios')
const dataApi = require('./data.js')
const querystring = require('querystring')
const fs = require('fs')

// 抓取内容
let fileContent = {
  data: {
  },
  update_time: Number(new Date())
}
// axios.all([axios.get('https://api.coinmarketcap.com/v2/ticker/1831/?convert=CNY'), axios.get('https://api.fork.lol/exchangerat')]).then(axios.spread((cmc, forkLol) => {
  // console.log(cmc.data, forkLol.data)
// }))
Promise.almost = r => Promise.all(r.map(p => p.catch ? p.catch(e => e) : p));
const buildFileContent = async () => {
  Promise.almost([dataApi.getNodes(), dataApi.getMarket()]).then(values => {
    // console.log(values)
    fileContent.data = {...fileContent.data, nodes: values[0], ...values[1]}

    console.log(fileContent.data)
    updateGist()
  })
}
let tryTimes = 0
const updateGist = (content = fileContent) => {
  let gistId = 'ba375uensivprto2c08xq70'
  console.log('update token: ', config.gitee.access_token)
  let gistData = {
    "access_token": config.gitee.access_token,
    "description": "the description for this gist",
    "files": {
      "main.json": {
        "content": JSON.stringify(content)
      }
    },
    "public": "true"
  }
  let url = `https://gitee.com/api/v5/gists/${gistId}`
  axios.patch(url, gistData).then(res => {
    console.log('update gist success')
  }).catch(e => {
    console.log(e.response.status, e.response.statusText, e.response.config)
    tryTimes++
    if (tryTimes >= 2) {
      throw 'give up update'
    }
    if (e.response.status === 401) {
      getGiteeToken().then(data => {
        updateGist()
      })
    }
  })
}

const getGiteeToken = () => {
  let url = 'https://gitee.com/oauth/token'
  let postData = {
    'grant_type':'password',
    'username':config.gitee.username,
    'password':config.gitee.password,
    'client_id':config.gitee.client_id,
    'client_secret':config.gitee.client_secret,
    'scope':'user_info gists',
  }
  return axios.post(url, querystring.stringify(postData)).then(res => {
    console.log('refresh gitee token success')
    config.gitee.access_token = res.data['access_token']
    fs.writeFileSync('./private-config.json', JSON.stringify(config, null, 2))
    return res.data.access_token
  }).catch(e => console.log(e.response.status, e.response.statusText, e.response.config))
}

buildFileContent()
let task = setInterval(() => {
  buildFileContent()
}, 1000 * 60 * 5)
