export default function({store, route,}) {
    store.dispatch('pageTitle/get', route.path);
}