import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _9da4d560 = () => interopDefault(import('../src/client/pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _16465e96 = () => interopDefault(import('../src/client/pages/help.vue' /* webpackChunkName: "pages/help" */))
const _2638349b = () => interopDefault(import('../src/client/pages/inventory/index.vue' /* webpackChunkName: "pages/inventory/index" */))
const _14e24cb6 = () => interopDefault(import('../src/client/pages/login.vue' /* webpackChunkName: "pages/login" */))
const _095d637e = () => interopDefault(import('../src/client/pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _053b6b1c = () => interopDefault(import('../src/client/pages/orders/index.vue' /* webpackChunkName: "pages/orders/index" */))
const _eb5e3ef4 = () => interopDefault(import('../src/client/pages/pos-items/index.vue' /* webpackChunkName: "pages/pos-items/index" */))
const _6f284a36 = () => interopDefault(import('../src/client/pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _10d729a4 = () => interopDefault(import('../src/client/pages/recipes/index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _ce1abdd2 = () => interopDefault(import('../src/client/pages/register.vue' /* webpackChunkName: "pages/register" */))
const _9fa4b00a = () => interopDefault(import('../src/client/pages/reports.vue' /* webpackChunkName: "pages/reports" */))
const _1e966e97 = () => interopDefault(import('../src/client/pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _2ff0a1c3 = () => interopDefault(import('../src/client/pages/inventory/_id.vue' /* webpackChunkName: "pages/inventory/_id" */))
const _37a18484 = () => interopDefault(import('../src/client/pages/orders/_id.vue' /* webpackChunkName: "pages/orders/_id" */))
const _17894c6e = () => interopDefault(import('../src/client/pages/pos-items/_id.vue' /* webpackChunkName: "pages/pos-items/_id" */))
const _42a975e8 = () => interopDefault(import('../src/client/pages/recipes/_id.vue' /* webpackChunkName: "pages/recipes/_id" */))
const _2be7368e = () => interopDefault(import('../src/client/pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
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
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/dashboard",
      component: _9da4d560,
      name: "dashboard"
    }, {
      path: "/help",
      component: _16465e96,
      name: "help"
    }, {
      path: "/inventory",
      component: _2638349b,
      name: "inventory"
    }, {
      path: "/login",
      component: _14e24cb6,
      name: "login"
    }, {
      path: "/logout",
      component: _095d637e,
      name: "logout"
    }, {
      path: "/orders",
      component: _053b6b1c,
      name: "orders"
    }, {
      path: "/pos-items",
      component: _eb5e3ef4,
      name: "pos-items"
    }, {
      path: "/profile",
      component: _6f284a36,
      name: "profile"
    }, {
      path: "/recipes",
      component: _10d729a4,
      name: "recipes"
    }, {
      path: "/register",
      component: _ce1abdd2,
      name: "register"
    }, {
      path: "/reports",
      component: _9fa4b00a,
      name: "reports"
    }, {
      path: "/settings",
      component: _1e966e97,
      name: "settings"
    }, {
      path: "/inventory/:id",
      component: _2ff0a1c3,
      name: "inventory-id"
    }, {
      path: "/orders/:id",
      component: _37a18484,
      name: "orders-id"
    }, {
      path: "/pos-items/:id?",
      component: _17894c6e,
      name: "pos-items-id"
    }, {
      path: "/recipes/:id",
      component: _42a975e8,
      name: "recipes-id"
    }, {
      path: "/",
      component: _2be7368e,
      name: "index"
    }],

    fallback: false
  })
}
