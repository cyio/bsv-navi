(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)r=o[d],a[r]&&h.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={1:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([13,0]),n()})({13:function(t,e,n){t.exports=n("V3n5")},3:function(t,e){},4:function(t,e){},FoU6:function(t,e,n){},H8nb:function(t,e,n){"use strict";var s=n("Xfis"),a=n.n(s);a.a},OyJ8:function(t,e,n){"use strict";var s=n("cB/s"),a=n.n(s);a.a},Rn2j:function(t,e,n){"use strict";var s=n("fjHr"),a=n.n(s);a.a},TjNX:function(t,e,n){"use strict";var s=n("c970"),a=n.n(s);a.a},V3n5:function(t,e,n){"use strict";n.r(e);n("VRzm");var s,a=n("Kw5r"),i=(n("FoU6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{handle:"handle"===t.currentView},attrs:{id:"app"}},[n("div",{staticClass:"main-container"},[n("header",[n("div",{staticClass:"layout-logo link",on:{click:function(e){t.go({path:"/"})}}},[t.currentView||"Home"!==t.$route.name?n("div",{staticClass:"logo-wrap"}):n("span",[t._v(t._s(t.$t("home.title")))])]),t.currentView&&t.$route.meta.titles[t.currentView]?n("span",{staticClass:"sub-page-title"},[t._v("> "+t._s(t.$route.meta.titles[t.currentView]))]):t._e(),n("div",{staticClass:"layout-nav"},[t.isSupportWebShare?n("div",{staticClass:"link",on:{click:t.share}},[t._v("分享")]):t._e()])]),t.currentView?n("div",{staticClass:"content"},[n("router-view",{attrs:{name:t.currentView}})],1):n("div",{staticClass:"content"},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1),t._m(0),n("footer",[n("div",[t._v("@"+t._s((new Date).getFullYear())+" © bsv.oaker.bid ")])])])])}),r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tip-wrap"},[n("div",{staticClass:"money-button",attrs:{"data-to":"1743","data-amount":"1","data-currency":"CNY","data-label":"打赏","data-client-identifier":"e675367a971e646a60120cdb3607f82f","data-button-id":"1552225294954","data-type":"tip"}})])}],o=n("xsZ3"),c=n.n(o),l=new c.a(window.navigator.userAgent),u={methods:{debug:function(t){console.log("debug",t)},go:function(t){this.$router.push(t)},goBack:function(){this.$router.go(-1)},goHome:function(){window.location.assign(window.location.origin)},isHandle:function(t){return/^\$/.test(t)||t.length<20}},computed:{isMobile:function(){return l.mobile()},isSupportWebShare:function(){return navigator.share}}},d={mixins:[u],name:"app",components:{},data:function(){return{currentView:null}},methods:{share:function(){navigator.share({title:"bsv.oaker.bid",text:"",url:window.location.href}).then(function(){return console.log("Successful share")}).catch(function(t){return console.log("Error sharing",t)})}},watch:{"$route.query.q":function(t,e){var n=t;n?this.currentView=this.isHandle(n)?"handle":"address":(this.currentView=null,document.title="BSV_"+this.$t("home.title"))}},created:function(){var t=this.$route.query.q;this.currentView=t?this.isHandle(t)?"handle":"address":null}},h=d,p=(n("XN8D"),n("KHd+")),f=Object(p["a"])(h,i,r,!1,null,null,null),m=f.exports,v=(n("yt8O"),n("RW0V"),n("rGqo"),n("HEwt"),n("dRSK"),n("jE9Z")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-view"},[n("statistics"),n("search-box",{attrs:{submit:t.submit}}),n("websites")],1)},b=[],w=(n("ls82"),n("MECJ")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchbar-input-container"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.words,expression:"words",modifiers:{trim:!0}}],staticClass:"searchbar-input",attrs:{type:"search",name:"q",placeholder:t.$t("home.searchPlaceholder"),autocomplete:"off",spellcheck:"false"},domProps:{value:t.words},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t._submit(e):null},change:function(e){t.errMsg=null},input:function(e){e.target.composing||(t.words=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),n("a",{staticClass:"icon btc-com",attrs:{href:"https://bsv.btc.com/"+t.words,title:"在 btc.com 查看",target:"_blank"}}),n("icon",{staticClass:"search-icon",attrs:{type:"search",name:"search"},nativeOn:{click:function(e){return t._submit(e)}}}),t.displayErrMsg?n("div",{staticClass:"err-msg"},[t._v(t._s(t.displayErrMsg))]):t._e()],1)},C=[],y=n("4GmL"),x={name:"search-box",mixins:[u],components:{Icon:y["Icon"]},props:{keywords:{type:String,default:""},errors:{type:String,default:""},submit:{type:Function}},data:function(){return{words:this.keywords,errMsg:this.errors}},computed:{displayErrMsg:function(){return this.errors||this.errMsg}},methods:{_submit:function(){var t=this.words;t&&this.submit(t)}},mounted:function(){}},k=x,S=(n("k62V"),Object(p["a"])(k,_,C,!1,null,"5f23ae1e",null)),B=S.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"websites-view"},[n("table",t._l(Object.keys(t.sites),function(e){return n("tr",[n("th",{on:{click:function(n){t.sites[e].expand=!t.sites[e].expand}}},[t._v(t._s(e))]),n("div",{staticClass:"tr-inner"},t._l(t.sites[e].content,function(e,s){return n("td",[e.url.includes("http")?n("a",{staticClass:"link",attrs:{href:e.url,title:e.desc,target:"_blank"}},[t._v(t._s(e.title))]):n("a",{staticClass:"link",attrs:{tabindex:"0"},on:{click:function(n){t.go({path:e.url})}}},[t._v(t._s(e.title))])])}))])}))])},j=[],$={"社区":{content:[{title:"BitSV.club",desc:"BitcoinSV社区",url:"https://bitsv.club/"},{title:"骷髅会",desc:"微信群聊天记录",url:"https://svskull.club/"},{title:"Reddit",url:"https://www.reddit.com/r/bitcoinsv/"},{title:"Memo",desc:"去中心化微博",url:"https://sv.memo.cash/"},{title:"Yours",desc:"能赚 BSV 的内容创作平台",url:"https://www.yours.org/"},{title:"Literatus",desc:"能赚 BSV 的内容创作平台",url:"https://en.literatus.org/"}]},"行情":{content:[{title:"加密货币市值",desc:"Cryptocurrency Market Capitalizations | CoinMarketCap",url:"https://coinmarketcap.com/zh/"},{title:"非小号",desc:"比特币行情价格_专注数字货币行业大数据分析",url:"https://www.feixiaohao.com/"}]},"资讯":{content:[{title:"币世界",url:"https://www.bishijie.com/kuaixun"},{title:"CoinGeek",url:"https://coingeek.com/"},{title:"BSV Daily",url:"https://media.bitcoinfiles.org/83264827cdc0825b40868307daec68f34a78ce5f3ac3547b1efea61b64bfe449"}]},"浏览器":{content:[{title:"BTC.com",url:"https://bsv.btc.com"},{title:"WhatsOnChain",url:"https://whatsonchain.com/"},{title:"Blockchair",url:"https://blockchair.com/bitcoin-sv"}]},"工具":{content:[{title:"地址格式转换",url:"https://bch.btc.com/tools/address-converter"},{title:"Bitpaste",desc:"On-chain text and file sharing",url:"https://www.bitpaste.app"},{title:"Bico Media",url:"https://bico.media/",desc:"Bitcoin sv blockchain files for content creators"}]},"数据":{content:[{title:"Transactions",desc:"BSV,BCH,BTC 每日交易数对比",url:"https://bitinfocharts.com/comparison/transactions-btc-bch-bsv.html#log&6m"},{title:"Hashrates",desc:"BSV,BCH,BTC 每日算力对比",url:"https://bitinfocharts.com/comparison/hashrate-btc-bch-bsv.html#6m"},{title:"TX Highway",desc:"Live Bitcoin Cash vs Bitcoin Core Transaction Visualizer ",url:"https://txhighway.com/"},{title:"CoinDance",url:"https://coin.dance/"}]},"入门":{content:[{title:"白皮书中文",url:"http://www.8btc.com/wiki/bitcoin-a-peer-to-peer-electronic-cash-system"},{title:"比特币是什么-江卓尔",desc:"知乎最高票答案，中文界第一科普长文",url:"https://www.zhihu.com/question/22076666/answer/69638270"},{title:"中本聪研究所",desc:"阅读中本聪邮件、论坛帖子首选 - Nakamoto Studies",url:"https://nakamotostudies.org/"}]},"钱包":{content:[{title:"HandCash",url:"http://www.handcash.io/"},{title:"ElectrumSV",desc:"The Bitcoin SV Desktop Wallet",url:"https://electrumsv.io/"},{title:"Coinomi",url:"https://coinomi.com/"},{title:"Jaxx",url:"https://jaxx.io/"},{title:"Exodus",url:"https://www.exodus.io/"}]},"交易所":{content:[{title:"币安",url:"https://www.binance.com/"},{title:"火币",url:"https://www.huobi.com/"},{title:"OKEx",url:"https://www.okex.com/"}]},"考古":{content:[{title:"创世地址",url:"?q=1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"},{title:"创世交易",desc:"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",url:"https://bsv.btc.com/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"}]}},A={name:"websites",mixins:[u],props:{},data:function(){return{sites:$}},computed:{},methods:{},mounted:function(){}},V=A,D=(n("TjNX"),Object(p["a"])(V,T,j,!1,null,null,null)),E=D.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"statistics"},[t.list?n("ul",t._l(t.list,function(e){return n("li",[n("span",{staticClass:"label"},[t._v(t._s(e.label)+": ")]),n("span",{staticClass:"value"},[t._v(t._s(e.value||"-----"))])])})):t._e()])},z=[],O=(n("xfY5"),n("ZhIB")),L=n.n(O),q={data:function(){return{market:{price:null,"bch/btc":null,supply:null}}},methods:{formatPercentage:function(t,e){return(t/e*100).toFixed(2)+"%"},getMaintainData:function(){var t=this,e="https://gitee.com/api/v5/gists/ba375uensivprto2c08xq70";fetch(e).then(function(e){return e.json().then(function(e){var n=JSON.parse(e.files["main.json"].content),s=(Number(new Date)-Number(new Date(e.updated_at)))/1e3/60;s>5&&console.warn("delayMinute: ",s);var a=n.data;t.market={price:"￥".concat(Math.round(a.price)),percent_change_24h:" (".concat(a.percent_change_24h>0?"+":"").concat(a.percent_change_24h.toFixed(2),"%)"),supply:L()(a.circulating_supply/Math.pow(10,4)).format("0,000")+"万 / "+t.formatPercentage(a.circulating_supply,a.max_supply),bsv_bch:a.bsv_bch.toFixed(4),bsv_btc:a.bsv_btc.toFixed(4),usdt_otc_price:a.usdt_otc_price,usd_otc_price:a.usd_otc_price}})})}},computed:{list:function(){var t=this.market;return[{label:"最新价",value:t.price+t.percent_change_24h},{label:"BSV/BTC",value:t.bsv_btc},{label:"BSV/BCH",value:t.bsv_bch},{label:"已供应",value:t.supply},{label:"火币USDT",value:t.usdt_otc_price},{label:"离岸人民币",value:t.usd_otc_price}]}},beforeMount:function(){var t=this;this.getMaintainData(),s=setInterval(function(){t.getMaintainData()},18e4)},beforeDestory:function(){clearInterval(s)}},R=q,H=(n("zuBh"),Object(p["a"])(R,M,z,!1,null,"135bf01a",null)),U=H.exports,I={name:"Home",mixins:[u],components:{SearchBox:B,Websites:E,Statistics:U,Layout:y["Layout"],Header:y["Header"],Menu:y["Menu"],MenuItem:y["MenuItem"],Breadcrumb:y["Breadcrumb"],BreadcrumbItem:y["BreadcrumbItem"],Card:y["Card"],Footer:y["Footer"],Icon:y["Icon"]},data:function(){return{currentView:null}},methods:{submit:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=e.trim(),0===e.indexOf("bitcoincash:")&&(e=e.substr(12)),this.go({path:"?q=".concat(e)});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},computed:{},filters:{},created:function(){},mounted:function(){}},P=I,N=(n("kRqj"),Object(p["a"])(P,g,b,!1,null,null,null)),F=N.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"address-view"},[n("search-box",{attrs:{keywords:t.address,errors:t.addressErrors,submit:t.submit}}),n("div",{staticClass:"address-detail"},[n("div",{staticClass:"row"},[n("div",{staticClass:"address-balance"},[n("div",[n("div",{staticClass:"label"},[t._v(t._s(t.$t("address.balance")))]),n("div",{staticClass:"fiat-row"},[n("div",[n("span",{staticClass:"value"},[t._v(t._s(t.addressFiatBalance||"-----"))]),n("span",{staticClass:"unit"},[t._v(t._s(t.fiat.toUpperCase()))])])]),n("div",{staticClass:"balance-row"},[n("span",{staticClass:"value"},[t._v(t._s(t.addressDetail?t.addressBalance:"-----"))]),n("span",{staticClass:"unit"},[t._v("BSV")])])]),t.showLoading||t.showErrorMsg||null!==t.addressDetail?t._e():n("div",[t._m(0)])]),t.qrUrl?n("div",{staticClass:"qr-wrap"},[n("img",{attrs:{src:t.qrUrl}})]):t._e()]),t.showErrorMsg?n("div",{staticClass:"error"},[t._v(t._s(t.$t("address.serviceUnavailable"))),n("Button",{on:{click:function(e){t.setAddressData(t.address)}}},[t._v(t._s(t.$t("address.retry")))]),n("span",[t._v("或前往")]),n("a",{attrs:{href:t.blockExplorerUrl+t.address,title:"在 btc.com 查看",target:"_blank"}},[t._v(" BTC.com ")]),n("span",[t._v("查看")])],1):t._e(),n("div",{staticClass:"address-tx"},[n("v-table",{staticStyle:{width:"auto"},attrs:{"is-vertical-resize":"","vertical-resize-offset":60,"is-horizontal-resize":"","multiple-sort":!1,"min-height":399,"even-bg-color":"#f2f2f2","title-rows":t.tableConfig.titleRows,columns:t.tableConfig.columns,"table-data":t.tableData,"row-hover-color":"#eee","row-click-color":"#edf7ff","paging-index":(t.pageIndex-1)*t.pageSize,"is-loading":t.tableConfig.isLoading},on:{"sort-change":t.sortChange}}),n("div",{staticClass:"mt20 mb20 bold"}),t.addressTxs&&t.addressTxs.total_count?n("v-pagination",{attrs:{total:t.addressTxs.total_count,"page-size":t.pageSize,layout:["total","prev","pager","next","jumper"]},on:{"page-change":t.pageChange,"page-size-change":t.pageSizeChange}}):t._e()],1)])],1)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v("账户暂无数据"),n("br"),t._v("未使用过的地址")])}],J=(n("pIFo"),n("Vd3H"),n("iv4g")),G=(n("NL/0"),n("5ftm"));function Z(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;return fetch(t,e).then(function(s){return 1===n?console.warn("fetch retry finished"):403===s.status?Z(t,e,n-1):s}).catch(function(s){if(1===n)throw s;return Z(t,e,n-1)})}function X(t){var e=window.getSelection(),n=document.createRange();return n.selectNodeContents(document.getElementById(t)),e.removeAllRanges(),e.addRange(n),document.execCommand("copy")}var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal-mask",attrs:{transition:"modal"}},[n("div",{staticClass:"modal-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"_modal-header"},[n("div",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.title||t.$t("home.aboutTitle")))]),n("div",{staticClass:"modal-close",on:{click:t.close}},[n("span"),n("span")])]),n("div",{staticClass:"modal-body"},[t._t("content",[t._v("default body")])],2)])])])},K=[],tt={name:"modal",props:{title:{type:String,default:""},show:!1},data:function(){return{}},watch:{show:function(t){var e=window.document.querySelectorAll("body")[0];e.classList.toggle("modal-open")}},methods:{close:function(){this.$emit("close")}},mounted:function(){}},et=tt,nt=(n("Rn2j"),Object(p["a"])(et,Q,K,!1,null,null,null)),st=nt.exports,at=n("iPsF"),it=n.n(at),rt=n("NAv5"),ot=n("0FX9"),ct=n.n(ot),lt="https://cors.oaker.bid/",ut={name:"Address",mixins:[u],components:{Modal:st,SearchBox:B,VTable:G["VTable"],VPagination:G["VPagination"],Button:y["Button"]},data:function(){var t=this;return{address:null,addressDetail:null,addressTxs:null,showLoading:!0,showErrorMsg:!1,addressErrors:null,qrUrl:null,prices:{cny:null,usd:null},pageIndex:1,pageSize:10,blockExplorerUrl:"https://bsv.btc.com/",tableConfig:{multipleSort:!1,tableData:[],columns:[{field:"title",width:70,columnAlign:"center",isFrozen:!0},{field:"amount",width:110,columnAlign:"left",isFrozen:!0,formatter:function(t,e,n){return'<span class="tx-amount '.concat(Number(t.amount)>=0?"in":"out",'">').concat(t.amount,"</span>")}},{field:"time",width:170,columnAlign:"center",isFrozen:!0},{field:"id",width:70,columnAlign:"center",isFrozen:!0,formatter:function(e,n,s){return"<a href=".concat(t.blockExplorerUrl+e.id,' target="_blank" title="可复制完整交易 ID 或点击前往 BTC.com 查看">').concat(e.id,"</a>")}}],titleRows:[[{fields:["title"],title:this.$t("address.direction"),titleAlign:"center"},{fields:["amount"],title:this.$t("address.amount"),titleAlign:"center"},{fields:["time"],title:this.$t("address.time"),titleAlign:"center"},{fields:["id"],title:"ID",titleAlign:"center"}]],isLoading:!0}}},methods:{submit:function(t){console.log("trigger submit");var e=t.trim();if(this.isHandle(e))this.go({path:"/?q=".concat(e)});else try{it.a.isLegacyAddress(t)&&(this.address=t,this.setAddressData(t))}catch(t){this.addressErrors="地址格式不正确",this.addressDetail=this.addressTxs=this.qrUrl=null,this.showLoading=!0,console.error(t)}},setAddressData:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return document.title="帐户 "+this.address,this.showLoading=!0,this.showErrorMsg=!1,this.addressDetail=this.addressTxs=this.addressErrors=null,t.next=6,ct.a.toDataURL(e);case 6:this.qrUrl=t.sent,this.getAddressDetail(e).then(function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n.addressDetail=e,n.getTableData(),n.showLoading=!1,Object.keys(n.addressDetail).length||(n.showErrorMsg=!0);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getAddressDetail:function(t){var e="".concat(lt,"https://bsv-chain.api.btc.com/v3/address/").concat(t);return Z(e).then(function(t){return t.json().then(function(t){return t.headers?t.data.data:t.data})})},getAddressTxs:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.pageIndex,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.pageSize,s="".concat(lt,"https://bsv-chain.api.btc.com/v3/address/").concat(t,"/tx?page=").concat(e,"&pagesize=").concat(n,"&verbose=1");return new Promise(function(t,e){Z(s).then(function(e){e.json().then(function(e){t(e.headers?e.data.data:e.data)})})})},getPrices:function(){var t="https://api.coingecko.com/api/v3/coins/markets?vs_currency=cny&ids=bitcoin-cash-sv";return fetch(t).then(function(t){return t.json().then(function(t){return t[0]}).catch(function(t){return console.error(t)})})},getTableData:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.tableConfig.isLoading=!0,this.addressTxs?this.addressTxs.list[(this.pageIndex-1)*this.pageSize]?this.tableConfig.isLoading=!1:this.getAddressTxs(this.address).then(function(t){var n,s=t;e.addressTxs.list[(e.pageIndex-1)*e.pageSize]=null,(n=e.addressTxs.list).splice.apply(n,[(e.pageIndex-1)*e.pageSize,0].concat(Object(J["a"])(s.list))),e.tableConfig.isLoading=!1}):this.getAddressTxs(this.address).then(function(t){e.addressTxs=t,e.tableConfig.isLoading=!1});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),pageChange:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.pageIndex=e,this.getTableData();case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),pageSizeChange:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.pageIndex=1,this.pageSize=e,this.addressTxs=null,this.getTableData();case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),sortChange:function(t){t.height.length>0&&this.tableConfig.tableData.sort(function(e,n){return"asc"===t.height?e.height-n.height:"desc"===t.height?n.height-e.height:0})},timeFormat:function(t,e){return Object(rt["format"])(new Date(1e3*t),"YYYY-MM-DD HH:mm:ss")}},computed:{locale:function(){return this.$root.$data.shared.isZh?"zh_CN":"en_US"},fiat:function(){return this.$root.$data.shared.isZh?"cny":"usd"},addressBalance:function(){return this.addressDetail.balance/Math.pow(10,8)},tableData:function(){var t=this;return this.addressTxs?this.addressTxs.list.map(function(e){return e&&{title:e.balance_diff>0?t.$t("address.received"):t.$t("address.sent"),amount:(e.balance_diff>0?"+":"")+Number(e.balance_diff/Math.pow(10,8)).toFixed(8).replace(/\.?0+$/,""),time:t.timeFormat(e.block_time||e.created_at),id:e.hash}}).slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize).filter(function(t){return!!t}):[]},addressFiatBalance:function(){return this.addressDetail&&this.prices.usd&&L()(this.addressBalance*this.prices[this.fiat]).format("0,0.00")}},filters:{format:function(t,e){return"btc"===e?L()(t*Math.pow(10,6)).format("0,000,000.00"):L()(t).format("0,0.00")}},watch:{"$route.query.q":function(t,e){console.log({newRoute:t,oldRoute:e});var n=t;!n||this.address&&t===e||(this.address=n,this.submit(this.address))}},created:function(){var t=this,e=this.$route.query.q;e&&!this.address&&(this.address=e,this.submit(this.address)),this.getPrices().then(function(e){t.prices.cny=e.current_price,t.prices.usd=t.prices.cny/6.8})},mounted:function(){}},dt=ut,ht=(n("hAN3"),Object(p["a"])(dt,Y,W,!1,null,null,null)),pt=ht.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.errMsg?n("div",{staticClass:"err-msg"},[t._v(t._s(t.errMsg))]):n("div",{staticClass:"handle-view"},[n("div",{staticClass:"name"},[t._v(t._s(t.handle))]),n("div",{staticClass:"qr-wrap"},[t.qrUrl?n("img",{attrs:{src:t.qrUrl},on:{click:t.copyAddress}}):n("div",{staticClass:"preloader"},[t._v(".")])]),n("div",{staticClass:"address"},[n("span",{staticClass:"text",attrs:{id:"tocopy"}},[t._v(t._s(t.receivingAddress))])]),n("Button",{class:{success:t.isCopied},attrs:{size:"large"},on:{click:t.copyAddress}},[t._v(t._s(t.isCopied?t.$t("handle.copied"):t.$t("handle.copy")))]),n("div",{staticClass:"desc"},[n("span",[t._v("via")]),n("a",{attrs:{href:"http://handcash.io/api-docs/",target:"_blank"}},[t._v("HandCash API")]),n("span",[t._v(" made by")]),n("a",{attrs:{href:t.donateUrl,target:"_blank"}},[t._v("$oaker")])])],1)])},mt=[],vt=(n("OG14"),{name:"Home",mixins:[u],components:{Button:y["Button"],"i-switch":y["Switch"]},data:function(){return{handle:null,receivingAddress:null,qrUrl:null,showLoading:!0,isCopied:!1,errMsg:null}},methods:{getAddress:function(t){var e=this,n="https://api.handcash.io/api/receivingAddress/".concat(t);this.showLoading=!0,fetch(n).then(function(t){if(e.showLoading=!1,200!==t.status)return e.errMsg="request error",void console.log("Looks like there was a problem. Status Code: "+t.status);t.json().then(function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.receivingAddress=n.receivingAddress,t.next=3,ct.a.toDataURL(e.receivingAddress);case 3:e.qrUrl=t.sent,e.showLoading=!1;case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())})},setHandle:function(){var t=window.location.search.substring(1),e=new URLSearchParams(t),n=e.get("q");n?(0===n.indexOf("$")?(n=n.substr(1),this.handle=n):this.handle="$"+n,this.$router.replace({path:"?q="+n}),document.title=this.handle+this.$t("handle.title"),this.getAddress(n)):window.location.assign(window.location.origin)},copyAddress:function(){var t=this;X("tocopy")&&(this.isCopied=!0,setTimeout(function(){t.isCopied=!1},1e3))}},computed:{originUrl:function(){return window.location.origin},donateUrl:function(){return this.originUrl+"?q=oakerx"}},filters:{},watch:{},created:function(){this.setHandle()},mounted:function(){}}),gt=vt,bt=(n("H8nb"),Object(p["a"])(gt,ft,mt,!1,null,null,null)),wt=bt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"safe-guides-view"},[n("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.content)}})])},Ct=[],yt=n("DlQD"),xt=n.n(yt),kt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},St=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("数字货币安全保管使用指南")]),n("ul",[n("li",[t._v("设备安全，手机优于电脑，苹果产品优于其它产品，专业的硬件钱包尤佳\n"),n("ol",[n("li",[t._v("保证使用原版系统和软件，从下载渠道要保证")]),n("li",[t._v("推荐使用 MacOS，最好不要用 windows，海外用户也可选择 ChromeOS")]),n("li",[t._v("使用浏览器的隐私模式进行敏感操作，避免让第三方扩展接触到帐户信息")])])]),n("li",[t._v("网站安全\n"),n("ol",[n("li",[t._v("认准"),n("code",{pre:!0},[t._v("HTTPS")]),t._v("绿色安全标识")]),n("li",[t._v("常用网站添加书签，尽量从书签访问。从搜索引擎进入网站时，要检查网址，因为你点击的可能是钓鱼网站的广告")])])]),n("li",[t._v("支付安全\n"),n("ul",[n("li",[t._v("向二维码地址转账时，要二次检查地址文本，因为二维码可能被掉包，而人不容易察觉")])])]),n("li",[t._v("钱包选择\n"),n("ul",[n("li",[t._v("使用 HD 钱包，不使用脑钱包，不使用私钥")])])])]),n("h2",[t._v("实用方案之手机分身")]),n("p",[t._v("优点：兼顾安全和方便，随身携带，主系统中毒不会威胁到分身系统")]),n("ul",[n("li",[t._v("一台具有分身功能的安卓手机，如小米手机（刷成国际版 MIUI 更好）")]),n("li",[t._v("创建分身系统，只安装钱包App")]),n("li",[t._v("启用指纹识别，与主系统使用不同手指，作为进入方式")]),n("li",[t._v("主系统中移除或关闭分身入口，如通知栏")]),n("li",[t._v("主系统不存放钱包，或只存放小额")])]),n("h2",[t._v("常见问题")]),n("p",[t._v("Q: 一定要选择开源钱包才安全吗？"),n("br"),t._v("\nA: 不，现在用户比较多的钱包如比特派、Coinomi 不是开源的")]),n("p",[t._v("Q: 硬件钱包是终极选择吗？"),n("br"),t._v("\nA: 不，如果遵守本指南，身边的手机可以是性价比更高的选择。如果一定要用电脑，硬件钱包是更好的选择")]),n("h2",[t._v("被盗事件")]),n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29855076"}},[t._v("我的比特币钱包被盗，损失了两个币")]),n("br"),n("a",{attrs:{href:"https://btc.com/1tPyUYNYQLCa7XjBFVKHLnwHoJECMVWEZ"}},[t._v("地址 1tPyUYNYQLCa7XjBFVKHLnwHoJECMVWEZ - BTC.com")]),n("br"),t._v("\n2017年9月16日和17日分两次转入，9月28日被全部转出，应该是 9.15 北京通知关闭交易所后，从交易所提币的新手")]),n("p",[n("a",{attrs:{href:"https://www.zhihu.com/question/40504007"}},[t._v("比特币在blockchain.info被盗，可以申诉找回吗？ 是否意味在线钱包并不安全？ - 知乎")]),n("a",{attrs:{href:"https://btc.com/1FPPy6mkU4HGZjvig8imkuDSzBzc4LgSET"}},[t._v("地址 1FPPy6mkU4HGZjvig8imkuDSzBzc4LgSET - BTC.com")]),n("br"),t._v("\n14 年开始用的老钱包，像是定投过，2015年1月15日 1.1 个币被转出")]),n("p",[n("a",{attrs:{href:"http://m.news.cctv.com/2017/12/23/ARTIjzJNEcnJC4Um4ReWcWqp171223.shtml"}},[t._v("河南警方破获全国首例比特币盗窃案_新闻_央视网(cctv.com)")]),n("br"),n("a",{attrs:{href:"http://henan.qq.com/a/20171125/015167.htm"}},[t._v("全国首例！油田居民百万比特币被盗_大豫网_腾讯网")]),n("br"),t._v("\n受害人使用电脑，被诱导安装了有后门的钱包软件")]),n("p",[n("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_14ecef0b70102x3lb.html"}},[t._v("Bitfinex12万比特币被盗 黑客攻击还是监守自盗？ - 财新网")])]),n("p",[n("img",{attrs:{src:"http://ww1.sinaimg.cn/large/4e5d3ea7ly1fo4hna7mmzj20ku0msn09.jpg",alt:"你知道交易平台被盗的历史吗？"}})])])}],Bt={},Tt=Object(p["a"])(Bt,kt,St,!1,null,null,null),jt=Tt.exports;xt.a.setOptions({renderer:new xt.a.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1});var $t={name:"SafeGuides",props:{},data:function(){return{content:xt()(jt)}},computed:{},methods:{},mounted:function(){}},At=$t,Vt=(n("OyJ8"),Object(p["a"])(At,_t,Ct,!1,null,null,null)),Dt=Vt.exports;a["default"].use(v["a"]);/zh/.test(window.navigator.language||window.navigator.userLanguage);var Et=[{path:"/",name:"Home",components:{default:F,address:pt,handle:wt},meta:{keepAlive:!0,titles:{default:"BSV_比特币导航",address:"BSV 帐户查看器"}}},{path:"/safe-guides",name:"SafeGuides",component:Dt,meta:{title:"安全指南"}},{path:"*",redirect:"/"}],Mt=new v["a"]({mode:"history",routes:Et,scrollBehavior:function(t,e,n){if(!n)return{x:0,y:0};setTimeout(function(){window.scrollTo(n.x,n.y)},200)}});Mt.beforeEach(function(t,e,n){var s=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.title}),a=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.metaTags});if(s&&(document.title=s.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(function(t){return t.parentNode.removeChild(t)}),!a)return n();a.meta.metaTags.map(function(t){var e=document.createElement("meta");return Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])}),e.setAttribute("data-vue-router-controlled",""),e}).forEach(function(t){return document.head.appendChild(t)}),n()});var zt=Mt,Ot=n("qSUR"),Lt=n("Njy0"),qt=n.n(Lt),Rt=n("lIOY");Object(Rt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["default"].config.productionTip=!1,a["default"].use(Ot["a"]),a["default"].use(qt.a);var Ht={isZh:/zh/.test(window.navigator.language||window.navigator.userLanguage)},Ut={zh:{home:{title:"比特币导航",about:"关于",aboutTitle:"联系/捐赠开发者(BSV)",mobile:"电话&微信",email:"邮箱",sourceCode:"开放源码",searchPlaceholder:"BSV 地址，$handler"},address:{balance:"余额",latestTxs:"近 10 笔",sent:"发送",received:"接收",serviceUnavailable:"服务暂不可用",retry:"重试",direction:"方向",amount:"金额",time:"时间"},handle:{title:" 的 BSV 收款",copy:"复制",copied:"已复制",useLegacy:"使用旧版地址",failed:"查询失败，请检查 $handle 拼写是否正确"}},en:{home:{title:"BSV",about:"About",aboutTitle:"Donate to the developer (BSV)",mobile:"Mobile&Wechat",email:"Email",sourceCode:"Source Code",searchPlaceholder:"BSV address, $handler"},address:{balance:"Balance",latestTxs:"Latest 10 Transactions",sent:"Sent",received:"Received",serviceUnavailable:"Service Unavailable",retry:"Retry",direction:"Direction",amount:"Amount",time:"Time"},handle:{title:"'s BSV Receiving Address",copy:"copy",copied:"copied",useLegacy:"use Legacy Address",failed:"Query failed, please check the spelling of $handle"}}},It=new Ot["a"]({locale:Ht.isZh?"zh":"en",messages:Ut});new a["default"]({data:{shared:Ht},router:zt,i18n:It,render:function(t){return t(m)}}).$mount("#app")},XN8D:function(t,e,n){"use strict";var s=n("mmIv"),a=n.n(s);a.a},Xfis:function(t,e,n){},YWu6:function(t,e,n){},c970:function(t,e,n){},"cB/s":function(t,e,n){},fjHr:function(t,e,n){},hAN3:function(t,e,n){"use strict";var s=n("tv4S"),a=n.n(s);a.a},iNlQ:function(t,e,n){},k62V:function(t,e,n){"use strict";var s=n("iNlQ"),a=n.n(s);a.a},kRqj:function(t,e,n){"use strict";var s=n("YWu6"),a=n.n(s);a.a},mmIv:function(t,e,n){},tv4S:function(t,e,n){},xVBG:function(t,e,n){},zuBh:function(t,e,n){"use strict";var s=n("xVBG"),a=n.n(s);a.a}});
//# sourceMappingURL=index-legacy.d8a0bda1.js.map