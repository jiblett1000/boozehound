export const state = () => ({
  contextMenu: [],
});

export const mutations = {
  set (state, data) {
    state.contextMenu = data;
  },
};

export const actions = {
  set ({commit}, data) {
    commit('set', data);
  },
};