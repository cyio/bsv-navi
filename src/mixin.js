import MobileDetect from 'mobile-detect'
let md = new MobileDetect(window.navigator.userAgent)
export default {
  methods: {
    debug (msg) {
      console.log('debug', msg)
    },
    go (path) {
      this.$router.push(path)
    },
    goBack () {
      this.$router.go(-1)
    },
    goHome() {
      window.location.assign(window.location.origin)
    },
    isHandle(keywords) {
      return /^\$/.test(keywords) || keywords.length < 20
    }
  },
  computed: {
    isMobile () {
      return md.mobile()
    },
    isSupportWebShare () {
      return navigator.share
    }
  }
}
