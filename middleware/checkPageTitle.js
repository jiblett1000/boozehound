export default function({store, route}) {
    store.dispatch('checkPageTitle', route.path);
}