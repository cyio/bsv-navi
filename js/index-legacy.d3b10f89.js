(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)r=o[d],a[r]&&h.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={index:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("5779")},"05ef":function(t,e,n){},"0cb1":function(t,e,n){"use strict";var s=n("b6e7"),a=n.n(s);a.a},"0e55":function(t,e,n){},1:function(t,e){},"14ab":function(t,e,n){},"15f0":function(t,e,n){"use strict";var s=n("f7e7"),a=n.n(s);a.a},1685:function(t,e,n){},"1dcb":function(t,e,n){},2:function(t,e){},"22d7":function(t,e,n){"use strict";var s=n("0e55"),a=n.n(s);a.a},"3f8b":function(t,e,n){},5779:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s,a=n("2b0e"),i=(n("1685"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{handle:"handle"===t.currentView},attrs:{id:"app"}},[n("div",{staticClass:"main-container"},[n("header",[n("div",{staticClass:"layout-logo link",on:{click:function(e){return t.go({path:"/"})}}},[t.currentView||"Home"!==t.$route.name?n("div",{staticClass:"logo-wrap"}):n("span",[t._v(t._s(t.$t("home.title")))])]),t.currentView&&t.$route.meta.titles[t.currentView]?n("span",{staticClass:"sub-page-title"},[t._v("> "+t._s(t.$route.meta.titles[t.currentView]))]):t._e(),n("div",{staticClass:"layout-nav"},[t.isSupportWebShare?n("div",{staticClass:"link",on:{click:t.share}},[t._v("分享")]):t._e()])]),t.currentView?n("div",{staticClass:"content"},[n("router-view",{attrs:{name:t.currentView}})],1):n("div",{staticClass:"content"},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1),n("footer",[n("div",[t._v("@"+t._s((new Date).getFullYear())+" © bsv.oaker.bid ")])])])])}),r=[],o=n("c6c6"),c=n.n(o),l=new c.a(window.navigator.userAgent),u={methods:{debug:function(t){console.log("debug",t)},go:function(t){this.$router.push(t)},goBack:function(){this.$router.go(-1)},goHome:function(){window.location.assign(window.location.origin)},isHandle:function(t){return/^\$/.test(t)||t.length<20}},computed:{isMobile:function(){return l.mobile()},isSupportWebShare:function(){return navigator.share}}},d={mixins:[u],name:"app",components:{},data:function(){return{currentView:null}},methods:{share:function(){navigator.share({title:"bsv.oaker.bid",text:"",url:window.location.href}).then(function(){return console.log("Successful share")}).catch(function(t){return console.log("Error sharing",t)})}},watch:{"$route.query.q":function(t,e){var n=t;n?this.currentView=this.isHandle(n)?"handle":"address":(this.currentView=null,document.title="BSV_"+this.$t("home.title"))}},created:function(){var t=this.$route.query.q;this.currentView=t?this.isHandle(t)?"handle":"address":null}},h=d,f=(n("e6fc"),n("2877")),p=Object(f["a"])(h,i,r,!1,null,null,null),m=p.exports,v=(n("456d"),n("ac6a"),n("5df3"),n("1c4c"),n("7514"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-view"},[n("statistics"),n("search-box",{attrs:{submit:t.submit}}),n("websites")],1)},b=[],w=(n("96cf"),n("3b8d")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchbar-input-container"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.words,expression:"words",modifiers:{trim:!0}}],staticClass:"searchbar-input",attrs:{type:"search",name:"q",placeholder:t.$t("home.searchPlaceholder"),autocomplete:"off",spellcheck:"false"},domProps:{value:t.words},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t._submit(e)},change:function(e){t.errMsg=null},input:function(e){e.target.composing||(t.words=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("a",{staticClass:"icon btc-com",attrs:{href:"https://bsv.btc.com/"+t.words,title:"在 btc.com 查看",target:"_blank"}}),n("icon",{staticClass:"search-icon",attrs:{type:"search",name:"search"},nativeOn:{click:function(e){return t._submit(e)}}}),t.displayErrMsg?n("div",{staticClass:"err-msg"},[t._v(t._s(t.displayErrMsg))]):t._e()],1)},C=[],y=n("e069"),x={name:"search-box",mixins:[u],components:{Icon:y["Icon"]},props:{keywords:{type:String,default:""},errors:{type:String,default:""},submit:{type:Function}},data:function(){return{words:this.keywords,errMsg:this.errors}},computed:{displayErrMsg:function(){return this.errors||this.errMsg}},methods:{_submit:function(){var t=this.words;t&&this.submit(t)}},mounted:function(){}},k=x,S=(n("c867"),Object(f["a"])(k,_,C,!1,null,"5f23ae1e",null)),B=S.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"websites-view"},[n("table",t._l(Object.keys(t.sites),function(e){return n("tr",[n("th",{on:{click:function(n){t.sites[e].expand=!t.sites[e].expand}}},[t._v(t._s(e))]),n("div",{staticClass:"tr-inner"},t._l(t.sites[e].content,function(e,s){return n("td",[e.url.includes("http")?n("a",{staticClass:"link",attrs:{href:e.url,title:e.desc,target:"_blank"}},[t._v(t._s(e.title))]):n("a",{staticClass:"link",attrs:{tabindex:"0"},on:{click:function(n){return t.go({path:e.url})}}},[t._v(t._s(e.title))])])}),0)])}),0)])},$=[],A={"社区":{content:[{title:"骷髅会",desc:"微信群聊天记录",url:"https://svskull.club/"},{title:"WeiBlock",desc:"链上微博",url:"https://weiblock.app/"},{title:"巴比特论坛",url:"https://www.chainnode.com/forum/269"},{title:"Reddit",url:"https://www.reddit.com/r/bitcoinsv/"}]},"行情":{content:[{title:"加密货币市值",desc:"Cryptocurrency Market Capitalizations | CoinMarketCap",url:"https://coinmarketcap.com/zh/"},{title:"非小号",desc:"比特币行情价格_专注数字货币行业大数据分析",url:"https://www.feixiaohao.com/"}]},"资讯":{content:[{title:"币世界",url:"https://www.bishijie.com/kuaixun"},{title:"CoinGeek",url:"https://coingeek.com/"},{title:"BSV Daily",url:"https://media.bitcoinfiles.org/83264827cdc0825b40868307daec68f34a78ce5f3ac3547b1efea61b64bfe449"}]},"浏览器":{content:[{title:"ViaBTC",url:"https://explorer.viabtc.com/bsv"},{title:"WhatsOnChain",url:"https://whatsonchain.com/"},{title:"Blockchair",url:"https://blockchair.com/bitcoin-sv"},{title:"BTC.com",url:"https://bsv.btc.com"}]},"工具":{content:[{title:"Polynym",desc:"Simple BSV address resolution for HandCash, RelayX and PayMail handles.",url:"https://polynym.io/"},{title:"Bitpaste",desc:"On-chain text and file sharing",url:"https://www.bitpaste.app"},{title:"Bico Media",url:"https://bico.media/",desc:"Bitcoin sv blockchain files for content creators"}]},"数据":{content:[{title:"活跃地址",desc:"BSV,BCH,BTC 每日活跃地址数对比",url:"https://bitinfocharts.com/comparison/activeaddresses-btc-bch-bsv.html#log&6m"},{title:"交易量",desc:"BSV,BCH,BTC 每日交易数对比",url:"https://bitinfocharts.com/comparison/transactions-btc-bch-bsv.html#log&6m"},{title:"算力",desc:"BSV,BCH,BTC 每日算力对比",url:"https://bitinfocharts.com/comparison/hashrate-btc-bch-bsv.html#6m"},{title:"BitcoinBlocks",desc:"live transactions on Bitcoin SV ",url:"https://bitcoinblocks.live/"},{title:"TX Highway",desc:"Live Bitcoin Cash vs Bitcoin Core Transaction Visualizer ",url:"https://txhighway.com/"},{title:"CoinDance",url:"https://coin.dance/"}]},"入门":{content:[{title:"白皮书中文",url:"http://www.8btc.com/wiki/bitcoin-a-peer-to-peer-electronic-cash-system"},{title:"比特币是什么",desc:"知乎最高票答案，中文界第一科普长文",url:"https://www.zhihu.com/question/22076666/answer/69638270"},{title:"中本聪研究所",desc:"阅读中本聪邮件、论坛帖子首选 - Nakamoto Studies",url:"https://nakamotostudies.org/"}]},"钱包":{content:[{title:"HandCash",url:"http://www.handcash.io/"},{title:"Relayx",url:"https://relayx.io/"},{title:"ElectrumSV",desc:"The Bitcoin SV Desktop Wallet",url:"https://electrumsv.io/"},{title:"打点钱包",url:"https://www.ddpurse.com/"},{title:"Coinomi",url:"https://coinomi.com/"},{title:"Jaxx",url:"https://jaxx.io/"},{title:"Exodus",url:"https://www.exodus.io/"}]},"交易所":{content:[{title:"OKEx",url:"https://www.okex.com/"},{title:"火币",url:"https://www.huobi.com/"},{title:"Float SV",url:"https://www.floatsv.com/"}]},"考古":{content:[{title:"创世地址",url:"?q=1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"},{title:"创世交易",desc:"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",url:"https://bsv.btc.com/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"}]}},j={name:"websites",mixins:[u],props:{},data:function(){return{sites:A}},computed:{},methods:{},mounted:function(){}},D=j,E=(n("0cb1"),Object(f["a"])(D,T,$,!1,null,null,null)),M=E.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"statistics"},[t.market?n("ul",t._l(Object.keys(t.market),function(e){return n("li",[n("span",{staticClass:"label"},[t._v(t._s(e)+": ")]),n("span",{staticClass:"value"},[t._v(t._s(t.market[e]||"-----"))])])}),0):t._e()])},O=[],z=(n("c5f6"),n("6612")),L=n.n(z);function q(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;return fetch(t,e).then(function(s){return 1===n?console.warn("fetch retry finished"):403===s.status?q(t,e,n-1):s}).catch(function(s){if(1===n)throw s;return q(t,e,n-1)})}function U(t){var e=window.getSelection(),n=document.createRange();return n.selectNodeContents(document.getElementById(t)),e.removeAllRanges(),e.addRange(n),document.execCommand("copy")}function H(){var t=(new Date).getHours();return t>=0&&t<=5}function R(t,e){return(t/e*100).toFixed(2)+"%"}function P(t,e){return L()(t/Math.pow(10,4)).format("0,000")+"万 / "+R(t,e)}var I={data:function(){return{market:{"最新价":null,"BSV/BTC":null,"BSV/BCH":null,"已供应":null,"火币USDT":null,"离岸人民币":null,"60日累计涨幅":null}}},methods:{getMaintainData:function(){var t=this,e="https://gitee.com/api/v5/gists/ba375uensivprto2c08xq70";fetch(e).then(function(e){return e.json().then(function(e){var n=JSON.parse(e.files["main.json"].content),s=(Number(new Date)-Number(new Date(e.updated_at)))/1e3/60;s>5&&console.warn("delayMinute: ",s);var a=n.data,i=(a.percent_change_24h,a.circulating_supply),r=a.max_supply,o=a.change_of_60days;t.market={"最新价":"￥".concat(Math.round(a.price)),"BSV/BTC":a.bsv_btc.toFixed(4),"BSV/BCH":a.bsv_bch.toFixed(4),"已供应":P(i,r),"火币USDT":a.usdt_otc_price,"离岸人民币":a.usd_otc_price.toFixed(2),"60日累计涨幅":null!==o&&"".concat(o>0?"+":"").concat(Math.round(100*o),"%")}})})}},computed:{},beforeMount:function(){var t=this;this.getMaintainData(),s=setInterval(function(){t.getMaintainData()},18e4)},beforeDestory:function(){clearInterval(s)}},F=I,N=(n("15f0"),Object(f["a"])(F,V,O,!1,null,"59692a2b",null)),W=N.exports,J={name:"Home",mixins:[u],components:{SearchBox:B,Websites:M,Statistics:W,Layout:y["Layout"],Header:y["Header"],Menu:y["Menu"],MenuItem:y["MenuItem"],Breadcrumb:y["Breadcrumb"],BreadcrumbItem:y["BreadcrumbItem"],Card:y["Card"],Footer:y["Footer"],Icon:y["Icon"]},data:function(){return{currentView:null}},methods:{submit:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=e.trim(),0===e.indexOf("bitcoincash:")&&(e=e.substr(12)),this.go({path:"?q=".concat(e)});case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},computed:{},filters:{},created:function(){},mounted:function(){}},Y=J,Z=(n("90e0"),Object(f["a"])(Y,g,b,!1,null,null,null)),G=Z.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"address-view"},[n("search-box",{attrs:{keywords:t.address,errors:t.addressErrors,submit:t.submit}}),n("div",{staticClass:"address-detail"},[n("div",{staticClass:"row"},[n("div",{staticClass:"address-balance"},[n("div",[n("div",{staticClass:"label"},[t._v(t._s(t.$t("address.balance")))]),n("div",{staticClass:"fiat-row"},[n("div",[n("span",{staticClass:"value"},[t._v(t._s(t.addressFiatBalance||"-----"))]),n("span",{staticClass:"unit"},[t._v(t._s(t.fiat.toUpperCase()))])])]),n("div",{staticClass:"balance-row"},[n("span",{staticClass:"value"},[t._v(t._s(t.addressDetail?t.addressBalance:"-----"))]),n("span",{staticClass:"unit"},[t._v("BSV")])])]),t.showLoading||t.showErrorMsg||null!==t.addressDetail?t._e():n("div",[t._m(0)])]),t.qrUrl?n("div",{staticClass:"qr-wrap"},[n("img",{attrs:{src:t.qrUrl}})]):t._e()]),t.showErrorMsg?n("div",{staticClass:"error"},[t._v(t._s(t.$t("address.serviceUnavailable"))),n("Button",{on:{click:function(e){return t.setAddressData(t.address)}}},[t._v(t._s(t.$t("address.retry")))]),n("span",[t._v("或前往")]),n("a",{attrs:{href:t.blockExplorerUrl+t.address,title:"在 btc.com 查看",target:"_blank"}},[t._v(" BTC.com ")]),n("span",[t._v("查看")])],1):t._e(),n("div",{staticClass:"address-tx"},[n("v-table",{staticStyle:{width:"auto"},attrs:{"is-vertical-resize":"","vertical-resize-offset":60,"is-horizontal-resize":"","multiple-sort":!1,"min-height":399,"even-bg-color":"#f2f2f2","title-rows":t.tableConfig.titleRows,columns:t.tableConfig.columns,"table-data":t.tableData,"row-hover-color":"#eee","row-click-color":"#edf7ff","paging-index":(t.pageIndex-1)*t.pageSize,"is-loading":t.tableConfig.isLoading},on:{"sort-change":t.sortChange}}),n("div",{staticClass:"mt20 mb20 bold"}),t.addressTxs&&t.addressTxs.total_count?n("v-pagination",{attrs:{total:t.addressTxs.total_count,"page-size":t.pageSize,layout:["total","prev","pager","next","jumper"]},on:{"page-change":t.pageChange,"page-size-change":t.pageSizeChange}}):t._e()],1)])],1)},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v("账户暂无数据"),n("br"),t._v("未使用过的地址")])}],K=(n("55dd"),n("75fc")),tt=(n("a481"),n("34bf"),n("e5fb")),et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal-mask",attrs:{transition:"modal"}},[n("div",{staticClass:"modal-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"_modal-header"},[n("div",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.title||t.$t("home.aboutTitle")))]),n("div",{staticClass:"modal-close",on:{click:t.close}},[n("span"),n("span")])]),n("div",{staticClass:"modal-body"},[t._t("content",[t._v("default body")])],2)])])])},nt=[],st={name:"modal",props:{title:{type:String,default:""},show:!1},data:function(){return{}},watch:{show:function(t){var e=window.document.querySelectorAll("body")[0];e.classList.toggle("modal-open")}},methods:{close:function(){this.$emit("close")}},mounted:function(){}},at=st,it=(n("22d7"),Object(f["a"])(at,et,nt,!1,null,null,null)),rt=it.exports,ot=n("88fb"),ct=n.n(ot),lt=n("340b"),ut=n("d055"),dt=n.n(ut),ht="https://cnbeta.leanapp.cn/api/proxy?url=",ft={name:"Address",mixins:[u],components:{Modal:rt,SearchBox:B,VTable:tt["VTable"],VPagination:tt["VPagination"],Button:y["Button"]},data:function(){var t=this;return{address:null,addressDetail:null,addressTxs:null,showLoading:!0,showErrorMsg:!1,addressErrors:null,qrUrl:null,prices:{cny:null,usd:null},pageIndex:1,pageSize:10,blockExplorerUrl:"https://bsv.btc.com/",tableConfig:{multipleSort:!1,tableData:[],columns:[{field:"title",width:70,columnAlign:"center",isFrozen:!0},{field:"amount",width:110,columnAlign:"left",isFrozen:!0,formatter:function(t,e,n){return'<span class="tx-amount '.concat(Number(t.amount)>=0?"in":"out",'">').concat(t.amount,"</span>")}},{field:"time",width:170,columnAlign:"center",isFrozen:!0},{field:"id",width:70,columnAlign:"center",isFrozen:!0,formatter:function(e,n,s){return"<a href=".concat(t.blockExplorerUrl+e.id,' target="_blank" title="可复制完整交易 ID 或点击前往 BTC.com 查看">').concat(e.id,"</a>")}}],titleRows:[[{fields:["title"],title:this.$t("address.direction"),titleAlign:"center"},{fields:["amount"],title:this.$t("address.amount"),titleAlign:"center"},{fields:["time"],title:this.$t("address.time"),titleAlign:"center"},{fields:["id"],title:"ID",titleAlign:"center"}]],isLoading:!0}}},methods:{submit:function(t){console.log("trigger submit");var e=t.trim();if(this.isHandle(e))this.go({path:"/?q=".concat(e)});else try{ct.a.isLegacyAddress(t)&&(this.address=t,this.setAddressData(t))}catch(n){this.addressErrors="地址格式不正确",this.addressDetail=this.addressTxs=this.qrUrl=null,this.showLoading=!0,console.error(n)}},setAddressData:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return document.title="帐户 "+this.address,this.showLoading=!0,this.showErrorMsg=!1,this.addressDetail=this.addressTxs=this.addressErrors=null,t.next=6,dt.a.toDataURL(e);case 6:this.qrUrl=t.sent,this.getAddressDetail(e).then(function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n.addressDetail=e,n.getTableData(),n.showLoading=!1,Object.keys(n.addressDetail).length||(n.showErrorMsg=!0);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),checkSleep:function(){if(H()){if(window.confirm("应用休眠中，服务时间 6:00 - 24:00，点击确定前往第三方网站查看 ".concat(this.blockExplorerUrl))){var t=this.blockExplorerUrl+this.address;window.location.replace(t)}else window.history.back();throw new Error("")}},getAddressDetail:function(t){ht.indexOf("lean")>-1&&this.checkSleep();var e="".concat(ht,"https://bsv-chain.api.btc.com/v3/address/").concat(t);return q(e).then(function(t){return t.json().then(function(t){return t.headers?t.data.data:t.data})})},getAddressTxs:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.pageIndex,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.pageSize,s="".concat(ht,"https://bsv-chain.api.btc.com/v3/address/").concat(t,"/tx?page=").concat(e,"&pagesize=").concat(n,"&verbose=1");return new Promise(function(t,e){q(s).then(function(e){e.json().then(function(e){t(e.headers?e.data.data:e.data)})})})},getPrices:function(){var t="https://api.coingecko.com/api/v3/coins/markets?vs_currency=cny&ids=bitcoin-cash-sv";return fetch(t).then(function(t){return t.json().then(function(t){return t[0]}).catch(function(t){return console.error(t)})})},getTableData:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.tableConfig.isLoading=!0,this.addressTxs?this.addressTxs.list[(this.pageIndex-1)*this.pageSize]?this.tableConfig.isLoading=!1:this.getAddressTxs(this.address).then(function(t){var n,s=t;e.addressTxs.list[(e.pageIndex-1)*e.pageSize]=null,(n=e.addressTxs.list).splice.apply(n,[(e.pageIndex-1)*e.pageSize,0].concat(Object(K["a"])(s.list))),e.tableConfig.isLoading=!1}):this.getAddressTxs(this.address).then(function(t){e.addressTxs=t,e.tableConfig.isLoading=!1});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),pageChange:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.pageIndex=e,this.getTableData();case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),pageSizeChange:function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.pageIndex=1,this.pageSize=e,this.addressTxs=null,this.getTableData();case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),sortChange:function(t){t.height.length>0&&this.tableConfig.tableData.sort(function(e,n){return"asc"===t.height?e.height-n.height:"desc"===t.height?n.height-e.height:0})},timeFormat:function(t,e){return Object(lt["format"])(new Date(1e3*t),"YYYY-MM-DD HH:mm:ss")}},computed:{locale:function(){return this.$root.$data.shared.isZh?"zh_CN":"en_US"},fiat:function(){return this.$root.$data.shared.isZh?"cny":"usd"},addressBalance:function(){return this.addressDetail.balance/Math.pow(10,8)},tableData:function(){var t=this;return this.addressTxs?this.addressTxs.list.map(function(e){return e&&{title:e.balance_diff>0?t.$t("address.received"):t.$t("address.sent"),amount:(e.balance_diff>0?"+":"")+Number(e.balance_diff/Math.pow(10,8)).toFixed(8).replace(/\.?0+$/,""),time:t.timeFormat(e.block_time||e.created_at),id:e.hash}}).slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize).filter(function(t){return!!t}):[]},addressFiatBalance:function(){return this.addressDetail&&this.prices.usd&&L()(this.addressBalance*this.prices[this.fiat]).format("0,0.00")}},filters:{format:function(t,e){return"btc"===e?L()(t*Math.pow(10,6)).format("0,000,000.00"):L()(t).format("0,0.00")}},watch:{"$route.query.q":function(t,e){console.log({newRoute:t,oldRoute:e});var n=t;!n||this.address&&t===e||(this.address=n,this.submit(this.address))}},created:function(){var t=this,e=this.$route.query.q;e&&!this.address&&(this.address=e,this.submit(this.address)),this.getPrices().then(function(e){t.prices.cny=e.current_price,t.prices.usd=t.prices.cny/6.8})},mounted:function(){}},pt=ft,mt=(n("a9f1"),Object(f["a"])(pt,Q,X,!1,null,null,null)),vt=mt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.errMsg?n("div",{staticClass:"err-msg"},[t._v(t._s(t.errMsg))]):n("div",{staticClass:"handle-view"},[n("div",{staticClass:"name"},[t._v(t._s(t.handle))]),n("div",{staticClass:"qr-wrap"},[t.qrUrl?n("img",{attrs:{src:t.qrUrl},on:{click:t.copyAddress}}):n("div",{staticClass:"preloader"},[t._v(".")])]),n("div",{staticClass:"address"},[n("span",{staticClass:"text",attrs:{id:"tocopy"}},[t._v(t._s(t.receivingAddress))])]),n("Button",{class:{success:t.isCopied},attrs:{size:"large"},on:{click:t.copyAddress}},[t._v(t._s(t.isCopied?t.$t("handle.copied"):t.$t("handle.copy")))]),n("div",{staticClass:"desc"},[n("span",[t._v("via")]),n("a",{attrs:{href:"http://handcash.io/api-docs/",target:"_blank"}},[t._v("HandCash API")]),n("span",[t._v(" made by")]),n("a",{attrs:{href:t.donateUrl,target:"_blank"}},[t._v("$oaker")])])],1)])},bt=[],wt=(n("386d"),{name:"Home",mixins:[u],components:{Button:y["Button"],"i-switch":y["Switch"]},data:function(){return{handle:null,receivingAddress:null,qrUrl:null,showLoading:!0,isCopied:!1,errMsg:null}},methods:{getAddress:function(t){var e=this,n="https://api.handcash.io/api/receivingAddress/".concat(t);this.showLoading=!0,fetch(n).then(function(t){if(e.showLoading=!1,200!==t.status)return e.errMsg="request error",void console.log("Looks like there was a problem. Status Code: "+t.status);t.json().then(function(){var t=Object(w["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.receivingAddress=n.receivingAddress,t.next=3,dt.a.toDataURL(e.receivingAddress);case 3:e.qrUrl=t.sent,e.showLoading=!1;case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())})},setHandle:function(){var t=window.location.search.substring(1),e=new URLSearchParams(t),n=e.get("q");n?(0===n.indexOf("$")?(n=n.substr(1),this.handle=n):this.handle="$"+n,this.$router.replace({path:"?q="+n}),document.title=this.handle+this.$t("handle.title"),this.getAddress(n)):window.location.assign(window.location.origin)},copyAddress:function(){var t=this;U("tocopy")&&(this.isCopied=!0,setTimeout(function(){t.isCopied=!1},1e3))}},computed:{originUrl:function(){return window.location.origin},donateUrl:function(){return this.originUrl+"?q=oakerx"}},filters:{},watch:{},created:function(){this.setHandle()},mounted:function(){}}),_t=wt,Ct=(n("9b96"),Object(f["a"])(_t,gt,bt,!1,null,null,null)),yt=Ct.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"safe-guides-view"},[n("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.content)}})])},kt=[],St=n("0e54"),Bt=n.n(St),Tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("数字货币安全保管使用指南")]),n("ul",[n("li",[t._v("设备安全，手机优于电脑，苹果产品优于其它产品，专业的硬件钱包尤佳\n"),n("ol",[n("li",[t._v("保证使用原版系统和软件，从下载渠道要保证")]),n("li",[t._v("推荐使用 MacOS，最好不要用 windows，海外用户也可选择 ChromeOS")]),n("li",[t._v("使用浏览器的隐私模式进行敏感操作，避免让第三方扩展接触到帐户信息")])])]),n("li",[t._v("网站安全\n"),n("ol",[n("li",[t._v("认准"),n("code",{pre:!0},[t._v("HTTPS")]),t._v("绿色安全标识")]),n("li",[t._v("常用网站添加书签，尽量从书签访问。从搜索引擎进入网站时，要检查网址，因为你点击的可能是钓鱼网站的广告")])])]),n("li",[t._v("支付安全\n"),n("ul",[n("li",[t._v("向二维码地址转账时，要二次检查地址文本，因为二维码可能被掉包，而人不容易察觉")])])]),n("li",[t._v("钱包选择\n"),n("ul",[n("li",[t._v("使用 HD 钱包，不使用脑钱包，不使用私钥")])])])]),n("h2",[t._v("实用方案之手机分身")]),n("p",[t._v("优点：兼顾安全和方便，随身携带，主系统中毒不会威胁到分身系统")]),n("ul",[n("li",[t._v("一台具有分身功能的安卓手机，如小米手机（刷成国际版 MIUI 更好）")]),n("li",[t._v("创建分身系统，只安装钱包App")]),n("li",[t._v("启用指纹识别，与主系统使用不同手指，作为进入方式")]),n("li",[t._v("主系统中移除或关闭分身入口，如通知栏")]),n("li",[t._v("主系统不存放钱包，或只存放小额")])]),n("h2",[t._v("常见问题")]),n("p",[t._v("Q: 一定要选择开源钱包才安全吗？"),n("br"),t._v("\nA: 不，现在用户比较多的钱包如比特派、Coinomi 不是开源的")]),n("p",[t._v("Q: 硬件钱包是终极选择吗？"),n("br"),t._v("\nA: 不，如果遵守本指南，身边的手机可以是性价比更高的选择。如果一定要用电脑，硬件钱包是更好的选择")]),n("h2",[t._v("被盗事件")]),n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29855076"}},[t._v("我的比特币钱包被盗，损失了两个币")]),n("br"),n("a",{attrs:{href:"https://btc.com/1tPyUYNYQLCa7XjBFVKHLnwHoJECMVWEZ"}},[t._v("地址 1tPyUYNYQLCa7XjBFVKHLnwHoJECMVWEZ - BTC.com")]),n("br"),t._v("\n2017年9月16日和17日分两次转入，9月28日被全部转出，应该是 9.15 北京通知关闭交易所后，从交易所提币的新手")]),n("p",[n("a",{attrs:{href:"https://www.zhihu.com/question/40504007"}},[t._v("比特币在blockchain.info被盗，可以申诉找回吗？ 是否意味在线钱包并不安全？ - 知乎")]),n("a",{attrs:{href:"https://btc.com/1FPPy6mkU4HGZjvig8imkuDSzBzc4LgSET"}},[t._v("地址 1FPPy6mkU4HGZjvig8imkuDSzBzc4LgSET - BTC.com")]),n("br"),t._v("\n14 年开始用的老钱包，像是定投过，2015年1月15日 1.1 个币被转出")]),n("p",[n("a",{attrs:{href:"http://m.news.cctv.com/2017/12/23/ARTIjzJNEcnJC4Um4ReWcWqp171223.shtml"}},[t._v("河南警方破获全国首例比特币盗窃案_新闻_央视网(cctv.com)")]),n("br"),n("a",{attrs:{href:"http://henan.qq.com/a/20171125/015167.htm"}},[t._v("全国首例！油田居民百万比特币被盗_大豫网_腾讯网")]),n("br"),t._v("\n受害人使用电脑，被诱导安装了有后门的钱包软件")]),n("p",[n("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_14ecef0b70102x3lb.html"}},[t._v("Bitfinex12万比特币被盗 黑客攻击还是监守自盗？ - 财新网")])]),n("p",[n("img",{attrs:{src:"http://ww1.sinaimg.cn/large/4e5d3ea7ly1fo4hna7mmzj20ku0msn09.jpg",alt:"你知道交易平台被盗的历史吗？"}})])])}],At={},jt=Object(f["a"])(At,Tt,$t,!1,null,null,null),Dt=jt.exports;Bt.a.setOptions({renderer:new Bt.a.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1});var Et={name:"SafeGuides",props:{},data:function(){return{content:Bt()(Dt)}},computed:{},methods:{},mounted:function(){}},Mt=Et,Vt=(n("d441"),Object(f["a"])(Mt,xt,kt,!1,null,null,null)),Ot=Vt.exports;a["default"].use(v["a"]);/zh/.test(window.navigator.language||window.navigator.userLanguage);var zt=[{path:"/",name:"Home",components:{default:G,address:vt,handle:yt},meta:{keepAlive:!0,titles:{default:"BSV_比特币导航",address:"BSV 帐户查看器"}}},{path:"/safe-guides",name:"SafeGuides",component:Ot,meta:{title:"安全指南"}},{path:"*",redirect:"/"}],Lt=new v["a"]({mode:"history",routes:zt,scrollBehavior:function(t,e,n){if(!n)return{x:0,y:0};setTimeout(function(){window.scrollTo(n.x,n.y)},200)}});Lt.beforeEach(function(t,e,n){var s=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.title}),a=t.matched.slice().reverse().find(function(t){return t.meta&&t.meta.metaTags});if(s&&(document.title=s.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(function(t){return t.parentNode.removeChild(t)}),!a)return n();a.meta.metaTags.map(function(t){var e=document.createElement("meta");return Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])}),e.setAttribute("data-vue-router-controlled",""),e}).forEach(function(t){return document.head.appendChild(t)}),n()});var qt=Lt,Ut=n("a925"),Ht=n("363c"),Rt=n.n(Ht),Pt=n("9483");Object(Pt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["default"].config.productionTip=!1,a["default"].use(Ut["a"]),a["default"].use(Rt.a);var It={isZh:/zh/.test(window.navigator.language||window.navigator.userLanguage)},Ft={zh:{home:{title:"比特币导航",about:"关于",aboutTitle:"联系/捐赠开发者(BSV)",mobile:"电话&微信",email:"邮箱",sourceCode:"开放源码",searchPlaceholder:"BSV 地址，$handler"},address:{balance:"余额",latestTxs:"近 10 笔",sent:"发送",received:"接收",serviceUnavailable:"服务暂不可用",retry:"重试",direction:"方向",amount:"金额",time:"时间"},handle:{title:" 的 BSV 收款",copy:"复制",copied:"已复制",useLegacy:"使用旧版地址",failed:"查询失败，请检查 $handle 拼写是否正确"}},en:{home:{title:"BSV",about:"About",aboutTitle:"Donate to the developer (BSV)",mobile:"Mobile&Wechat",email:"Email",sourceCode:"Source Code",searchPlaceholder:"BSV address, $handler"},address:{balance:"Balance",latestTxs:"Latest 10 Transactions",sent:"Sent",received:"Received",serviceUnavailable:"Service Unavailable",retry:"Retry",direction:"Direction",amount:"Amount",time:"Time"},handle:{title:"'s BSV Receiving Address",copy:"copy",copied:"copied",useLegacy:"use Legacy Address",failed:"Query failed, please check the spelling of $handle"}}},Nt=new Ut["a"]({locale:It.isZh?"zh":"en",messages:Ft});new a["default"]({data:{shared:It},router:qt,i18n:Nt,render:function(t){return t(m)}}).$mount("#app")},7538:function(t,e,n){},"90e0":function(t,e,n){"use strict";var s=n("05ef"),a=n.n(s);a.a},"9b96":function(t,e,n){"use strict";var s=n("1dcb"),a=n.n(s);a.a},a9f1:function(t,e,n){"use strict";var s=n("3f8b"),a=n.n(s);a.a},b6e7:function(t,e,n){},b717:function(t,e,n){},c867:function(t,e,n){"use strict";var s=n("14ab"),a=n.n(s);a.a},d441:function(t,e,n){"use strict";var s=n("b717"),a=n.n(s);a.a},e6fc:function(t,e,n){"use strict";var s=n("7538"),a=n.n(s);a.a},f7e7:function(t,e,n){}});
//# sourceMappingURL=index-legacy.d3b10f89.js.map