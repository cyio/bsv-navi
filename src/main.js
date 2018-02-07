// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css'
import 'iview/dist/styles/iview.css'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import 'vue-awesome/icons/search'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.component('icon', Icon)

const shared = {
  isZh: /zh/.test(window.navigator.language)
}

const translations = {
  zh: {
    home: {
      title: 'BCH123',
      about: '关于',
      aboutTitle: '联系/捐赠开发者(BCH)',
      mobile: '电话&微信',
      email: '邮箱',
      sourceCode: '开放源码',
      searchPlaceholder: 'BCH 地址，支持新旧格式...',
      genesisAddr: '创世地址'
    },
    address: {
      balance: '余额',
      latestTxs: '近 10 笔',
      sent: '发送',
      received: '接收',
      loading: '载入中...',
      serviceUnavailable: '服务暂不可用',
      retry: '重试'
    }
  },
  en: {
    home: {
      title: 'BCH123',
      about: 'About',
      aboutTitle: 'Donate to the developer (BCH)',
      mobile: 'Mobile&Wechat',
      email: 'Email',
      sourceCode: 'Source Code',
      searchPlaceholder: 'BCH address, support legacy / cashAddress',
      genesisAddr: 'Genesis Address'
    },
    address: {
      balance: 'Balance',
      latestTxs: 'Latest 10 Transactions',
      sent: 'Sent发送',
      received: 'Received',
      loading: 'loading...',
      serviceUnavailable: 'Service Unavailable',
      retry: 'Retry'
    }
  }
}

const i18n = new VueI18n({
  locale: shared.isZh ? 'zh' : 'en',
  messages: translations
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    shared
  },
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
