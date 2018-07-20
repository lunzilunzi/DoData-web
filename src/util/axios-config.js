import axios from 'axios'
// import store from './../store'

// 默认超时时间
axios.defaults.timeout = 1800000
// 启用全局 cookie
axios.defaults.withCredentials = true

// 通用头部信息设置

// // http请求拦截器
// http.interceptors.request.use(config => {
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// 响应拦截器
// http.interceptors.response.use(response => {
//   // console.log('http.interceptors: ', response)
//   return response
// }, error => {
//   // console.log('http.interceptors: ', error, error.response)
//   const response = error.response || {}
//   if (response.status === 401) {
//     // 未认证
//     store.dispatch('logout')
//   }
//   return Promise.reject(error)
// })

export default axios
