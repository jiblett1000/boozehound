export const state = () => ({
  pageTitle: 'Home',
});

export const mutations = {
  set (state, data) {
    state.pageTitle = data
  },
};

export const actions = {
  set ({commit}, title) {
      commit('set', title);
  },
};