const Foo3 = { template: '<div>foo3</div>' }
const Bar3 = { template: '<div>bar</div>' }

const routes3 = [
    { path: '/foo', component: Foo3 },
    { path: '/bar', component: Bar3 }
]

const router3 = new VueRouter({
    routes: routes3
})

const app_router3 = new Vue({
    router: router3
}).$mount('#app-router-3')

// Now the app has started!