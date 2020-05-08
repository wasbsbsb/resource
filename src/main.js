import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import model from '@/store/index'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


import routes from './router/index'

Vue.config.productionTip = false


Vue.use(VueRouter);
Vue.use(Vuex)
Vue.use(ViewUI);



const router = new VueRouter({
  routes,
  mode: 'history'
})

const store = new Vuex.Store(
  model
)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


