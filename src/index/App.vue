<template lang="pug">
#app(:class="{ handle: currentView === 'handle' }")
  .main-container
    header
      .layout-logo.link(@click="go({path: '/'})")
        span(v-if="!currentView && $route.name === 'Home'") {{$t('home.title')}}
        .logo-wrap(v-else)
      span.sub-page-title(v-if="currentView && $route.meta.titles[currentView]") > {{$route.meta.titles[currentView]}}
      .layout-nav
        // .link(v-if="$route.name === 'Home'" @click="go({path: '/safe-guides'})") 安全指南
        .link(v-if='isSupportWebShare', @click='share') 分享
    .content(v-if="currentView")
      router-view(:name="currentView")
    .content(v-else)
      keep-alive
        router-view(v-if='$route.meta.keepAlive')
      transition(name='fade', v-if='!$route.meta.keepAlive')
        router-view
    // .tip-wrap
      // .money-button(
        // data-to="1743"
        // data-amount="1"
        // data-currency="CNY"
        // data-label="打赏"
        // data-client-identifier="e675367a971e646a60120cdb3607f82f"
        // data-button-id="1552225294954"
        // data-type="tip"
      // )
    footer
      div @{{(new Date().getFullYear())}} © bsv.oaker.bid 
</div>
</template>

<script>
import mixin from '@/mixin.js'
export default {
  mixins: [mixin],
  name: 'app',
  components: {
  },
  data () {
    return {
      currentView: null,
    }
  },
  methods: {
    share () {
      navigator
        .share({
          title: 'bsv.oaker.bid',
          text: '',
          url: window.location.href
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error))
    }
  },
  watch: {
    '$route.query.q': function (newRoute, oldRoute) {
      // console.log(newRoute, oldRoute)
      let id = newRoute
      if (id) {
        this.currentView = this.isHandle(id) ? 'handle' : 'address'
      } else {
        this.currentView = null
        document.title = 'BSV_' + this.$t('home.title')
      }
    },
  },
  created () {
    let id = this.$route.query.q
    if (id) {
      this.currentView = this.isHandle(id) ? 'handle' : 'address'
    } else {
      this.currentView = null
    }
  }
}
</script>

<style lang="stylus">
// @import "@/assets/github-markdown.css"
::-webkit-scrollbar {
  width: 0.3em;
  height: 0.3em;
}
::-webkit-scrollbar-thumb {
  background: #AAAAAB;
}
::-webkit-scrollbar-track {
  background: #F1F1F1;
}
body {
  font-size: initial;
  scrollbar-face-color: #AAAAAB;
  scrollbar-track-color: #F1F1F1;
}
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-decoration-line: none;
  color: var(--theme);
}
a:active, a:hover {
  color: #e7aa00;
}
a:focus {
  // color: green;
  // font-weight: bold;
  border-bottom: 1px solid;
}
input,textarea{
  outline:0;
  -webkit-tap-highlight-color:transparent;
  -webkit-user-modify:read-write-plaintext-only
}

ul {
  // list-style: none;
  // padding: 0;
}

:root {
  --theme: #1d1d1d;
  --highlight: #f7d154;
}

body {
  margin: 0;
}

#app {
  // display: grid;
  // grid-template-rows: auto 1fr auto;
  // grid-template-columns: 100%;
  background-image: url('~@/assets/bsv-bg.jpg');
  background-blend-mode: soft-light;
  background-color: gray;
  min-height: 100vh;
  position: relative;
}

header {
  padding: 20px 0;
  display: flex;
}

footer {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 4.5rem;            /* Footer height */
  text-align: center;
  padding: 15px 0 10px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer a {
  color: #bbb6b6;
}

img, embed, iframe {
  max-width: 100%;
}

.expand-enter-active, .expand-leave-active {
  transition: all .3s ease;  /*padding: 10px;*/
  overflow: hidden;
}
.expand-enter, .expand-leave-active {
  height: 0;
  padding: 0 5px;
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

.link {
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in;
  -webkit-user-select: none;
}
.link:before {
  content: '';
  background-color: aliceblue;
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale(0.001, 0.001);
}
.link:focus {
  // outline: 0;
  // color: #fff;
}
.link:focus:before {
  animation: effect_dylan 0.8s ease-out;
}
@keyframes effect_dylan {
  50% {
    transform: scale(1.5, 1.5);
    opacity: 0;
  }
  99% {
    transform: scale(0.001, 0.001);
    opacity: 0;
  }
  100% {
    transform: scale(0.001, 0.001);
    opacity: 1;
  }
}

.btn {
  font-size: .12rem;
  background: #eee;
  color: #333;
  margin: .05rem;
  padding: .05rem;
  border: 1px solid #dedada;
  color: var(--theme);
}
  .layout-logo{
    display: flex;
    border-radius: 3px;
    // float: left;
    position: relative;
    font-size: 1.2rem;
    padding-left: 10px;
    // background: var(--theme);
    color: var(--theme);
    font-size: 32px;
    font-weight: 700;
  }
  .layout-nav{
    margin-right: 20px;
    float: right;
    display: flex;
    font-size: .9rem;
  }
  .layout-nav .link {
    margin-left: 10px;
    font-size: .9rem;
  }
  .main-container {
    background: #fff;
    min-height: 100vh;
    .content {
      padding-bottom: 4.5rem;    /* Footer height */
    }
  }
  .main-container-header {
    background: none;
    boxShadow: 0 2px 3px 2px rgba(0,0,0,.1);
    padding: 0;
    margin-top: 10px;
    height: 44px;
    line-height: @height;
  }
  .logo-wrap {
    width: 44px;
    height: @width;
    margin-right: 10px;
    background: url('../assets/favicon.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .sub-page-title {
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 700;
  }
  @media only screen and (min-width: 900px) {
    .main-container {
      width: 750px;
      margin: 0 auto;
      // border: 1px solid #efefef;
    }
  }
  @media only screen and (max-width: 450px) {
    .layout-logo {
      left: 0;
      font-size: 1.2rem;
    }
    .address-detail {
      align-items: center;
    }
  }
  .tip-wrap {
    position: absolute;
    bottom: 0;
    .money-button {
    }
  }
</style>

