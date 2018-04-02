// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueClip from 'vue-clip'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueClip)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    parents: [],
    sitters: []
  },
  mutations: {
    addParent (state, p) {
      state.parents.push(p)
    },
    addChild (state, c) {
      state.parents[c.pIdx].children.push(c.child)
    },
    popChild (state, pIdx) {
      state.parents[pIdx].children.pop()
    },
    addSitter (state, s) {
      state.sitters.push(s)
    }
  },
  getters: {
    pIdx (state) {
      return state.parents.length - 1
    },
    sIdx (state) {
      return state.sitters.length - 1
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
