(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={index:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("5779")},"0249":function(t,e,n){"use strict";n("e30d")},"05ef":function(t,e,n){},"0cb1":function(t,e,n){"use strict";n("b6e7")},"0e55":function(t,e,n){},1:function(t,e){},1685:function(t,e,n){},2:function(t,e){},"22d7":function(t,e,n){"use strict";n("0e55")},3:function(t,e){},"3f8b":function(t,e,n){},4:function(t,e){},5779:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s,a=n("2b0e"),i=(n("1685"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{handle:"handle"===t.currentView},attrs:{id:"app"}},[n("div",{staticClass:"main-container"},[n("header",[n("div",{staticClass:"layout-logo link",on:{click:function(e){return t.go({path:"/"})}}},[t.currentView||"Home"!==t.$route.name?n("div",{staticClass:"logo-wrap"}):n("span",[t._v(t._s(t.$t("home.title")))])]),t.currentView&&t.$route.meta.titles[t.currentView]?n("span",{staticClass:"sub-page-title"},[t._v("> "+t._s(t.$route.meta.titles[t.currentView]))]):t._e(),n("div",{staticClass:"layout-nav"},[t.isSupportWebShare?n("div",{staticClass:"link",on:{click:t.share}},[t._v("分享")]):t._e()])]),t.currentView?n("div",{staticClass:"content"},[n("router-view",{attrs:{name:t.currentView}})],1):n("div",{staticClass:"content"},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1),n("footer",[n("div",[t._v("@"+t._s((new Date).getFullYear())+" © bsv.oaker.bid ")])])])])}),r=[],o=n("c6c6"),c=n.n(o),l=new c.a(window.navigator.userAgent),u={methods:{debug:function(t){console.log("debug",t)},go:function(t){this.$router.push(t)},goBack:function(){this.$router.go(-1)},goHome:function(){window.location.assign(window.location.origin)},isHandle:function(t){return/^\$/.test(t)||t.length<20}},computed:{isMobile:function(){return l.mobile()},isSupportWebShare:function(){return navigator.share}}},d={mixins:[u],name:"app",components:{},data:function(){return{currentView:null}},methods:{share:function(){navigator.share({title:"bsv.oaker.bid",text:"",url:window.location.href}).then((function(){return console.log("Successful share")})).catch((function(t){return console.log("Error sharing",t)}))}},watch:{"$route.query.q":function(t,e){var n=t;n?this.currentView=this.isHandle(n)?"handle":"address":(this.currentView=null,document.title="BSV_"+this.$t("home.title"))}},created:function(){var t=this.$route.query.q;this.currentView=t?this.isHandle(t)?"handle":"address":null}},h=d,f=(n("e6fc"),n("2877")),p=Object(f["a"])(h,i,r,!1,null,null,null),m=p.exports,b=(n("456d"),n("ac6a"),n("5df3"),n("1c4c"),n("7514"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-view"},[n("statistics"),n("search-box",{attrs:{submit:t.submit}}),n("websites")],1)},v=[],w=(n("96cf"),n("3b8d")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchbar-input-container"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.words,expression:"words",modifiers:{trim:!0}}],staticClass:"searchbar-input",attrs:{type:"search",name:"q",placeholder:t.$t("home.searchPlaceholder"),autocomplete:"off",spellcheck:"false"},domProps:{value:t.words},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t._submit(e)},change:function(e){t.errMsg=null},input:function(e){e.target.composing||(t.words=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("a",{staticClass:"icon link-icon btc-com",attrs:{href:"https://bsv.btc.com/"+t.words,title:"在 btc.com 查看",target:"_blank"}}),n("a",{staticClass:"icon link-icon wsc-com",attrs:{href:"https://whatsonchain.com/address/"+t.words,title:"在 whatsonchain 查看",target:"_blank"}}),n("icon",{staticClass:"search-icon",attrs:{type:"search",name:"search"},nativeOn:{click:function(e){return t._submit(e)}}}),t.displayErrMsg?n("div",{staticClass:"err-msg"},[t._v(t._s(t.displayErrMsg))]):t._e()],1)},y=[],x=n("e069"),C={name:"search-box",mixins:[u],components:{Icon:x["Icon"]},props:{keywords:{type:String,default:""},errors:{type:String,default:""},submit:{type:Function}},data:function(){return{words:this.keywords,errMsg:this.errors}},computed:{displayErrMsg:function(){return this.errors||this.errMsg}},methods:{_submit:function(){var t=this.words;t&&this.submit(t)}},mounted:function(){}},k=C,S=(n("ee41"),Object(f["a"])(k,_,y,!1,null,"26d35d32",null)),B=S.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"websites-view"},[n("table",t._l(Object.keys(t.sites),(function(e){return n("tr",[n("th",{on:{click:function(n){t.sites[e].expand=!t.sites[e].expand}}},[t._v(t._s(e))]),n("div",{staticClass:"tr-inner"},t._l(t.sites[e].content,(function(e,s){return n("td",[e.url.includes("http")?n("a",{staticClass:"link",attrs:{href:e.url,title:e.desc,target:"_blank"}},[t._v(t._s(e.title))]):n("a",{staticClass:"link",attrs:{tabindex:"0"},on:{click:function(n){return t.go({path:e.url})}}},[t._v(t._s(e.title))])])})),0)])})),0)])},D=[],M={"社区":{content:[{title:"Twetch",url:"https://twetch.app/"},{title:"巴比特论坛",url:"https://www.chainnode.com/forum/269"},{title:"Reddit",url:"https://www.reddit.com/r/bitcoincashSV/"}]},MetaID:{content:[{title:"ShowBuzz",url:"https://www.showbuzz.app/"},{title:"MetaBuzz",url:"https://buzz.metasv.com/metasv-buzz"},{title:"MetaPhotos",url:"https://metaphotos.top/"},{title:"MetaId Scan",url:"https://scan.metaid.io/"},{title:"MetaId 开发",url:"https://www.metaid101.com/"}]},"行情":{content:[{title:"加密货币市值",desc:"Cryptocurrency Market Capitalizations | CoinMarketCap",url:"https://coinmarketcap.com/zh/"}]},"资讯":{content:[{title:"CoinGeek",url:"https://coingeek.com/"}]},"浏览器":{content:[{title:"WhatsOnChain",url:"https://whatsonchain.com/"},{title:"Blockchair",url:"https://blockchair.com/bitcoin-sv"},{title:"欧科云链",url:"https://www.oklink.com/bsv"},{title:"BitcoinFiles",url:"https://bitcoinfiles.org/"},{title:"ViaBTC",url:"https://explorer.viabtc.com/bsv"},{title:"BTC.com",url:"https://bsv.btc.com"}]},"工具":{content:[{title:"Polynym",desc:"Simple BSV address resolution for HandCash, RelayX and PayMail handles.",url:"https://polynym.io/"},{title:"Bitpaste",desc:"On-chain text and file sharing",url:"https://www.bitpaste.app"},{title:"Bico Media",url:"https://bico.media/",desc:"Bitcoin sv blockchain files for content creators"}]},"数据":{content:[{title:"活跃地址",desc:"BSV,BCH,BTC 每日活跃地址数对比",url:"https://bitinfocharts.com/comparison/activeaddresses-btc-bch-bsv.html#log&6m"},{title:"交易量",desc:"BSV,BCH,BTC 每日交易数对比",url:"https://bitinfocharts.com/comparison/transactions-btc-bch-bsv.html#log&6m"},{title:"算力",desc:"BSV,BCH,BTC 每日算力对比",url:"https://bitinfocharts.com/comparison/hashrate-btc-bch-bsv.html#6m"},{title:"数据中心_QKL123",desc:"",url:"https://www.qkl123.com/project/bsv/data"},{title:"BSVData",desc:"An Honest Bitcoin Data Analyser",url:"https://bsvdata.com"},{title:"Bitcoin Scaling",url:" https://bitcoinscaling.io/stats"},{title:"BitcoinBlocks",desc:"live transactions on Bitcoin SV ",url:"https://bitcoinblocks.live/"},{title:"CoinDance",url:"https://coin.dance/"}]},"入门":{content:[{title:"白皮书中文",url:"http://www.8btc.com/wiki/bitcoin-a-peer-to-peer-electronic-cash-system"},{title:"比特币是什么",desc:"知乎最高票答案，中文界第一科普长文",url:"https://www.zhihu.com/question/22076666/answer/69638270"},{title:"Craig Wright",url:"https://craigwright.net/"},{title:"中本聪愿景",url:"https://bitcoinsv.io/zh/chinese-satoshis-vision/"},{title:"重生计划",desc:"比特币重生计划：重返创世纪 |「比特币重生计划：重返创世纪」Metanet.Press ",url:"https://metanet.press/rebirth/"}]},"钱包":{content:[{title:"最佳实践",desc:"钱包使用最佳实践",url:"https://aaron67.cc/2019/02/18/bitcoin-wallet-best-practice/"},{title:"安全指南",url:"/safe-guides"},{title:"HandCash",url:"http://www.handcash.io/"},{title:"Relayx",url:"https://relayx.io/"},{title:"Simply Cash",url:"https://simply.cash/"},{title:"ElectrumSV",desc:"The Bitcoin SV Desktop Wallet",url:"https://electrumsv.io/"},{title:"打点钱包",url:"https://www.ddpurse.com/"},{title:"Coinomi",url:"https://coinomi.com/"},{title:"Jaxx",url:"https://jaxx.io/"},{title:"Exodus",url:"https://www.exodus.io/"}]},"交易所":{content:[{title:"OKEx",url:"https://www.okex.com/"},{title:"火币",url:"https://www.huobi.com/"},{title:"Float SV",url:"https://www.floatsv.com/"}]},"考古":{content:[{title:"创世地址",url:"?q=1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"},{title:"创世交易",desc:"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks",url:"https://bsv.btc.com/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"}]}},z={name:"websites",mixins:[u],props:{},data:function(){return{sites:M}},computed:{},methods:{},mounted:function(){}},$=z,O=(n("0cb1"),Object(f["a"])($,T,D,!1,null,null,null)),V=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"statistics"},[t.market?n("ul",t._l(Object.keys(t.market),(function(e){return n("li",[n("span",{staticClass:"label"},[t._v(t._s(e)+": ")]),n("span",{staticClass:"value"},[t._v(t._s(t.market[e]||"-----"))])])})),0):t._e()])},E=[],A=(n("c5f6"),n("6612")),L=n.n(A);function I(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;return fetch(t,e).then((function(s){return 1===n?console.warn("fetch retry finished"):403===s.status?I(t,e,n-1):s})).catch((function(s){if(1===n)throw s;return I(t,e,n-1)}))}function P(){var t=(new Date).getHours();return t>=0&&t<=5}function R(t,e){return(t/e*100).toFixed(2)+"%"}function q(t,e){return L()(t/Math.pow(10,4)).format("0,000")+"万 / "+R(t,e)}var H={data:function(){return{market:{"最新价":null,"BSV/BTC":null,"BSV/BCH":null,"已供应":null,"火币USDT":null,"离岸人民币":null,"60日累计涨幅":null}}},methods:{getMaintainData:function(){var t=this,e="https://gitee.com/api/v5/gists/ba375uensivprto2c08xq70";fetch(e).then((function(e){return e.json().then((function(e){var n=JSON.parse(e.files["main.json"].content),s=(Number(new Date)-Number(new Date(e.updated_at)))/1e3/60;if(s>5)console.warn("delayMinute: ",s);else{var a=n.data,i=(a.percent_change_24h,a.circulating_supply),r=a.max_supply,o=a.change_of_60days;t.market={"最新价":"￥".concat(Math.round(a.price)),"BSV/BTC":a.bsv_btc.toFixed(4),"BSV/BCH":a.bsv_bch.toFixed(4),"已供应":q(i,r),"火币USDT":a.usdt_otc_price,"离岸人民币":a.usd_otc_price.toFixed(2),"60日累计涨幅":null!==o&&"".concat(o>0?"+":"").concat(Math.round(100*o),"%")}}}))}))}},computed:{},beforeMount:function(){var t=this;this.getMaintainData(),s=setInterval((function(){t.getMaintainData()}),18e4)},beforeDestory:function(){clearInterval(s)}},F=H,U=(n("aee9"),Object(f["a"])(F,j,E,!1,null,"71e6a1bd",null)),N=U.exports,W={name:"Home",mixins:[u],components:{SearchBox:B,Websites:V,Statistics:N,Layout:x["Layout"],Header:x["Header"],Menu:x["Menu"],MenuItem:x["MenuItem"],Breadcrumb:x["Breadcrumb"],BreadcrumbItem:x["BreadcrumbItem"],Card:x["Card"],Footer:x["Footer"],Icon:x["Icon"]},data:function(){return{currentView:null}},methods:{submit:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=e.trim(),0===e.indexOf("bitcoincash:")&&(e=e.substr(12)),this.go({path:"?q=".concat(e)});case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},computed:{},filters:{},created:function(){},mounted:function(){}},J=W,Y=(n("90e0"),Object(f["a"])(J,g,v,!1,null,null,null)),G=Y.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"address-view"},[n("search-box",{attrs:{keywords:t.address,errors:t.addressErrors,submit:t.submit}}),n("div",{staticClass:"address-detail"},[n("div",{staticClass:"row"},[n("div",{staticClass:"address-balance"},[n("div",[n("div",{staticClass:"label"},[t._v(t._s(t.$t("address.balance")))]),n("div",{staticClass:"fiat-row"},[n("div",[n("span",{staticClass:"value"},[t._v(t._s(t.addressFiatBalance||"-----"))]),n("span",{staticClass:"unit"},[t._v(t._s(t.fiat.toUpperCase()))])])]),n("div",{staticClass:"balance-row"},[n("span",{staticClass:"value"},[t._v(t._s(t.addressDetail?t.addressBalance:"-----"))]),n("span",{staticClass:"unit"},[t._v("BSV")])])]),t.showLoading||t.showErrorMsg||null!==t.addressDetail?t._e():n("div",[t._m(0)])]),t.qrUrl?n("div",{staticClass:"qr-wrap"},[n("img",{attrs:{src:t.qrUrl}})]):t._e()]),t.showErrorMsg?n("div",{staticClass:"error"},[t._v(t._s(t.$t("address.serviceUnavailable"))),n("Button",{on:{click:function(e){return t.setAddressData(t.address)}}},[t._v(t._s(t.$t("address.retry")))]),n("span",[t._v("或前往")]),n("a",{attrs:{href:t.blockExplorerUrl+t.address,title:"在 btc.com 查看",target:"_blank"}},[t._v(" BTC.com ")]),n("span",[t._v("查看")])],1):t._e(),n("div",{staticClass:"address-tx"},[n("v-table",{staticStyle:{width:"auto"},attrs:{"is-vertical-resize":"","vertical-resize-offset":60,"is-horizontal-resize":"","multiple-sort":!1,"min-height":399,"even-bg-color":"#f2f2f2","title-rows":t.tableConfig.titleRows,columns:t.tableConfig.columns,"table-data":t.tableData,"row-hover-color":"#eee","row-click-color":"#edf7ff","paging-index":(t.pageIndex-1)*t.pageSize,"is-loading":t.tableConfig.isLoading},on:{"sort-change":t.sortChange}}),n("div",{staticClass:"mt20 mb20 bold"}),t.addressTxs&&t.addressTxs.total_count?n("v-pagination",{attrs:{total:t.addressTxs.total_count,"page-size":t.pageSize,layout:["total","prev","pager","next","jumper"]},on:{"page-change":t.pageChange,"page-size-change":t.pageSizeChange}}):t._e()],1)])],1)},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v("账户暂无数据"),n("br"),t._v("未使用过的地址")])}],K=(n("55dd"),n("75fc")),X=(n("a481"),n("34bf"),n("e5fb")),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal-mask",attrs:{transition:"modal"}},[n("div",{staticClass:"modal-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"_modal-header"},[n("div",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.title||t.$t("home.aboutTitle")))]),n("div",{staticClass:"modal-close",on:{click:t.close}},[n("span"),n("span")])]),n("div",{staticClass:"modal-body"},[t._t("content",[t._v("default body")])],2)])])])},et=[],nt={name:"modal",props:{title:{type:String,default:""},show:!1},data:function(){return{}},watch:{show:function(t){var e=window.document.querySelectorAll("body")[0];e.classList.toggle("modal-open")}},methods:{close:function(){this.$emit("close")}},mounted:function(){}},st=nt,at=(n("22d7"),Object(f["a"])(st,tt,et,!1,null,null,null)),it=at.exports,rt=n("88fb"),ot=n.n(rt),ct=n("340b"),lt=n("d055"),ut=n.n(lt),dt="https://cnbeta.leanapp.cn/api/proxy?url=",ht={name:"Address",mixins:[u],components:{Modal:it,SearchBox:B,VTable:X["VTable"],VPagination:X["VPagination"],Button:x["Button"]},data:function(){var t=this;return{address:null,addressDetail:null,addressTxs:null,showLoading:!0,showErrorMsg:!1,addressErrors:null,qrUrl:null,prices:{cny:null,usd:null},pageIndex:1,pageSize:10,blockExplorerUrl:"https://bsv.btc.com/",tableConfig:{multipleSort:!1,tableData:[],columns:[{field:"title",width:70,columnAlign:"center",isFrozen:!0},{field:"amount",width:110,columnAlign:"left",isFrozen:!0,formatter:function(t,e,n){return'<span class="tx-amount '.concat(Number(t.amount)>=0?"in":"out",'">').concat(t.amount,"</span>")}},{field:"time",width:170,columnAlign:"center",isFrozen:!0},{field:"id",width:70,columnAlign:"center",isFrozen:!0,formatter:function(e,n,s){return"<a href=".concat(t.blockExplorerUrl+e.id,' target="_blank" title="可复制完整交易 ID 或点击前往 BTC.com 查看">').concat(e.id,"</a>")}}],titleRows:[[{fields:["title"],title:this.$t("address.direction"),titleAlign:"center"},{fields:["amount"],title:this.$t("address.amount"),titleAlign:"center"},{fields:["time"],title:this.$t("address.time"),titleAlign:"center"},{fields:["id"],title:"ID",titleAlign:"center"}]],isLoading:!0}}},methods:{submit:function(t){console.log("trigger submit");var e=t.trim();if(this.isHandle(e))this.go({path:"/?q=".concat(e)});else try{ot.a.isLegacyAddress(t)&&(this.address=t,this.setAddressData(t))}catch(n){this.addressErrors="地址格式不正确",this.addressDetail=this.addressTxs=this.qrUrl=null,this.showLoading=!0,console.error(n)}},setAddressData:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return document.title="帐户 "+this.address,this.showLoading=!0,this.showErrorMsg=!1,this.addressDetail=this.addressTxs=this.addressErrors=null,t.next=6,ut.a.toDataURL(e);case 6:this.qrUrl=t.sent,this.getAddressDetail(e).then(function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.addressDetail=e,n.getTableData(),n.showLoading=!1,Object.keys(n.addressDetail).length||(n.showErrorMsg=!0);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),checkSleep:function(){if(P()){if(window.confirm("应用休眠中，服务时间 6:00 - 24:00，点击确定前往第三方网站查看 ".concat(this.blockExplorerUrl))){var t=this.blockExplorerUrl+this.address;window.location.replace(t)}else window.history.back();throw new Error("")}},getAddressDetail:function(t){dt.indexOf("lean")>-1&&this.checkSleep();var e="".concat(dt,"https://bsv-chain.api.btc.com/v3/address/").concat(t);return I(e).then((function(t){return t.json().then((function(t){return t.headers?t.data.data:t.data}))}))},getAddressTxs:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.pageIndex,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.pageSize,s="".concat(dt).concat(encodeURIComponent("https://bsv-chain.api.btc.com/v3/address/".concat(t,"/tx?page=").concat(e,"&pagesize=").concat(n,"&verbose=1")));return new Promise((function(t,e){I(s).then((function(e){e.json().then((function(e){t(e.headers?e.data.data:e.data)}))}))}))},getPricesOld:function(){var t="https://api.coingecko.com/api/v3/coins/markets?vs_currency=cny&ids=bitcoin-cash-sv";return fetch(t).then((function(t){return t.json().then((function(t){return t[0]})).catch((function(t){return console.error(t)}))}))},getPrices:function(){var t="https://api.cryptonator.com/api/full/bsv-usd";return fetch(t).then((function(t){return t.json().then((function(t){return t.ticker.price})).catch((function(t){return console.error(t)}))}))},getTableData:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.tableConfig.isLoading=!0,this.addressTxs?this.addressTxs.list[(this.pageIndex-1)*this.pageSize]?this.tableConfig.isLoading=!1:this.getAddressTxs(this.address).then((function(t){var n,s=t;e.addressTxs.list[(e.pageIndex-1)*e.pageSize]=null,(n=e.addressTxs.list).splice.apply(n,[(e.pageIndex-1)*e.pageSize,0].concat(Object(K["a"])(s.list))),e.tableConfig.isLoading=!1})):this.getAddressTxs(this.address).then((function(t){e.addressTxs=t,e.tableConfig.isLoading=!1}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),pageChange:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.pageIndex=e,this.getTableData();case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),pageSizeChange:function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.pageIndex=1,this.pageSize=e,this.addressTxs=null,this.getTableData();case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),sortChange:function(t){t.height.length>0&&this.tableConfig.tableData.sort((function(e,n){return"asc"===t.height?e.height-n.height:"desc"===t.height?n.height-e.height:0}))},timeFormat:function(t,e){return Object(ct["format"])(new Date(1e3*t),"YYYY-MM-DD HH:mm:ss")}},computed:{locale:function(){return this.$root.$data.shared.isZh?"zh_CN":"en_US"},fiat:function(){return this.$root.$data.shared.isZh?"cny":"usd"},addressBalance:function(){return this.addressDetail.balance/Math.pow(10,8)},tableData:function(){var t=this;return this.addressTxs?this.addressTxs.list.map((function(e){return e&&{title:e.balance_diff>0?t.$t("address.received"):t.$t("address.sent"),amount:(e.balance_diff>0?"+":"")+Number(e.balance_diff/Math.pow(10,8)).toFixed(8).replace(/\.?0+$/,""),time:t.timeFormat(e.block_time||e.created_at),id:e.hash}})).slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize).filter((function(t){return!!t})):[]},addressFiatBalance:function(){return this.addressDetail&&this.prices.usd&&L()(this.addressBalance*this.prices[this.fiat]).format("0,0.00")}},filters:{format:function(t,e){return"btc"===e?L()(t*Math.pow(10,6)).format("0,000,000.00"):L()(t).format("0,0.00")}},watch:{"$route.query.q":function(t,e){console.log({newRoute:t,oldRoute:e});var n=t;!n||this.address&&t===e||(this.address=n,this.submit(this.address))}},created:function(){var t=this,e=this.$route.query.q;e&&!this.address&&(this.address=e,this.submit(this.address)),this.getPrices().then((function(e){t.prices.cny=6.3*e,t.prices.usd=e}))},mounted:function(){}},ft=ht,pt=(n("a9f1"),Object(f["a"])(ft,Z,Q,!1,null,null,null)),mt=pt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"safe-guides-view"},[n("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.content)}})])},gt=[],vt=n("0e54"),wt=n.n(vt);wt.a.setOptions({renderer:new wt.a.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1});var _t={name:"SafeGuides",props:{},data:function(){return{content:null}},computed:{},methods:{},mounted:function(){var t=this;fetch("/safe-guides.md").then((function(t){return t.text()})).then((function(e){console.log(e),t.content=wt()(e)}))}},yt=_t,xt=(n("0249"),n("a8b4"),Object(f["a"])(yt,bt,gt,!1,null,null,null)),Ct=xt.exports;a["default"].use(b["a"]);/zh/.test(window.navigator.language||window.navigator.userLanguage);var kt=[{path:"/",name:"Home",components:{default:G,address:mt},meta:{keepAlive:!0,titles:{default:"比特币导航_BSV",address:"BSV 帐户查看器"}}},{path:"/safe-guides",name:"SafeGuides",component:Ct,meta:{title:"安全指南"}},{path:"*",redirect:"/"}],St=new b["a"]({mode:"history",routes:kt,scrollBehavior:function(t,e,n){if(!n)return{x:0,y:0};setTimeout((function(){window.scrollTo(n.x,n.y)}),200)}});St.beforeEach((function(t,e,n){var s=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),a=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(s&&(document.title=s.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!a)return n();a.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),n()}));var Bt=St,Tt=n("a925"),Dt=n("363c"),Mt=n.n(Dt),zt=n("9483");Object(zt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["default"].config.productionTip=!1,a["default"].use(Tt["a"]),a["default"].use(Mt.a);var $t={isZh:/zh/.test(window.navigator.language||window.navigator.userLanguage)},Ot={zh:{home:{title:"比特币导航",about:"关于",aboutTitle:"联系/捐赠开发者(BSV)",mobile:"电话&微信",email:"邮箱",sourceCode:"开放源码",searchPlaceholder:"BSV 地址"},address:{balance:"余额",latestTxs:"近 10 笔",sent:"发送",received:"接收",serviceUnavailable:"服务暂不可用",retry:"重试",direction:"方向",amount:"金额",time:"时间"},handle:{title:" 的 BSV 收款",copy:"复制",copied:"已复制",useLegacy:"使用旧版地址",failed:"查询失败，请检查 $handle 拼写是否正确"}},en:{home:{title:"BSV",about:"About",aboutTitle:"Donate to the developer (BSV)",mobile:"Mobile&Wechat",email:"Email",sourceCode:"Source Code",searchPlaceholder:"BSV address"},address:{balance:"Balance",latestTxs:"Latest 10 Transactions",sent:"Sent",received:"Received",serviceUnavailable:"Service Unavailable",retry:"Retry",direction:"Direction",amount:"Amount",time:"Time"},handle:{title:"'s BSV Receiving Address",copy:"copy",copied:"copied",useLegacy:"use Legacy Address",failed:"Query failed, please check the spelling of $handle"}}},Vt=new Tt["a"]({locale:$t.isZh?"zh":"en",messages:Ot});new a["default"]({data:{shared:$t},router:Bt,i18n:Vt,render:function(t){return t(m)}}).$mount("#app")},"5a25":function(t,e,n){},"73d1":function(t,e,n){},7538:function(t,e,n){},"90e0":function(t,e,n){"use strict";n("05ef")},a255:function(t,e,n){},a8b4:function(t,e,n){"use strict";n("5a25")},a9f1:function(t,e,n){"use strict";n("3f8b")},aee9:function(t,e,n){"use strict";n("a255")},b6e7:function(t,e,n){},e30d:function(t,e,n){},e6fc:function(t,e,n){"use strict";n("7538")},ee41:function(t,e,n){"use strict";n("73d1")}});
//# sourceMappingURL=index-legacy.eccde2d2.js.map