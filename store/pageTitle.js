const state = () => ({
    pageTitle: 'Home',
})
  
const mutations = {
  setPageTitle (state, data) {
      state.pageTitle = data
  },
}

const actions = {
  checkPageTitle ({commit, state}, path) {
    for (let k in state.menu) {
      if (state.menu[k].href === path) {
          commit('setPageTitle', state.menu[k].title)
          break
      }
    }
  }
}

export default {
  state,
  mutations,
  actions,
}

