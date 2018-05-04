import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Address from '@/pages/Address'
import SafeGuides from '@/pages/SafeGuides'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    // console.log('scroll', to.path, from.path, savedPosition)
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(savedPosition.x, savedPosition.y)
        // console.log('top', window.document.body.scrollTop)
        // return savedPosition
      }, 200)
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { keepAlive: true }
    },
    {
      path: '/address/:id',
      name: 'Address',
      component: Address
    },
    {
      path: '/safe-guides',
      name: 'SafeGuides',
      component: SafeGuides
    },
    { path: '*', redirect: '/' }
  ]
})
