export const state = () => ({
  pageTitle: 'Home',
});

export const mutations = {
  set (state, data) {
    state.pageTitle = data
  },
};

export const actions = {
  get ({commit, rootState}, path) {
    const menu = rootState.menu.main;

    for (let k in menu) {
      if (menu[k].href === path.toLowerCase()) {
        commit('set', menu[k].title);
        break;
      }
    }
  },
}