export const state = () => ({
  navSearch: undefined,
});

export const mutations = {
  set (state, data) {
    state.navSearch = data;
  },
};

export const actions = {
  set ({commit}, data) {
    commit('set', data);
  },
}