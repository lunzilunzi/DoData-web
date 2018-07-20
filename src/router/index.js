import Vue from 'vue'
import Router from 'vue-router'
import RunCatalogManage from 'src/components/system-setting/run-catalog-mange/RunCatalogManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/run-catalog-mange'
    },
    {
      path: '/run-catalog-mange',
      name: 'RunCatalogManage',
      component: RunCatalogManage
    }
  ]
})
