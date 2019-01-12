export default function({store, route,}) {
    store.dispatch('pageTitle/set', route.path);
}