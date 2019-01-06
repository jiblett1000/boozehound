import Vue from "vue";
import Vuex from "vuex";
import menu from '@/components/menu';

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state: {
      menu: menu,
      pageTitle: 'Home',
    },
    mutations: {
      setMenu (state, data) {
        state.menu = data
    },
      setPageTitle (state, data) {
        state.pageTitle = data
    },

    },
    actions: {
      checkPageTitle ({commit, state}, path) {
        for (let k in state.menu) {
          if (state.menu[k].href === path.toLowerCase()) {
              commit('setPageTitle', state.menu[k].title);
              break;
          }
        }
      }
    },
  })
}

export default store;