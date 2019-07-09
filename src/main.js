// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// 轮播插件
import Vueawesomeswiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
Vue.use(Vueawesomeswiper)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios // 将axios挂载到vue的原型链上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
