export default function({store, route}) {
  const pageTitle = route.meta.reduce((title, meta) => meta.title, 0)

  store.dispatch('pageTitle/set', pageTitle);
}