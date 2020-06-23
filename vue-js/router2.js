// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Foo2 = { template: '<div>foo2</div>' }
const Bar2 = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes2 = [
    { path: '/foo2', component: Foo2 },
    { path: '/bar', component: Bar2 }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router2 = new VueRouter({
// router = new VueRouter({
    routes: routes2 // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app_router2 = new Vue({
    router: router2
}).$mount('#app-router-2')

// Now the app has started!