(function(t){function e(e){for(var a,n,o=e[0],l=e[1],c=e[2],u=0,h=[];u<o.length;u++)n=o[u],i[n]&&h.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={1:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([13,0]),s()})({13:function(t,e,s){t.exports=s("V3n5")},3:function(t,e){},4:function(t,e){},FoU6:function(t,e,s){},H8nb:function(t,e,s){"use strict";var a=s("Xfis"),i=s.n(a);i.a},OyJ8:function(t,e,s){"use strict";var a=s("cB/s"),i=s.n(a);i.a},Rn2j:function(t,e,s){"use strict";var a=s("fjHr"),i=s.n(a);i.a},TjNX:function(t,e,s){"use strict";var a=s("c970"),i=s.n(a);i.a},V3n5:function(t,e,s){"use strict";s.r(e);var a=s("Kw5r"),i=(s("FoU6"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{handle:"handle"===t.currentView},attrs:{id:"app"}},[s("Layout",[s("Header",[s("div",{staticClass:"layout-logo link",on:{click:function(e){t.go({path:"/"})}}},[t.currentView||"Home"!==t.$route.name?s("div",{staticClass:"logo-wrap"}):s("span",[t._v(t._s(t.$t("home.title")))])]),t.currentView&&t.$route.meta.titles[t.currentView]?s("span",{staticClass:"sub-page-title"},[t._v("> "+t._s(t.$route.meta.titles[t.currentView]))]):t._e(),s("div",{staticClass:"layout-nav"},[t.isSupportWebShare?s("div",{staticClass:"link",on:{click:t.share}},[t._v("分享")]):t._e()])]),t.currentView?s("Content",[s("router-view",{attrs:{name:t.currentView}})],1):s("Content",[s("keep-alive",[t.$route.meta.keepAlive?s("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():s("transition",{attrs:{name:"fade"}},[s("router-view")],1)],1),s("Footer",{staticClass:"layout-footer-center"},[t._v("@"+t._s((new Date).getFullYear())+" © bsv.oaker.bid ")])],1)],1)}),r=[],n=s("xsZ3"),o=s.n(n);let l=new o.a(window.navigator.userAgent);var c={methods:{debug(t){console.log("debug",t)},go(t){this.$router.push(t)},goBack(){this.$router.go(-1)},goHome(){window.location.assign(window.location.origin)},isHandle(t){return/^\$/.test(t)||t.length<20}},computed:{isMobile(){return l.mobile()},isSupportWebShare(){return navigator.share}}},d=s("4GmL"),u={mixins:[c],name:"app",components:{Layout:d["Layout"],Header:d["Header"],Footer:d["Footer"],Icon:d["Icon"],Button:d["Button"]},data(){return{currentView:null}},methods:{share(){navigator.share({title:"bsv.oaker.bid",text:"",url:window.location.href}).then(()=>console.log("Successful share")).catch(t=>console.log("Error sharing",t))}},watch:{"$route.query.q":function(t,e){let s=t;s?this.currentView=this.isHandle(s)?"handle":"address":(this.currentView=null,document.title="BSV_"+this.$t("home.title"))}},created(){let t=this.$route.query.q;this.currentView=t?this.isHandle(t)?"handle":"address":null}},h=u,p=(s("XN8D"),s("KHd+")),m=Object(p["a"])(h,i,r,!1,null,null,null),v=m.exports,g=(s("rGqo"),s("jE9Z")),b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-view"},[s("statistics"),s("search-box",{attrs:{submit:t.submit}}),s("websites")],1)},f=[],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"searchbar-input-container"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.words,expression:"words",modifiers:{trim:!0}}],staticClass:"searchbar-input",attrs:{type:"search",name:"q",placeholder:t.$t("home.searchPlaceholder"),autocomplete:"off",spellcheck:"false"},domProps:{value:t.words},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t._submit(e):null},change:function(e){t.errMsg=null},input:function(e){e.target.composing||(t.words=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),s("a",{staticClass:"icon btc-com",attrs:{href:"https://bsv.btc.com/"+t.words,title:"在 btc.com 查看",target:"_blank"}}),s("icon",{staticClass:"search-icon",attrs:{type:"search",name:"search"},nativeOn:{click:function(e){return t._submit(e)}}}),t.displayErrMsg?s("div",{staticClass:"err-msg"},[t._v(t._s(t.displayErrMsg))]):t._e()],1)},w=[],C={name:"search-box",mixins:[c],components:{Icon:d["Icon"]},props:{keywords:{type:String,default:""},errors:{type:String,default:""},submit:{type:Function}},data(){return{words:this.keywords,errMsg:this.errors}},computed:{displayErrMsg(){return this.errors||this.errMsg}},methods:{_submit(){const t=this.words;t&&this.submit(t)}},mounted(){}},y=C,x=(s("k62V"),Object(p["a"])(y,_,w,!1,null,"5f23ae1e",null)),k=x.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"websites-view"},[s("table",t._l(Object.keys(t.sites),function(e){return s("tr",[s("th",{on:{click:function(s){t.sites[e].expand=!t.sites[e].expand}}},[t._v(t._s(e))]),s("div",{staticClass:"tr-inner"},t._l(t.sites[e].content,function(e,a){return s("td",[e.url.includes("http")?s("a",{staticClass:"link",attrs:{href:e.url,title:e.desc,target:"_blank"}},[t._v(t._s(e.title))]):s("a",{staticClass:"link",attrs:{tabindex:"0"},on:{click:function(s){t.go({path:e.url})}}},[t._v(t._s(e.title))])])}))])}))])},B=[],$={"社区":{content:[{title:"BitSV.club",desc:"BitcoinSV社区",url:"https://bitsv.club/"},{title:"骷髅会",desc:"微信群聊天记录",url:"https://svskull.club/"},{title:"Reddit",url:"https://www.reddit.com/r/bitcoinsv/"},{title:"Memo",desc:"去中心化微博",url:"https://sv.memo.cash/"},{title:"Yours",desc:"能赚 BSV 的内容创作平台",url:"https://www.yours.org/"},{title:"Literatus",desc:"能赚 BSV 的内容创作平台",url:"https://en.literatus.org/"}]},"行情":{content:[{title:"加密货币市值",desc:"Cryptocurrency Market Capitalizations | CoinMarketCap",url:"https://coinmarketcap.com/zh/"},{title:"非小号",desc:"比特币行情价格_专注数字货币行业大数据分析",url:"https://www.feixiaohao.com/"}]},"资讯":{content:[{title:"币世界",url:"https://www.bishijie.com/kuaixun"},{title:"CoinGeek",url:"https://coingeek.com/"}]},"浏览器":{content:[{title:"BTC.com",url:"https://bsv.btc.com"},{title:"WhatsOnChain",url:"https://whatsonchain.com/"},{title:"Blockchair",url:"https://blockchair.com/bitcoin-sv"}]},"工具":{content:[{title:"地址格式转换",url:"https://bch.btc.com/tools/address-converter"},{title:"Bitpaste",desc:"On-chain text and file sharing",url:"https://www.bitpaste.app"},{title:"Bico Media",url:"https://bico.media/",desc:"Bitcoin sv blockchain files for content creators"}]},"数据":{content:[{title:"Transactions",desc:"BSV,BCH,BTC 每日交易数对比",url:"https://bitinfocharts.com/comparison/transactions-btc-bch-bsv.html#log&6m"},{title:"Hashrates",desc:"BSV,BCH,BTC 每日算力对比",url:"https://bitinfocharts.com/comparison/hashrate-btc-bch-bsv.html#6m"},{title:"TX Highway",desc:"Live Bitcoin Cash vs Bitcoin Core Transaction Visualizer ",url:"https://txhighway.com/"},{title:"CoinDance",url:"https://coin.dance/"}]},"入门":{content:[{title:"白皮书中文",url:"http://www.8btc.com/wiki/bitcoin-a-peer-to-peer-electronic-cash-system"},{title:"比特币是什么-江卓尔",desc:"知乎最高票答案，中文界第一科普长文",url:"https://www.zhihu.com/question/22076666/answer/69638270"},{title:"中本聪研究所",desc:"阅读中本聪邮件、论坛帖子首选 - Nakamoto Studies",url:"https://nakamotostudies.org/"}]},"钱包":{content:[{title:"HandCash",url:"http://www.handcash.io/"},{title:"ElectrumSV",desc:"The Bitcoin SV Desktop Wallet",url:"https://electrumsv.io/"},{title:"Coinomi",url:"https://coinomi.com/"},{title:"Jaxx",url:"https://jaxx.io/"},{title:"Exodus",url:"https://www.exodus.io/"}]},"交易所":{content:[{title:"币安",url:"https://www.binance.com/"},{title:"火币",url:"https://www.huobi.com/"},{title:"OKEx",url:"https://www.okex.com/"}]},"考古":{content:[{title:"创世地址",url:"?q=1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"},{title:"创世交易",desc:"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",url:"https://bsv.btc.com/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"}]}},T={name:"websites",mixins:[c],props:{},data(){return{sites:$}},computed:{},methods:{},mounted(){}},A=T,j=(s("TjNX"),Object(p["a"])(A,S,B,!1,null,null,null)),D=j.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"statistics"},[t.list?s("ul",t._l(t.list,function(e){return s("li",[s("span",{staticClass:"label"},[t._v(t._s(e.label)+": ")]),s("span",{staticClass:"value"},[t._v(t._s(e.value||"-----"))])])})):t._e()])},E=[],z=s("ZhIB"),L=s.n(z);let M;var q={data(){return{market:{price:null,"bch/btc":null,supply:null}}},methods:{formatPercentage(t,e){return(t/e*100).toFixed(2)+"%"},getMaintainData(){let t="https://gitee.com/api/v5/gists/ba375uensivprto2c08xq70";fetch(t).then(t=>t.json().then(t=>{let e=JSON.parse(t.files["main.json"].content),s=(Number(new Date)-Number(new Date(t.updated_at)))/1e3/60;s>5&&console.warn("delayMinute: ",s);let a=e.data;this.market={price:`￥${Math.round(a.price)}`,percent_change_24h:` (${a.percent_change_24h>0?"+":""}${a.percent_change_24h.toFixed(2)}%)`,supply:L()(a.circulating_supply/1e4).format("0,000")+"万 / "+this.formatPercentage(a.circulating_supply,a.max_supply),bsv_bch:a.bsv_bch.toFixed(4),bsv_btc:a.bsv_btc.toFixed(4),usdt_otc_price:a.usdt_otc_price,usd_otc_price:a.usd_otc_price}}))}},computed:{list(){let t=this.market;return[{label:"最新价",value:t.price+t.percent_change_24h},{label:"BSV/BTC",value:t.bsv_btc},{label:"BSV/BCH",value:t.bsv_bch},{label:"已供应",value:t.supply},{label:"火币USDT",value:t.usdt_otc_price},{label:"离岸人民币",value:t.usd_otc_price}]}},beforeMount(){this.getMaintainData(),M=setInterval(()=>{this.getMaintainData()},18e4)},beforeDestory(){clearInterval(M)}},H=q,O=(s("zuBh"),Object(p["a"])(H,V,E,!1,null,"135bf01a",null)),U=O.exports,I={name:"Home",mixins:[c],components:{SearchBox:k,Websites:D,Statistics:U,Layout:d["Layout"],Header:d["Header"],Menu:d["Menu"],MenuItem:d["MenuItem"],Breadcrumb:d["Breadcrumb"],BreadcrumbItem:d["BreadcrumbItem"],Card:d["Card"],Footer:d["Footer"],Icon:d["Icon"]},data(){return{currentView:null}},methods:{async submit(t){t=t.trim(),0===t.indexOf("bitcoincash:")&&(t=t.substr(12)),this.go({path:`?q=${t}`})}},computed:{},filters:{},created(){},mounted(){}},F=I,P=(s("kRqj"),Object(p["a"])(F,b,f,!1,null,null,null)),N=P.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"address-view"},[s("search-box",{attrs:{keywords:t.address,errors:t.addressErrors,submit:t.submit}}),s("div",{staticClass:"address-detail"},[s("div",{staticClass:"row"},[s("div",{staticClass:"address-balance"},[s("div",[s("div",{staticClass:"label"},[t._v(t._s(t.$t("address.balance")))]),s("div",{staticClass:"fiat-row"},[s("div",[s("span",{staticClass:"value"},[t._v(t._s(t.addressFiatBalance||"-----"))]),s("span",{staticClass:"unit"},[t._v(t._s(t.fiat.toUpperCase()))])])]),s("div",{staticClass:"balance-row"},[s("span",{staticClass:"value"},[t._v(t._s(t.addressDetail?t.addressBalance:"-----"))]),s("span",{staticClass:"unit"},[t._v("BSV")])])]),t.showLoading||t.showErrorMsg||null!==t.addressDetail?t._e():s("div",[t._m(0)])]),t.qrUrl?s("div",{staticClass:"qr-wrap"},[s("img",{attrs:{src:t.qrUrl}})]):t._e()]),t.showErrorMsg?s("div",{staticClass:"error"},[t._v(t._s(t.$t("address.serviceUnavailable"))),s("Button",{on:{click:function(e){t.setAddressData(t.address)}}},[t._v(t._s(t.$t("address.retry")))]),s("span",[t._v("或前往")]),s("a",{attrs:{href:t.blockExplorerUrl+t.address,title:"在 btc.com 查看",target:"_blank"}},[t._v(" BTC.com ")]),s("span",[t._v("查看")])],1):t._e(),s("div",{staticClass:"address-tx"},[s("v-table",{staticStyle:{width:"auto"},attrs:{"is-vertical-resize":"","vertical-resize-offset":60,"is-horizontal-resize":"","multiple-sort":!1,"min-height":399,"even-bg-color":"#f2f2f2","title-rows":t.tableConfig.titleRows,columns:t.tableConfig.columns,"table-data":t.tableData,"row-hover-color":"#eee","row-click-color":"#edf7ff","paging-index":(t.pageIndex-1)*t.pageSize,"is-loading":t.tableConfig.isLoading},on:{"sort-change":t.sortChange}}),s("div",{staticClass:"mt20 mb20 bold"}),t.addressTxs&&t.addressTxs.total_count?s("v-pagination",{attrs:{total:t.addressTxs.total_count,"page-size":t.pageSize,layout:["total","prev","pager","next","jumper"]},on:{"page-change":t.pageChange,"page-size-change":t.pageSizeChange}}):t._e()],1)])],1)},Y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[t._v("账户暂无数据"),s("br"),t._v("未使用过的地址")])}],W=(s("pIFo"),s("Vd3H"),s("NL/0"),s("5ftm"));function G(t,e,s=3){return fetch(t,e).then(a=>{return 1===s?console.warn("fetch retry finished"):403===a.status?G(t,e,s-1):a}).catch(a=>{if(1===s)throw a;return G(t,e,s-1)})}function J(t){const e=window.getSelection(),s=document.createRange();return s.selectNodeContents(document.getElementById(t)),e.removeAllRanges(),e.addRange(s),document.execCommand("copy")}var Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal-mask",attrs:{transition:"modal"}},[s("div",{staticClass:"modal-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"_modal-header"},[s("div",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.title||t.$t("home.aboutTitle")))]),s("div",{staticClass:"modal-close",on:{click:t.close}},[s("span"),s("span")])]),s("div",{staticClass:"modal-body"},[t._t("content",[t._v("default body")])],2)])])])},X=[],Q={name:"modal",props:{title:{type:String,default:""},show:!1},data(){return{}},watch:{show(t){const e=window.document.querySelectorAll("body")[0];e.classList.toggle("modal-open")}},methods:{close(){this.$emit("close")}},mounted(){}},K=Q,tt=(s("Rn2j"),Object(p["a"])(K,Z,X,!1,null,null,null)),et=tt.exports,st=s("iPsF"),at=s.n(st),it=s("NAv5"),rt=s("0FX9"),nt=s.n(rt);const ot="https://cors.oaker.bid/";var lt={name:"Address",mixins:[c],components:{Modal:et,SearchBox:k,VTable:W["VTable"],VPagination:W["VPagination"],Button:d["Button"]},data(){return{address:null,addressDetail:null,addressTxs:null,showLoading:!0,showErrorMsg:!1,addressErrors:null,qrUrl:null,prices:{cny:null,usd:null},pageIndex:1,pageSize:10,blockExplorerUrl:"https://bsv.btc.com/",tableConfig:{multipleSort:!1,tableData:[],columns:[{field:"title",width:70,columnAlign:"center",isFrozen:!0},{field:"amount",width:110,columnAlign:"left",isFrozen:!0,formatter:(t,e,s)=>{return`<span class="tx-amount ${Number(t.amount)>=0?"in":"out"}">${t.amount}</span>`}},{field:"time",width:170,columnAlign:"center",isFrozen:!0},{field:"id",width:70,columnAlign:"center",isFrozen:!0,formatter:(t,e,s)=>{return`<a href=${this.blockExplorerUrl+t.id} target="_blank" title="可复制完整交易 ID 或点击前往 BTC.com 查看">${t.id}</a>`}}],titleRows:[[{fields:["title"],title:this.$t("address.direction"),titleAlign:"center"},{fields:["amount"],title:this.$t("address.amount"),titleAlign:"center"},{fields:["time"],title:this.$t("address.time"),titleAlign:"center"},{fields:["id"],title:"ID",titleAlign:"center"}]],isLoading:!0}}},methods:{submit(t){console.log("trigger submit");const e=t.trim();if(this.isHandle(e))this.go({path:`/?q=${e}`});else try{at.a.isLegacyAddress(t)&&(this.address=t,this.setAddressData(t))}catch(t){this.addressErrors="地址格式不正确",this.addressDetail=this.addressTxs=this.qrUrl=null,this.showLoading=!0,console.error(t)}},async setAddressData(t){document.title="帐户 "+this.address,this.showLoading=!0,this.showErrorMsg=!1,this.addressDetail=this.addressTxs=this.addressErrors=null,this.qrUrl=await nt.a.toDataURL(t),this.getAddressDetail(t).then(async t=>{this.addressDetail=t,this.getTableData(),this.showLoading=!1,Object.keys(this.addressDetail).length||(this.showErrorMsg=!0)})},getAddressDetail(t){const e=`${ot}https://bsv-chain.api.btc.com/v3/address/${t}`;return G(e).then(t=>t.json().then(t=>{return t.headers?t.data.data:t.data}))},getAddressTxs(t,e=this.pageIndex,s=this.pageSize){const a=`${ot}https://bsv-chain.api.btc.com/v3/address/${t}/tx?page=${e}&pagesize=${s}&verbose=1`;return new Promise((t,e)=>{G(a).then(e=>{e.json().then(e=>{t(e.headers?e.data.data:e.data)})})})},getPrices(){const t="https://api.coingecko.com/api/v3/coins/markets?vs_currency=cny&ids=bitcoin-cash-sv";return fetch(t).then(t=>t.json().then(t=>{return t[0]}).catch(t=>console.error(t)))},async getTableData(){this.tableConfig.isLoading=!0,this.addressTxs?this.addressTxs.list[(this.pageIndex-1)*this.pageSize]?this.tableConfig.isLoading=!1:this.getAddressTxs(this.address).then(t=>{let e=t;this.addressTxs.list[(this.pageIndex-1)*this.pageSize]=null,this.addressTxs.list.splice((this.pageIndex-1)*this.pageSize,0,...e.list),this.tableConfig.isLoading=!1}):this.getAddressTxs(this.address).then(t=>{this.addressTxs=t,this.tableConfig.isLoading=!1})},async pageChange(t){this.pageIndex=t,this.getTableData()},async pageSizeChange(t){this.pageIndex=1,this.pageSize=t,this.addressTxs=null,this.getTableData()},sortChange(t){t.height.length>0&&this.tableConfig.tableData.sort(function(e,s){return"asc"===t.height?e.height-s.height:"desc"===t.height?s.height-e.height:0})},timeFormat(t,e){return Object(it["format"])(new Date(1e3*t),"YYYY-MM-DD HH:mm:ss")}},computed:{locale(){return this.$root.$data.shared.isZh?"zh_CN":"en_US"},fiat(){return this.$root.$data.shared.isZh?"cny":"usd"},addressBalance(){return this.addressDetail.balance/1e8},tableData(){return this.addressTxs?this.addressTxs.list.map(t=>{return t&&{title:t.balance_diff>0?this.$t("address.received"):this.$t("address.sent"),amount:(t.balance_diff>0?"+":"")+Number(t.balance_diff/1e8).toFixed(8).replace(/\.?0+$/,""),time:this.timeFormat(t.block_time||t.created_at),id:t.hash}}).slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize).filter(t=>!!t):[]},addressFiatBalance(){return this.addressDetail&&this.prices.usd&&L()(this.addressBalance*this.prices[this.fiat]).format("0,0.00")}},filters:{format(t,e){return"btc"===e?L()(1e6*t).format("0,000,000.00"):L()(t).format("0,0.00")}},watch:{"$route.query.q":function(t,e){console.log({newRoute:t,oldRoute:e});let s=t;!s||this.address&&t===e||(this.address=s,this.submit(this.address))}},created(){let t=this.$route.query.q;t&&!this.address&&(this.address=t,this.submit(this.address)),this.getPrices().then(t=>{this.prices.cny=t.current_price,this.prices.usd=this.prices.cny/6.8})},mounted(){}},ct=lt,dt=(s("hAN3"),Object(p["a"])(ct,R,Y,!1,null,null,null)),ut=dt.exports,ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t.errMsg?s("div",{staticClass:"err-msg"},[t._v(t._s(t.errMsg))]):s("div",{staticClass:"handle-view"},[s("div",{staticClass:"name"},[t._v(t._s(t.handle))]),s("div",{staticClass:"qr-wrap"},[t.qrUrl?s("img",{attrs:{src:t.qrUrl},on:{click:t.copyAddress}}):s("div",{staticClass:"preloader"},[t._v(".")])]),s("div",{staticClass:"address"},[s("span",{staticClass:"text",attrs:{id:"tocopy"}},[t._v(t._s(t.receivingAddress))])]),s("Button",{class:{success:t.isCopied},attrs:{size:"large"},on:{click:t.copyAddress}},[t._v(t._s(t.isCopied?t.$t("handle.copied"):t.$t("handle.copy")))]),s("div",{staticClass:"desc"},[s("span",[t._v("via")]),s("a",{attrs:{href:"http://handcash.io/api-docs/",target:"_blank"}},[t._v("HandCash API")]),s("span",[t._v(" made by")]),s("a",{attrs:{href:t.donateUrl,target:"_blank"}},[t._v("$oaker")])])],1)])},pt=[],mt=(s("OG14"),{name:"Home",mixins:[c],components:{Button:d["Button"],"i-switch":d["Switch"]},data(){return{handle:null,receivingAddress:null,qrUrl:null,showLoading:!0,isCopied:!1,errMsg:null}},methods:{getAddress(t){let e=`https://api.handcash.io/api/receivingAddress/${t}`;this.showLoading=!0,fetch(e).then(t=>{if(this.showLoading=!1,200!==t.status)return this.errMsg="request error",void console.log("Looks like there was a problem. Status Code: "+t.status);t.json().then(async t=>{this.receivingAddress=t.receivingAddress,this.qrUrl=await nt.a.toDataURL(this.receivingAddress),this.showLoading=!1})})},setHandle(){let t=window.location.search.substring(1),e=new URLSearchParams(t),s=e.get("q");s?(0===s.indexOf("$")?(s=s.substr(1),this.handle=s):this.handle="$"+s,this.$router.replace({path:"?q="+s}),document.title=this.handle+this.$t("handle.title"),this.getAddress(s)):window.location.assign(window.location.origin)},copyAddress(){J("tocopy")&&(this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},1e3))}},computed:{originUrl(){return window.location.origin},donateUrl(){return this.originUrl+"?q=oakerx"}},filters:{},watch:{},created(){this.setHandle()},mounted(){}}),vt=mt,gt=(s("H8nb"),Object(p["a"])(vt,ht,pt,!1,null,null,null)),bt=gt.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"safe-guides-view"},[s("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.content)}})])},_t=[],wt=s("DlQD"),Ct=s.n(wt),yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h1",[t._v("数字货币安全保管使用指南")]),s("ul",[s("li",[t._v("设备安全，手机优于电脑，苹果产品优于其它产品，专业的硬件钱包尤佳\n"),s("ol",[s("li",[t._v("保证使用原版系统和软件，从下载渠道要保证")]),s("li",[t._v("推荐使用 MacOS，最好不要用 windows，海外用户也可选择 ChromeOS")]),s("li",[t._v("使用浏览器的隐私模式进行敏感操作，避免让第三方扩展接触到帐户信息")])])]),s("li",[t._v("网站安全\n"),s("ol",[s("li",[t._v("认准"),s("code",{pre:!0},[t._v("HTTPS")]),t._v("绿色安全标识")]),s("li",[t._v("常用网站添加书签，尽量从书签访问。从搜索引擎进入网站时，要检查网址，因为你点击的可能是钓鱼网站的广告")])])]),s("li",[t._v("支付安全\n"),s("ul",[s("li",[t._v("向二维码地址转账时，要二次检查地址文本，因为二维码可能被掉包，而人不容易察觉")])])]),s("li",[t._v("钱包选择\n"),s("ul",[s("li",[t._v("使用 HD 钱包，不使用脑钱包，不使用私钥")])])])]),s("h2",[t._v("实用方案之手机分身")]),s("p",[t._v("优点：兼顾安全和方便，随身携带，主系统中毒不会威胁到分身系统")]),s("ul",[s("li",[t._v("一台具有分身功能的安卓手机，如小米手机（刷成国际版 MIUI 更好）")]),s("li",[t._v("创建分身系统，只安装钱包App")]),s("li",[t._v("启用指纹识别，与主系统使用不同手指，作为进入方式")]),s("li",[t._v("主系统中移除或关闭分身入口，如通知栏")]),s("li",[t._v("主系统不存放钱包，或只存放小额")])]),s("h2",[t._v("常见问题")]),s("p",[t._v("Q: 一定要选择开源钱包才安全吗？"),s("br"),t._v("\nA: 不，现在用户比较多的钱包如比特派、Coinomi 不是开源的")]),s("p",[t._v("Q: 硬件钱包是终极选择吗？"),s("br"),t._v("\nA: 不，如果遵守本指南，身边的手机可以是性价比更高的选择。如果一定要用电脑，硬件钱包是更好的选择")]),s("h2",[t._v("被盗事件")]),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29855076"}},[t._v("我的比特币钱包被盗，损失了两个币")]),s("br"),s("a",{attrs:{href:"https://btc.com/1tPyUYNYQLCa7XjBFVKHLnwHoJECMVWEZ"}},[t._v("地址 1tPyUYNYQLCa7XjBFVKHLnwHoJECMVWEZ - BTC.com")]),s("br"),t._v("\n2017年9月16日和17日分两次转入，9月28日被全部转出，应该是 9.15 北京通知关闭交易所后，从交易所提币的新手")]),s("p",[s("a",{attrs:{href:"https://www.zhihu.com/question/40504007"}},[t._v("比特币在blockchain.info被盗，可以申诉找回吗？ 是否意味在线钱包并不安全？ - 知乎")]),s("a",{attrs:{href:"https://btc.com/1FPPy6mkU4HGZjvig8imkuDSzBzc4LgSET"}},[t._v("地址 1FPPy6mkU4HGZjvig8imkuDSzBzc4LgSET - BTC.com")]),s("br"),t._v("\n14 年开始用的老钱包，像是定投过，2015年1月15日 1.1 个币被转出")]),s("p",[s("a",{attrs:{href:"http://m.news.cctv.com/2017/12/23/ARTIjzJNEcnJC4Um4ReWcWqp171223.shtml"}},[t._v("河南警方破获全国首例比特币盗窃案_新闻_央视网(cctv.com)")]),s("br"),s("a",{attrs:{href:"http://henan.qq.com/a/20171125/015167.htm"}},[t._v("全国首例！油田居民百万比特币被盗_大豫网_腾讯网")]),s("br"),t._v("\n受害人使用电脑，被诱导安装了有后门的钱包软件")]),s("p",[s("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_14ecef0b70102x3lb.html"}},[t._v("Bitfinex12万比特币被盗 黑客攻击还是监守自盗？ - 财新网")])]),s("p",[s("img",{attrs:{src:"http://ww1.sinaimg.cn/large/4e5d3ea7ly1fo4hna7mmzj20ku0msn09.jpg",alt:"你知道交易平台被盗的历史吗？"}})])])}],kt={},St=Object(p["a"])(kt,yt,xt,!1,null,null,null),Bt=St.exports;Ct.a.setOptions({renderer:new Ct.a.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1});var $t={name:"SafeGuides",props:{},data(){return{content:Ct()(Bt)}},computed:{},methods:{},mounted(){}},Tt=$t,At=(s("OyJ8"),Object(p["a"])(Tt,ft,_t,!1,null,null,null)),jt=At.exports;a["default"].use(g["a"]);/zh/.test(window.navigator.language||window.navigator.userLanguage);const Dt=[{path:"/",name:"Home",components:{default:N,address:ut,handle:bt},meta:{keepAlive:!0,titles:{default:"BSV_比特币导航",address:"BSV 帐户查看器"}}},{path:"/safe-guides",name:"SafeGuides",component:jt,meta:{title:"安全指南"}},{path:"*",redirect:"/"}],Vt=new g["a"]({mode:"history",routes:Dt,scrollBehavior(t,e,s){if(!s)return{x:0,y:0};setTimeout(()=>{window.scrollTo(s.x,s.y)},200)}});Vt.beforeEach((t,e,s)=>{const a=t.matched.slice().reverse().find(t=>t.meta&&t.meta.title),i=t.matched.slice().reverse().find(t=>t.meta&&t.meta.metaTags);if(a&&(document.title=a.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(t=>t.parentNode.removeChild(t)),!i)return s();i.meta.metaTags.map(t=>{const e=document.createElement("meta");return Object.keys(t).forEach(s=>{e.setAttribute(s,t[s])}),e.setAttribute("data-vue-router-controlled",""),e}).forEach(t=>document.head.appendChild(t)),s()});var Et=Vt,zt=s("qSUR"),Lt=s("Njy0"),Mt=s.n(Lt),qt=s("lIOY");Object(qt["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),a["default"].config.productionTip=!1,a["default"].use(zt["a"]),a["default"].use(Mt.a);const Ht={isZh:/zh/.test(window.navigator.language||window.navigator.userLanguage)},Ot={zh:{home:{title:"BSV_比特币导航",about:"关于",aboutTitle:"联系/捐赠开发者(BSV)",mobile:"电话&微信",email:"邮箱",sourceCode:"开放源码",searchPlaceholder:"BSV 地址，$handler"},address:{balance:"余额",latestTxs:"近 10 笔",sent:"发送",received:"接收",serviceUnavailable:"服务暂不可用",retry:"重试",direction:"方向",amount:"金额",time:"时间"},handle:{title:" 的 BSV 收款",copy:"复制",copied:"已复制",useLegacy:"使用旧版地址",failed:"查询失败，请检查 $handle 拼写是否正确"}},en:{home:{title:"BSV",about:"About",aboutTitle:"Donate to the developer (BSV)",mobile:"Mobile&Wechat",email:"Email",sourceCode:"Source Code",searchPlaceholder:"BSV address, $handler"},address:{balance:"Balance",latestTxs:"Latest 10 Transactions",sent:"Sent",received:"Received",serviceUnavailable:"Service Unavailable",retry:"Retry",direction:"Direction",amount:"Amount",time:"Time"},handle:{title:"'s BSV Receiving Address",copy:"copy",copied:"copied",useLegacy:"use Legacy Address",failed:"Query failed, please check the spelling of $handle"}}},Ut=new zt["a"]({locale:Ht.isZh?"zh":"en",messages:Ot});new a["default"]({data:{shared:Ht},router:Et,i18n:Ut,render:t=>t(v)}).$mount("#app")},XN8D:function(t,e,s){"use strict";var a=s("mmIv"),i=s.n(a);i.a},Xfis:function(t,e,s){},YWu6:function(t,e,s){},c970:function(t,e,s){},"cB/s":function(t,e,s){},fjHr:function(t,e,s){},hAN3:function(t,e,s){"use strict";var a=s("tv4S"),i=s.n(a);i.a},iNlQ:function(t,e,s){},k62V:function(t,e,s){"use strict";var a=s("iNlQ"),i=s.n(a);i.a},kRqj:function(t,e,s){"use strict";var a=s("YWu6"),i=s.n(a);i.a},mmIv:function(t,e,s){},tv4S:function(t,e,s){},xVBG:function(t,e,s){},zuBh:function(t,e,s){"use strict";var a=s("xVBG"),i=s.n(a);i.a}});
//# sourceMappingURL=index.84547ee0.js.map