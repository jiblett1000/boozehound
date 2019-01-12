export default function ({store, route}) {
  const contextMenu = route.meta.reduce((contextMenu, meta) => meta.contextMenu, 0)
  store.dispatch('contextMenu/set', contextMenu);
}