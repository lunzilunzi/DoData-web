import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex配置
import store from './store'
// 引入axios配置和qs序列化模块
import axios from './util/axios-config'
import qs from 'qs'
// 初始化样式
import 'normalize.css'
// 引入iconfont图标
// import 'src/assets/iconfont/iconfont.css'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

