const dataApi = require('./data.js')

dataApi.getUSDTOTC().then(r => console.log(r))
