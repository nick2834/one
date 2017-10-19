// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
// import Axios from 'axios'
// import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
Vue.use(Mintui)
Vue.use(Vuex)
Vue.use(VueResource)
// Vue.use(Axios)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    isShowMask: false
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
