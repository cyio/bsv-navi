const config = require('../private-config.json')
const axios = require('axios')
const request = require('superagent')
const dataApi = require('./data.js')
const querystring = require('querystring')
const fs = require('fs')
Promise.almost = r => Promise.all(r.map(p => p.catch ? p.catch(e => e) : p));

let fileContent = {
  data: {
  },
  update_time: Number(new Date())
}
const buildFileContent = async () => {
  Promise.almost([dataApi.getNodes(), dataApi.getMarket()]).then(values => {
    // console.log(values)
    fileContent.data = {...fileContent.data, nodes: values[0], ...values[1]}

    // console.log(fileContent.data)
    updateGist()
  })
}
let tryTimes = 0
const updateGist = (content = fileContent) => {
  console.log('begin update gist')
  let gistId = 'ba375uensivprto2c08xq70'
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
    tryTimes++
    if (tryTimes >= 3) {
      clearInterval(task)
      throw 'Error: give up update gist'
    }
    if (e.response.status === 401) {
      getGiteeToken()
    } else {
      console.log(e.response.status, e.response.statusText, e.response.config)
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
  return request
    .post(url)
    .set('Host', 'gitee.com')
    .send(querystring.stringify(postData))
    .end((err, res) => {
      if (err) {
        throw err.status
      }
      console.log('refresh gitee token success')
      config.gitee.access_token = res.body['access_token']
      fs.writeFileSync('./private-config.json', JSON.stringify(config, null, 2))
      updateGist() // 无法再用 then 调用，暂时放在这里
      // return res.body
    })
}

// getGiteeToken()
buildFileContent()
let task = setInterval(() => {
  buildFileContent()
}, 1000 * 60 * 3)
