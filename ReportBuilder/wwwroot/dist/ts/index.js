import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
var Home = { template: '<div>This is Home</div>' };
var Foo = { template: '<div>This is Foo</div>' };
var Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' };
var router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/foo', name: 'foo', component: Foo },
        { path: '/bar/:id', name: 'bar', component: Bar }
    ]
});
new Vue({
    router: router,
    template: "\n    <div id=\"app\">\n      <ul>\n        <li><router-link :to=\"{ name: 'home' }\">home</router-link></li>\n        <li><router-link :to=\"{ name: 'foo' }\">foo</router-link></li>\n        <li><router-link :to=\"{ name: 'bar', params: { id: 123 }}\">bar</router-link></li>\n      </ul>\n      <router-view class=\"view\"></router-view>\n    </div>\n  "
}).$mount('#mainContainer');
//# sourceMappingURL=index.js.map