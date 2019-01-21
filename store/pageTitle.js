export const state = () => ({
  pageTitle: '',
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