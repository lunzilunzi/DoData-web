const state = {
  info: {
    name: '伦子'
  }
}

const getters = {
  isLogin: state => {
    return state.info.name !== undefined
  }
}

const mutations = {
  login (state) {
    // 变更状态
    state.info = {
      name: '伦子'
    }
  }
}

const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
}
