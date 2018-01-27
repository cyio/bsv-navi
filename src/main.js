// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
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
      title: 'BCH123'
    }
  },
  en: {
    home: {
      title: 'BCH123'
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
