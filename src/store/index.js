import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  // 左侧导航容器伸缩状态
  containerShrinkStatus: false,
  containerStyle: {}
}

const getters = {}

const mutations = {
  // 更改左侧导航容器伸缩状态
  changeContainerShrinkStatus (state) {
    state.containerShrinkStatus = !state.containerShrinkStatus
  },
  // 设置导航栏长和宽
  changeContainerStyle (state, {width}) {
    state.containerStyle = {width}
  }
}

const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  strict: debug
})
