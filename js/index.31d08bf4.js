(function(e){function t(t){for(var a,n,o=t[0],l=t[1],c=t[2],u=0,h=[];u<o.length;u++)n=o[u],i[n]&&h.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},i={index:0},r=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("5779")},"05ef":function(e,t,s){},"0cb1":function(e,t,s){"use strict";var a=s("b6e7"),i=s.n(a);i.a},"0e55":function(e,t,s){},1:function(e,t){},"14ab":function(e,t,s){},1685:function(e,t,s){},1699:function(e,t,s){},"1dcb":function(e,t,s){},2:function(e,t){},"22d7":function(e,t,s){"use strict";var a=s("0e55"),i=s.n(a);i.a},"3f8b":function(e,t,s){},5779:function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),i=(s("1685"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{handle:"handle"===e.currentView},attrs:{id:"app"}},[s("div",{staticClass:"main-container"},[s("header",[s("div",{staticClass:"layout-logo link",on:{click:function(t){return e.go({path:"/"})}}},[e.currentView||"Home"!==e.$route.name?s("div",{staticClass:"logo-wrap"}):s("span",[e._v(e._s(e.$t("home.title")))])]),e.currentView&&e.$route.meta.titles[e.currentView]?s("span",{staticClass:"sub-page-title"},[e._v("> "+e._s(e.$route.meta.titles[e.currentView]))]):e._e(),s("div",{staticClass:"layout-nav"},[e.isSupportWebShare?s("div",{staticClass:"link",on:{click:e.share}},[e._v("分享")]):e._e()])]),e.currentView?s("div",{staticClass:"content"},[s("router-view",{attrs:{name:e.currentView}})],1):s("div",{staticClass:"content"},[s("keep-alive",[e.$route.meta.keepAlive?s("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():s("transition",{attrs:{name:"fade"}},[s("router-view")],1)],1),s("footer",[s("div",[e._v("@"+e._s((new Date).getFullYear())+" © bsv.oaker.bid ")])])])])}),r=[],n=s("c6c6"),o=s.n(n);let l=new o.a(window.navigator.userAgent);var c={methods:{debug(e){console.log("debug",e)},go(e){this.$router.push(e)},goBack(){this.$router.go(-1)},goHome(){window.location.assign(window.location.origin)},isHandle(e){return/^\$/.test(e)||e.length<20}},computed:{isMobile(){return l.mobile()},isSupportWebShare(){return navigator.share}}},d={mixins:[c],name:"app",components:{},data(){return{currentView:null}},methods:{share(){navigator.share({title:"bsv.oaker.bid",text:"",url:window.location.href}).then(()=>console.log("Successful share")).catch(e=>console.log("Error sharing",e))}},watch:{"$route.query.q":function(e,t){let s=e;s?this.currentView=this.isHandle(s)?"handle":"address":(this.currentView=null,document.title="BSV_"+this.$t("home.title"))}},created(){let e=this.$route.query.q;this.currentView=e?this.isHandle(e)?"handle":"address":null}},u=d,h=(s("e6fc"),s("2877")),p=Object(h["a"])(u,i,r,!1,null,null,null),m=p.exports,v=(s("ac6a"),s("8c4f")),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home-view"},[s("statistics"),s("search-box",{attrs:{submit:e.submit}}),s("websites")],1)},b=[],g=s("1da1"),w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"searchbar-input-container"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.words,expression:"words",modifiers:{trim:!0}}],staticClass:"searchbar-input",attrs:{type:"search",name:"q",placeholder:e.$t("home.searchPlaceholder"),autocomplete:"off",spellcheck:"false"},domProps:{value:e.words},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e._submit(t)},change:function(t){e.errMsg=null},input:function(t){t.target.composing||(e.words=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),s("a",{staticClass:"icon btc-com",attrs:{href:"https://bsv.btc.com/"+e.words,title:"在 btc.com 查看",target:"_blank"}}),s("icon",{staticClass:"search-icon",attrs:{type:"search",name:"search"},nativeOn:{click:function(t){return e._submit(t)}}}),e.displayErrMsg?s("div",{staticClass:"err-msg"},[e._v(e._s(e.displayErrMsg))]):e._e()],1)},_=[],C=s("e069"),y={name:"search-box",mixins:[c],components:{Icon:C["Icon"]},props:{keywords:{type:String,default:""},errors:{type:String,default:""},submit:{type:Function}},data(){return{words:this.keywords,errMsg:this.errors}},computed:{displayErrMsg(){return this.errors||this.errMsg}},methods:{_submit(){const e=this.words;e&&this.submit(e)}},mounted(){}},x=y,k=(s("c867"),Object(h["a"])(x,w,_,!1,null,"5f23ae1e",null)),S=k.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"websites-view"},[s("table",e._l(Object.keys(e.sites),function(t){return s("tr",[s("th",{on:{click:function(s){e.sites[t].expand=!e.sites[t].expand}}},[e._v(e._s(t))]),s("div",{staticClass:"tr-inner"},e._l(e.sites[t].content,function(t,a){return s("td",[t.url.includes("http")?s("a",{staticClass:"link",attrs:{href:t.url,title:t.desc,target:"_blank"}},[e._v(e._s(t.title))]):s("a",{staticClass:"link",attrs:{tabindex:"0"},on:{click:function(s){return e.go({path:t.url})}}},[e._v(e._s(t.title))])])}),0)])}),0)])},$=[],T={"社区":{content:[{title:"骷髅会",desc:"微信群聊天记录",url:"https://svskull.club/"},{title:"WeiBlock",desc:"链上微博",url:"https://weiblock.app/"},{title:"巴比特论坛",url:"https://www.chainnode.com/forum/269"},{title:"Reddit",url:"https://www.reddit.com/r/bitcoinsv/"}]},"行情":{content:[{title:"加密货币市值",desc:"Cryptocurrency Market Capitalizations | CoinMarketCap",url:"https://coinmarketcap.com/zh/"},{title:"非小号",desc:"比特币行情价格_专注数字货币行业大数据分析",url:"https://www.feixiaohao.com/"}]},"资讯":{content:[{title:"币世界",url:"https://www.bishijie.com/kuaixun"},{title:"CoinGeek",url:"https://coingeek.com/"},{title:"BSV Daily",url:"https://media.bitcoinfiles.org/83264827cdc0825b40868307daec68f34a78ce5f3ac3547b1efea61b64bfe449"}]},"浏览器":{content:[{title:"ViaBTC",url:"https://explorer.viabtc.com/bsv"},{title:"WhatsOnChain",url:"https://whatsonchain.com/"},{title:"Blockchair",url:"https://blockchair.com/bitcoin-sv"},{title:"BTC.com",url:"https://bsv.btc.com"}]},"工具":{content:[{title:"Polynym",desc:"Simple BSV address resolution for HandCash, RelayX and PayMail handles.",url:"https://polynym.io/"},{title:"Bitpaste",desc:"On-chain text and file sharing",url:"https://www.bitpaste.app"},{title:"Bico Media",url:"https://bico.media/",desc:"Bitcoin sv blockchain files for content creators"}]},"数据":{content:[{title:"活跃地址",desc:"BSV,BCH,BTC 每日活跃地址数对比",url:"https://bitinfocharts.com/comparison/activeaddresses-btc-bch-bsv.html#log&6m"},{title:"交易量",desc:"BSV,BCH,BTC 每日交易数对比",url:"https://bitinfocharts.com/comparison/transactions-btc-bch-bsv.html#log&6m"},{title:"算力",desc:"BSV,BCH,BTC 每日算力对比",url:"https://bitinfocharts.com/comparison/hashrate-btc-bch-bsv.html#6m"},{title:"BitcoinBlocks",desc:"live transactions on Bitcoin SV ",url:"https://bitcoinblocks.live/"},{title:"TX Highway",desc:"Live Bitcoin Cash vs Bitcoin Core Transaction Visualizer ",url:"https://txhighway.com/"},{title:"CoinDance",url:"https://coin.dance/"}]},"入门":{content:[{title:"白皮书中文",url:"http://www.8btc.com/wiki/bitcoin-a-peer-to-peer-electronic-cash-system"},{title:"比特币是什么",desc:"知乎最高票答案，中文界第一科普长文",url:"https://www.zhihu.com/question/22076666/answer/69638270"},{title:"中本聪研究所",desc:"阅读中本聪邮件、论坛帖子首选 - Nakamoto Studies",url:"https://nakamotostudies.org/"}]},"钱包":{content:[{title:"HandCash",url:"http://www.handcash.io/"},{title:"Relayx",url:"https://relayx.io/"},{title:"ElectrumSV",desc:"The Bitcoin SV Desktop Wallet",url:"https://electrumsv.io/"},{title:"打点钱包",url:"https://www.ddpurse.com/"},{title:"Coinomi",url:"https://coinomi.com/"},{title:"Jaxx",url:"https://jaxx.io/"},{title:"Exodus",url:"https://www.exodus.io/"}]},"交易所":{content:[{title:"OKEx",url:"https://www.okex.com/"},{title:"火币",url:"https://www.huobi.com/"},{title:"Float SV",url:"https://www.floatsv.com/"}]},"考古":{content:[{title:"创世地址",url:"?q=1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"},{title:"创世交易",desc:"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",url:"https://bsv.btc.com/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"}]}},A={name:"websites",mixins:[c],props:{},data(){return{sites:T}},computed:{},methods:{},mounted(){}},D=A,E=(s("0cb1"),Object(h["a"])(D,B,$,!1,null,null,null)),j=E.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"statistics"},[e.market?s("ul",e._l(Object.keys(e.market),function(t){return s("li",[s("span",{staticClass:"label"},[e._v(e._s(t)+": ")]),s("span",{staticClass:"value"},[e._v(e._s(e.market[t]||"-----"))])])}),0):e._e()])},z=[],M=s("6612"),O=s.n(M);function L(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;return fetch(e,t).then(a=>{return 1===s?console.warn("fetch retry finished"):403===a.status?L(e,t,s-1):a}).catch(a=>{if(1===s)throw a;return L(e,t,s-1)})}function q(e){const t=window.getSelection(),s=document.createRange();return s.selectNodeContents(document.getElementById(e)),t.removeAllRanges(),t.addRange(s),document.execCommand("copy")}function U(){const e=(new Date).getHours();return e>=0&&e<=5}function H(e,t){return(e/t*100).toFixed(2)+"%"}function P(e,t){return O()(e/1e4).format("0,000")+"万 / "+H(e,t)}let I;var F={data(){return{market:{"最新价":null,"BSV/BTC":null,"BSV/BCH":null,"已供应":null,"火币USDT":null,"离岸人民币":null,"60日累计涨幅":null}}},methods:{getMaintainData(){let e="https://gitee.com/api/v5/gists/ba375uensivprto2c08xq70";fetch(e).then(e=>e.json().then(e=>{let t=JSON.parse(e.files["main.json"].content),s=(Number(new Date)-Number(new Date(e.updated_at)))/1e3/60;s>5&&console.warn("delayMinute: ",s);let a=t.data;a.percent_change_24h;const i=a.circulating_supply,r=a.max_supply,n=a.change_of_60days;this.market={"最新价":`￥${Math.round(a.price)}`,"BSV/BTC":a.bsv_btc.toFixed(4),"BSV/BCH":a.bsv_bch.toFixed(4),"已供应":P(i,r),"火币USDT":a.usdt_otc_price,"离岸人民币":a.usd_otc_price.toFixed(2),"60日累计涨幅":null!==n&&`${n>0?"+":""}${100*n.toFixed(2)}%`}}))}},computed:{},beforeMount(){this.getMaintainData(),I=setInterval(()=>{this.getMaintainData()},18e4)},beforeDestory(){clearInterval(I)}},R=F,N=(s("ca4c"),Object(h["a"])(R,V,z,!1,null,"3e91cfbc",null)),W=N.exports,J={name:"Home",mixins:[c],components:{SearchBox:S,Websites:j,Statistics:W,Layout:C["Layout"],Header:C["Header"],Menu:C["Menu"],MenuItem:C["MenuItem"],Breadcrumb:C["Breadcrumb"],BreadcrumbItem:C["BreadcrumbItem"],Card:C["Card"],Footer:C["Footer"],Icon:C["Icon"]},data(){return{currentView:null}},methods:{submit(e){var t=this;return Object(g["a"])(function*(){e=e.trim(),0===e.indexOf("bitcoincash:")&&(e=e.substr(12)),t.go({path:`?q=${e}`})})()}},computed:{},filters:{},created(){},mounted(){}},Y=J,Z=(s("90e0"),Object(h["a"])(Y,f,b,!1,null,null,null)),G=Z.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"address-view"},[s("search-box",{attrs:{keywords:e.address,errors:e.addressErrors,submit:e.submit}}),s("div",{staticClass:"address-detail"},[s("div",{staticClass:"row"},[s("div",{staticClass:"address-balance"},[s("div",[s("div",{staticClass:"label"},[e._v(e._s(e.$t("address.balance")))]),s("div",{staticClass:"fiat-row"},[s("div",[s("span",{staticClass:"value"},[e._v(e._s(e.addressFiatBalance||"-----"))]),s("span",{staticClass:"unit"},[e._v(e._s(e.fiat.toUpperCase()))])])]),s("div",{staticClass:"balance-row"},[s("span",{staticClass:"value"},[e._v(e._s(e.addressDetail?e.addressBalance:"-----"))]),s("span",{staticClass:"unit"},[e._v("BSV")])])]),e.showLoading||e.showErrorMsg||null!==e.addressDetail?e._e():s("div",[e._m(0)])]),e.qrUrl?s("div",{staticClass:"qr-wrap"},[s("img",{attrs:{src:e.qrUrl}})]):e._e()]),e.showErrorMsg?s("div",{staticClass:"error"},[e._v(e._s(e.$t("address.serviceUnavailable"))),s("Button",{on:{click:function(t){return e.setAddressData(e.address)}}},[e._v(e._s(e.$t("address.retry")))]),s("span",[e._v("或前往")]),s("a",{attrs:{href:e.blockExplorerUrl+e.address,title:"在 btc.com 查看",target:"_blank"}},[e._v(" BTC.com ")]),s("span",[e._v("查看")])],1):e._e(),s("div",{staticClass:"address-tx"},[s("v-table",{staticStyle:{width:"auto"},attrs:{"is-vertical-resize":"","vertical-resize-offset":60,"is-horizontal-resize":"","multiple-sort":!1,"min-height":399,"even-bg-color":"#f2f2f2","title-rows":e.tableConfig.titleRows,columns:e.tableConfig.columns,"table-data":e.tableData,"row-hover-color":"#eee","row-click-color":"#edf7ff","paging-index":(e.pageIndex-1)*e.pageSize,"is-loading":e.tableConfig.isLoading},on:{"sort-change":e.sortChange}}),s("div",{staticClass:"mt20 mb20 bold"}),e.addressTxs&&e.addressTxs.total_count?s("v-pagination",{attrs:{total:e.addressTxs.total_count,"page-size":e.pageSize,layout:["total","prev","pager","next","jumper"]},on:{"page-change":e.pageChange,"page-size-change":e.pageSizeChange}}):e._e()],1)])],1)},X=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",[e._v("账户暂无数据"),s("br"),e._v("未使用过的地址")])}],K=(s("55dd"),s("a481"),s("34bf"),s("e5fb")),ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal-mask",attrs:{transition:"modal"}},[s("div",{staticClass:"modal-wrapper",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"_modal-header"},[s("div",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.title||e.$t("home.aboutTitle")))]),s("div",{staticClass:"modal-close",on:{click:e.close}},[s("span"),s("span")])]),s("div",{staticClass:"modal-body"},[e._t("content",[e._v("default body")])],2)])])])},te=[],se={name:"modal",props:{title:{type:String,default:""},show:!1},data(){return{}},watch:{show(e){const t=window.document.querySelectorAll("body")[0];t.classList.toggle("modal-open")}},methods:{close(){this.$emit("close")}},mounted(){}},ae=se,ie=(s("22d7"),Object(h["a"])(ae,ee,te,!1,null,null,null)),re=ie.exports,ne=s("88fb"),oe=s.n(ne),le=s("340b"),ce=s("d055"),de=s.n(ce);const ue="https://cnbeta.leanapp.cn/api/proxy?url=";var he={name:"Address",mixins:[c],components:{Modal:re,SearchBox:S,VTable:K["VTable"],VPagination:K["VPagination"],Button:C["Button"]},data(){return{address:null,addressDetail:null,addressTxs:null,showLoading:!0,showErrorMsg:!1,addressErrors:null,qrUrl:null,prices:{cny:null,usd:null},pageIndex:1,pageSize:10,blockExplorerUrl:"https://bsv.btc.com/",tableConfig:{multipleSort:!1,tableData:[],columns:[{field:"title",width:70,columnAlign:"center",isFrozen:!0},{field:"amount",width:110,columnAlign:"left",isFrozen:!0,formatter:(e,t,s)=>{return`<span class="tx-amount ${Number(e.amount)>=0?"in":"out"}">${e.amount}</span>`}},{field:"time",width:170,columnAlign:"center",isFrozen:!0},{field:"id",width:70,columnAlign:"center",isFrozen:!0,formatter:(e,t,s)=>{return`<a href=${this.blockExplorerUrl+e.id} target="_blank" title="可复制完整交易 ID 或点击前往 BTC.com 查看">${e.id}</a>`}}],titleRows:[[{fields:["title"],title:this.$t("address.direction"),titleAlign:"center"},{fields:["amount"],title:this.$t("address.amount"),titleAlign:"center"},{fields:["time"],title:this.$t("address.time"),titleAlign:"center"},{fields:["id"],title:"ID",titleAlign:"center"}]],isLoading:!0}}},methods:{submit(e){console.log("trigger submit");const t=e.trim();if(this.isHandle(t))this.go({path:`/?q=${t}`});else try{oe.a.isLegacyAddress(e)&&(this.address=e,this.setAddressData(e))}catch(s){this.addressErrors="地址格式不正确",this.addressDetail=this.addressTxs=this.qrUrl=null,this.showLoading=!0,console.error(s)}},setAddressData(e){var t=this;return Object(g["a"])(function*(){document.title="帐户 "+t.address,t.showLoading=!0,t.showErrorMsg=!1,t.addressDetail=t.addressTxs=t.addressErrors=null,t.qrUrl=yield de.a.toDataURL(e),t.getAddressDetail(e).then(function(){var e=Object(g["a"])(function*(e){t.addressDetail=e,t.getTableData(),t.showLoading=!1,Object.keys(t.addressDetail).length||(t.showErrorMsg=!0)});return function(t){return e.apply(this,arguments)}}())})()},checkSleep(){if(U()){if(window.confirm(`应用休眠中，服务时间 6:00 - 24:00，点击确定前往第三方网站查看 ${this.blockExplorerUrl}`)){const e=this.blockExplorerUrl+this.address;window.location.replace(e)}else window.history.back();throw new Error("")}},getAddressDetail(e){ue.indexOf("lean")>-1&&this.checkSleep();const t=`${ue}https://bsv-chain.api.btc.com/v3/address/${e}`;return L(t).then(e=>e.json().then(e=>{return e.headers?e.data.data:e.data}))},getAddressTxs(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.pageIndex,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.pageSize;const a=`${ue}https://bsv-chain.api.btc.com/v3/address/${e}/tx?page=${t}&pagesize=${s}&verbose=1`;return new Promise((e,t)=>{L(a).then(t=>{t.json().then(t=>{e(t.headers?t.data.data:t.data)})})})},getPrices(){const e="https://api.coingecko.com/api/v3/coins/markets?vs_currency=cny&ids=bitcoin-cash-sv";return fetch(e).then(e=>e.json().then(e=>{return e[0]}).catch(e=>console.error(e)))},getTableData(){var e=this;return Object(g["a"])(function*(){e.tableConfig.isLoading=!0,e.addressTxs?e.addressTxs.list[(e.pageIndex-1)*e.pageSize]?e.tableConfig.isLoading=!1:e.getAddressTxs(e.address).then(t=>{let s=t;e.addressTxs.list[(e.pageIndex-1)*e.pageSize]=null,e.addressTxs.list.splice((e.pageIndex-1)*e.pageSize,0,...s.list),e.tableConfig.isLoading=!1}):e.getAddressTxs(e.address).then(t=>{e.addressTxs=t,e.tableConfig.isLoading=!1})})()},pageChange(e){var t=this;return Object(g["a"])(function*(){t.pageIndex=e,t.getTableData()})()},pageSizeChange(e){var t=this;return Object(g["a"])(function*(){t.pageIndex=1,t.pageSize=e,t.addressTxs=null,t.getTableData()})()},sortChange(e){e.height.length>0&&this.tableConfig.tableData.sort(function(t,s){return"asc"===e.height?t.height-s.height:"desc"===e.height?s.height-t.height:0})},timeFormat(e,t){return Object(le["format"])(new Date(1e3*e),"YYYY-MM-DD HH:mm:ss")}},computed:{locale(){return this.$root.$data.shared.isZh?"zh_CN":"en_US"},fiat(){return this.$root.$data.shared.isZh?"cny":"usd"},addressBalance(){return this.addressDetail.balance/1e8},tableData(){return this.addressTxs?this.addressTxs.list.map(e=>{return e&&{title:e.balance_diff>0?this.$t("address.received"):this.$t("address.sent"),amount:(e.balance_diff>0?"+":"")+Number(e.balance_diff/1e8).toFixed(8).replace(/\.?0+$/,""),time:this.timeFormat(e.block_time||e.created_at),id:e.hash}}).slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize).filter(e=>!!e):[]},addressFiatBalance(){return this.addressDetail&&this.prices.usd&&O()(this.addressBalance*this.prices[this.fiat]).format("0,0.00")}},filters:{format(e,t){return"btc"===t?O()(1e6*e).format("0,000,000.00"):O()(e).format("0,0.00")}},watch:{"$route.query.q":function(e,t){console.log({newRoute:e,oldRoute:t});let s=e;!s||this.address&&e===t||(this.address=s,this.submit(this.address))}},created(){let e=this.$route.query.q;e&&!this.address&&(this.address=e,this.submit(this.address)),this.getPrices().then(e=>{this.prices.cny=e.current_price,this.prices.usd=this.prices.cny/6.8})},mounted(){}},pe=he,me=(s("a9f1"),Object(h["a"])(pe,Q,X,!1,null,null,null)),ve=me.exports,fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[e.errMsg?s("div",{staticClass:"err-msg"},[e._v(e._s(e.errMsg))]):s("div",{staticClass:"handle-view"},[s("div",{staticClass:"name"},[e._v(e._s(e.handle))]),s("div",{staticClass:"qr-wrap"},[e.qrUrl?s("img",{attrs:{src:e.qrUrl},on:{click:e.copyAddress}}):s("div",{staticClass:"preloader"},[e._v(".")])]),s("div",{staticClass:"address"},[s("span",{staticClass:"text",attrs:{id:"tocopy"}},[e._v(e._s(e.receivingAddress))])]),s("Button",{class:{success:e.isCopied},attrs:{size:"large"},on:{click:e.copyAddress}},[e._v(e._s(e.isCopied?e.$t("handle.copied"):e.$t("handle.copy")))]),s("div",{staticClass:"desc"},[s("span",[e._v("via")]),s("a",{attrs:{href:"http://handcash.io/api-docs/",target:"_blank"}},[e._v("HandCash API")]),s("span",[e._v(" made by")]),s("a",{attrs:{href:e.donateUrl,target:"_blank"}},[e._v("$oaker")])])],1)])},be=[],ge=(s("386d"),{name:"Home",mixins:[c],components:{Button:C["Button"],"i-switch":C["Switch"]},data(){return{handle:null,receivingAddress:null,qrUrl:null,showLoading:!0,isCopied:!1,errMsg:null}},methods:{getAddress(e){var t=this;let s=`https://api.handcash.io/api/receivingAddress/${e}`;this.showLoading=!0,fetch(s).then(e=>{if(this.showLoading=!1,200!==e.status)return this.errMsg="request error",void console.log("Looks like there was a problem. Status Code: "+e.status);e.json().then(function(){var e=Object(g["a"])(function*(e){t.receivingAddress=e.receivingAddress,t.qrUrl=yield de.a.toDataURL(t.receivingAddress),t.showLoading=!1});return function(t){return e.apply(this,arguments)}}())})},setHandle(){let e=window.location.search.substring(1),t=new URLSearchParams(e),s=t.get("q");s?(0===s.indexOf("$")?(s=s.substr(1),this.handle=s):this.handle="$"+s,this.$router.replace({path:"?q="+s}),document.title=this.handle+this.$t("handle.title"),this.getAddress(s)):window.location.assign(window.location.origin)},copyAddress(){q("tocopy")&&(this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},1e3))}},computed:{originUrl(){return window.location.origin},donateUrl(){return this.originUrl+"?q=oakerx"}},filters:{},watch:{},created(){this.setHandle()},mounted(){}}),we=ge,_e=(s("9b96"),Object(h["a"])(we,fe,be,!1,null,null,null)),Ce=_e.exports,ye=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"safe-guides-view"},[s("div",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.content)}})])},xe=[],ke=s("0e54"),Se=s.n(ke),Be=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$e=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("数字货币安全保管使用指南")]),s("ul",[s("li",[e._v("设备安全，手机优于电脑，苹果产品优于其它产品，专业的硬件钱包尤佳\n"),s("ol",[s("li",[e._v("保证使用原版系统和软件，从下载渠道要保证")]),s("li",[e._v("推荐使用 MacOS，最好不要用 windows，海外用户也可选择 ChromeOS")]),s("li",[e._v("使用浏览器的隐私模式进行敏感操作，避免让第三方扩展接触到帐户信息")])])]),s("li",[e._v("网站安全\n"),s("ol",[s("li",[e._v("认准"),s("code",{pre:!0},[e._v("HTTPS")]),e._v("绿色安全标识")]),s("li",[e._v("常用网站添加书签，尽量从书签访问。从搜索引擎进入网站时，要检查网址，因为你点击的可能是钓鱼网站的广告")])])]),s("li",[e._v("支付安全\n"),s("ul",[s("li",[e._v("向二维码地址转账时，要二次检查地址文本，因为二维码可能被掉包，而人不容易察觉")])])]),s("li",[e._v("钱包选择\n"),s("ul",[s("li",[e._v("使用 HD 钱包，不使用脑钱包，不使用私钥")])])])]),s("h2",[e._v("实用方案之手机分身")]),s("p",[e._v("优点：兼顾安全和方便，随身携带，主系统中毒不会威胁到分身系统")]),s("ul",[s("li",[e._v("一台具有分身功能的安卓手机，如小米手机（刷成国际版 MIUI 更好）")]),s("li",[e._v("创建分身系统，只安装钱包App")]),s("li",[e._v("启用指纹识别，与主系统使用不同手指，作为进入方式")]),s("li",[e._v("主系统中移除或关闭分身入口，如通知栏")]),s("li",[e._v("主系统不存放钱包，或只存放小额")])]),s("h2",[e._v("常见问题")]),s("p",[e._v("Q: 一定要选择开源钱包才安全吗？"),s("br"),e._v("\nA: 不，现在用户比较多的钱包如比特派、Coinomi 不是开源的")]),s("p",[e._v("Q: 硬件钱包是终极选择吗？"),s("br"),e._v("\nA: 不，如果遵守本指南，身边的手机可以是性价比更高的选择。如果一定要用电脑，硬件钱包是更好的选择")]),s("h2",[e._v("被盗事件")]),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29855076"}},[e._v("我的比特币钱包被盗，损失了两个币")]),s("br"),s("a",{attrs:{href:"https://btc.com/1tPyUYNYQLCa7XjBFVKHLnwHoJECMVWEZ"}},[e._v("地址 1tPyUYNYQLCa7XjBFVKHLnwHoJECMVWEZ - BTC.com")]),s("br"),e._v("\n2017年9月16日和17日分两次转入，9月28日被全部转出，应该是 9.15 北京通知关闭交易所后，从交易所提币的新手")]),s("p",[s("a",{attrs:{href:"https://www.zhihu.com/question/40504007"}},[e._v("比特币在blockchain.info被盗，可以申诉找回吗？ 是否意味在线钱包并不安全？ - 知乎")]),s("a",{attrs:{href:"https://btc.com/1FPPy6mkU4HGZjvig8imkuDSzBzc4LgSET"}},[e._v("地址 1FPPy6mkU4HGZjvig8imkuDSzBzc4LgSET - BTC.com")]),s("br"),e._v("\n14 年开始用的老钱包，像是定投过，2015年1月15日 1.1 个币被转出")]),s("p",[s("a",{attrs:{href:"http://m.news.cctv.com/2017/12/23/ARTIjzJNEcnJC4Um4ReWcWqp171223.shtml"}},[e._v("河南警方破获全国首例比特币盗窃案_新闻_央视网(cctv.com)")]),s("br"),s("a",{attrs:{href:"http://henan.qq.com/a/20171125/015167.htm"}},[e._v("全国首例！油田居民百万比特币被盗_大豫网_腾讯网")]),s("br"),e._v("\n受害人使用电脑，被诱导安装了有后门的钱包软件")]),s("p",[s("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_14ecef0b70102x3lb.html"}},[e._v("Bitfinex12万比特币被盗 黑客攻击还是监守自盗？ - 财新网")])]),s("p",[s("img",{attrs:{src:"http://ww1.sinaimg.cn/large/4e5d3ea7ly1fo4hna7mmzj20ku0msn09.jpg",alt:"你知道交易平台被盗的历史吗？"}})])])}],Te={},Ae=Object(h["a"])(Te,Be,$e,!1,null,null,null),De=Ae.exports;Se.a.setOptions({renderer:new Se.a.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1});var Ee={name:"SafeGuides",props:{},data(){return{content:Se()(De)}},computed:{},methods:{},mounted(){}},je=Ee,Ve=(s("d441"),Object(h["a"])(je,ye,xe,!1,null,null,null)),ze=Ve.exports;a["default"].use(v["a"]);/zh/.test(window.navigator.language||window.navigator.userLanguage);const Me=[{path:"/",name:"Home",components:{default:G,address:ve,handle:Ce},meta:{keepAlive:!0,titles:{default:"BSV_比特币导航",address:"BSV 帐户查看器"}}},{path:"/safe-guides",name:"SafeGuides",component:ze,meta:{title:"安全指南"}},{path:"*",redirect:"/"}],Oe=new v["a"]({mode:"history",routes:Me,scrollBehavior(e,t,s){if(!s)return{x:0,y:0};setTimeout(()=>{window.scrollTo(s.x,s.y)},200)}});Oe.beforeEach((e,t,s)=>{const a=e.matched.slice().reverse().find(e=>e.meta&&e.meta.title),i=e.matched.slice().reverse().find(e=>e.meta&&e.meta.metaTags);if(a&&(document.title=a.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(e=>e.parentNode.removeChild(e)),!i)return s();i.meta.metaTags.map(e=>{const t=document.createElement("meta");return Object.keys(e).forEach(s=>{t.setAttribute(s,e[s])}),t.setAttribute("data-vue-router-controlled",""),t}).forEach(e=>document.head.appendChild(e)),s()});var Le=Oe,qe=s("a925"),Ue=s("363c"),He=s.n(Ue),Pe=s("9483");Object(Pe["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),a["default"].config.productionTip=!1,a["default"].use(qe["a"]),a["default"].use(He.a);const Ie={isZh:/zh/.test(window.navigator.language||window.navigator.userLanguage)},Fe={zh:{home:{title:"比特币导航",about:"关于",aboutTitle:"联系/捐赠开发者(BSV)",mobile:"电话&微信",email:"邮箱",sourceCode:"开放源码",searchPlaceholder:"BSV 地址，$handler"},address:{balance:"余额",latestTxs:"近 10 笔",sent:"发送",received:"接收",serviceUnavailable:"服务暂不可用",retry:"重试",direction:"方向",amount:"金额",time:"时间"},handle:{title:" 的 BSV 收款",copy:"复制",copied:"已复制",useLegacy:"使用旧版地址",failed:"查询失败，请检查 $handle 拼写是否正确"}},en:{home:{title:"BSV",about:"About",aboutTitle:"Donate to the developer (BSV)",mobile:"Mobile&Wechat",email:"Email",sourceCode:"Source Code",searchPlaceholder:"BSV address, $handler"},address:{balance:"Balance",latestTxs:"Latest 10 Transactions",sent:"Sent",received:"Received",serviceUnavailable:"Service Unavailable",retry:"Retry",direction:"Direction",amount:"Amount",time:"Time"},handle:{title:"'s BSV Receiving Address",copy:"copy",copied:"copied",useLegacy:"use Legacy Address",failed:"Query failed, please check the spelling of $handle"}}},Re=new qe["a"]({locale:Ie.isZh?"zh":"en",messages:Fe});new a["default"]({data:{shared:Ie},router:Le,i18n:Re,render:e=>e(m)}).$mount("#app")},7538:function(e,t,s){},"90e0":function(e,t,s){"use strict";var a=s("05ef"),i=s.n(a);i.a},"9b96":function(e,t,s){"use strict";var a=s("1dcb"),i=s.n(a);i.a},a9f1:function(e,t,s){"use strict";var a=s("3f8b"),i=s.n(a);i.a},b6e7:function(e,t,s){},b717:function(e,t,s){},c867:function(e,t,s){"use strict";var a=s("14ab"),i=s.n(a);i.a},ca4c:function(e,t,s){"use strict";var a=s("1699"),i=s.n(a);i.a},d441:function(e,t,s){"use strict";var a=s("b717"),i=s.n(a);i.a},e6fc:function(e,t,s){"use strict";var a=s("7538"),i=s.n(a);i.a}});
//# sourceMappingURL=index.31d08bf4.js.map