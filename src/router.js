import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Address from '@/pages/Address'
import SafeGuides from '@/pages/SafeGuides'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { keepAlive: true, title: 'BCH123_比特币现金导航' }
  },
  {
    path: '/address/:id',
    name: 'Address',
    component: Address,
    meta: {
      title: '比特币现金帐户查看器_BCH123',
      metaTags: [
        // {
        // name: 'description',
        // content: 'The home page of our example app.'
        // },
        // {
        // property: 'og:description',
        // content: 'The home page of our example app.'
        // }
      ]
    }
  },
  {
    path: '/safe-guides',
    name: 'SafeGuides',
    component: SafeGuides,
    meta: {
      title: '数字货币安全保管使用指南_BCH123',
    }
  },
  { path: '*', redirect: '/' }
]

const router = new Router({
  mode: 'hash',
  routes,
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
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
  if (!nearestWithMeta) return next()
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })
    tag.setAttribute('data-vue-router-controlled', '')
    return tag
  })
    .forEach(tag => document.head.appendChild(tag))

  next()
})

export default router
