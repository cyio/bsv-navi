const config = require('../private-config.json')
const axios = require('axios')
const nodes = require('./nodes.js')
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
const buildFileContent = async () => {
  fileContent.data.nodes = await nodes.getNodes()
  console.log(fileContent.data)
  updateGist(fileContent)
}
const updateGist = (content) => {
  // 写入到 gist
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
    if (res.status !== 200) {
      if (res.status === 403) {
        getGiteeToken().then(data => {
          console.log(data)
        })
      } else {
        console.log(res.status, res.data)
      }
    } else {
      console.log('update gist success')
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
    if (res.status !== 200) {
      console.log(res.status, res.data)
      return null
    } else {
      config.gitee.access_token = res.data['access_token']
      fs.writeFile('./private-config.json', JSON.stringify(config, null, 2), (err) => {
        if(err) throw err
      })
      return res.data.access_token
    }
  })
}

buildFileContent()
