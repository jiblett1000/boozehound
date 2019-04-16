import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _716b7b76 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _25ab1ea0 = () => interopDefault(import('../pages/help.vue' /* webpackChunkName: "pages/help" */))
const _f10ad460 = () => interopDefault(import('../pages/inventory/index.vue' /* webpackChunkName: "pages/inventory/index" */))
const _42eb6dcc = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3fcfe2a9 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _383e9e07 = () => interopDefault(import('../pages/orders/index.vue' /* webpackChunkName: "pages/orders/index" */))
const _28d97c8a = () => interopDefault(import('../pages/pos-items/index.vue' /* webpackChunkName: "pages/pos-items/index" */))
const _6049411a = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _3e3a5419 = () => interopDefault(import('../pages/recipes/index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _067bfcfc = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _480b0e30 = () => interopDefault(import('../pages/reports.vue' /* webpackChunkName: "pages/reports" */))
const _fb3461fc = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _0db127a7 = () => interopDefault(import('../pages/recipes/drinks/index.vue' /* webpackChunkName: "pages/recipes/drinks/index" */))
const _3bab12df = () => interopDefault(import('../pages/recipes/drinkware/index.vue' /* webpackChunkName: "pages/recipes/drinkware/index" */))
const _77d69560 = () => interopDefault(import('../pages/recipes/garnishes/index.vue' /* webpackChunkName: "pages/recipes/garnishes/index" */))
const _0ae2e7cf = () => interopDefault(import('../pages/recipes/drinks/_id.vue' /* webpackChunkName: "pages/recipes/drinks/_id" */))
const _664e4107 = () => interopDefault(import('../pages/recipes/drinkware/_id.vue' /* webpackChunkName: "pages/recipes/drinkware/_id" */))
const _50ca6fc8 = () => interopDefault(import('../pages/recipes/garnishes/_id.vue' /* webpackChunkName: "pages/recipes/garnishes/_id" */))
const _5d53cc38 = () => interopDefault(import('../pages/inventory/_id.vue' /* webpackChunkName: "pages/inventory/_id" */))
const _35cb13a2 = () => interopDefault(import('../pages/orders/_id.vue' /* webpackChunkName: "pages/orders/_id" */))
const _44ec76e3 = () => interopDefault(import('../pages/pos-items/_id.vue' /* webpackChunkName: "pages/pos-items/_id" */))
const _3f5eee7e = () => interopDefault(import('../pages/recipes/_id.vue' /* webpackChunkName: "pages/recipes/_id" */))
const _14e2a603 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/dashboard",
      component: _716b7b76,
      name: "dashboard"
    }, {
      path: "/help",
      component: _25ab1ea0,
      name: "help"
    }, {
      path: "/inventory",
      component: _f10ad460,
      name: "inventory"
    }, {
      path: "/login",
      component: _42eb6dcc,
      name: "login"
    }, {
      path: "/logout",
      component: _3fcfe2a9,
      name: "logout"
    }, {
      path: "/orders",
      component: _383e9e07,
      name: "orders"
    }, {
      path: "/pos-items",
      component: _28d97c8a,
      name: "pos-items"
    }, {
      path: "/profile",
      component: _6049411a,
      name: "profile"
    }, {
      path: "/recipes",
      component: _3e3a5419,
      name: "recipes"
    }, {
      path: "/register",
      component: _067bfcfc,
      name: "register"
    }, {
      path: "/reports",
      component: _480b0e30,
      name: "reports"
    }, {
      path: "/settings",
      component: _fb3461fc,
      name: "settings"
    }, {
      path: "/recipes/drinks",
      component: _0db127a7,
      name: "recipes-drinks"
    }, {
      path: "/recipes/drinkware",
      component: _3bab12df,
      name: "recipes-drinkware"
    }, {
      path: "/recipes/garnishes",
      component: _77d69560,
      name: "recipes-garnishes"
    }, {
      path: "/recipes/drinks/:id",
      component: _0ae2e7cf,
      name: "recipes-drinks-id"
    }, {
      path: "/recipes/drinkware/:id",
      component: _664e4107,
      name: "recipes-drinkware-id"
    }, {
      path: "/recipes/garnishes/:id",
      component: _50ca6fc8,
      name: "recipes-garnishes-id"
    }, {
      path: "/inventory/:id",
      component: _5d53cc38,
      name: "inventory-id"
    }, {
      path: "/orders/:id",
      component: _35cb13a2,
      name: "orders-id"
    }, {
      path: "/pos-items/:id?",
      component: _44ec76e3,
      name: "pos-items-id"
    }, {
      path: "/recipes/:id",
      component: _3f5eee7e,
      name: "recipes-id"
    }, {
      path: "/",
      component: _14e2a603,
      name: "index"
    }],

    fallback: false
  })
}
