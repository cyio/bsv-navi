const config = require('../private-config.json')
const axios = require('axios')
const request = require('superagent')
const dataApi = require('./data.js')
const querystring = require('querystring')
const fs = require('fs')
Promise.almost = r => Promise.all(r.map(p => (p.catch ? p.catch(e => e) : p)))

let fileContent = {
  data: {},
}
const buildFileContent = async () => {
  Promise.almost([dataApi.getNodes(), dataApi.getMarket()]).then(values => {
    // console.log(values)
    fileContent.data = { ...fileContent.data, nodes: values[0], ...values[1] }

    // console.log(fileContent.data)
    updateGist()
  })
}
let tryTimes = 0
const updateGist = (content = fileContent) => {
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
  axios
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
        refreshGiteeToken()
      } else {
        console.log(e.response.status, e.response.statusText, e.response.config)
      }
    })
}

const refreshGiteeToken = () => {
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
    updateGist() // 无法再用 then 调用，暂时放在这里
    // return res.body
  })
}

// refreshGiteeToken()
buildFileContent()
let task = setInterval(() => {
  buildFileContent()
}, 1000 * 60 * 3)
