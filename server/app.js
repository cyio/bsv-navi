const Koa = require('koa'),
	Router = require('koa-router'),
	statics = require('koa-static'),
	axios = require('axios'),
	path = require('path'),
	history = require('koa2-connect-history-api-fallback'),
	bch = require('bitcoincashjs'),
	websockify = require('koa-websocket');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const app = new Koa()
const socket = websockify(app)
const router = new Router()
const ws = new Router()

const getAddressDetail = (address) => {
	return axios.get(`https://bch-chain.api.btc.com/v3/address/${address}`).then(res => {
	  console.log(res.data.data)
		return res.data.data
	}).catch(err => console.log(err))
}

const getAddressTxs = (address) => {
  return axios.get(`https://bch-chain.api.btc.com/v3/address/${address}/tx?pagesize=8&verbose=1`).then(res => {
    return res.data.data
  }).catch(err => console.log(err))
}

router.get('/api/address', async (ctx, next) => {
  ctx.body = await getAddressDetail(ctx.req._parsedUrl.query)
})

router.get('/api/address-txs', async (ctx, next) => {
  ctx.body = await getAddressTxs(ctx.req._parsedUrl.query)
})

ws.all('/*', async (ctx, next) => {
	console.log('connected websocket')
	setInterval(() => {
		ctx.websocket.send(status)
	}, 1000)
})

app
	.use(router.routes())
	.use(router.allowedMethods())
	.use(history({whkteList: ['/api']}))
	// .use(statics(path.join(__dirname, '../dist')))

app.ws.use(ws.routes()).use(ws.allowedMethods())

function sleep(ms = 0) {
	return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

module.exports = app
