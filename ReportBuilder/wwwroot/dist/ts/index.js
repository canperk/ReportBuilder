import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
var Home = { template: '<div>This is Home</div>' };
var Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' };
var router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/bar/:id', name: 'bar', component: Bar },
        { path: '/hello', name: 'hello', component: require("./hello.vue"), props: { name: 'Can PERK', initialEnthusiasm: 2 } },
        { path: '/newTemplate', name: 'newTemplate', component: require("./newTemplate.vue"), props: { title: 'Create Template' } }
    ]
});
new Vue({
    router: router,
    template: "\n     <div class=\"navMenu\">\n        <ul class=\"mainMenu\">\n            <li>\n                <router-link :to=\"{ name: 'home' }\"><i class=\"fa fa-pencil-square-o\"></i>Templates</router-link>\n            </li>\n            <li>\n                <router-link :to=\"{ name: 'hello' }\"><i class=\"fa fa-database\"></i>Data Sources</router-link>\n            </li>\n            <li>\n                <router-link :to=\"{ name: 'bar', params: { id: 123 } }\"><i class=\"fa fa-download\"></i>Downloads</router-link>\n            </li>\n            <li>\n                <router-link :to=\"{ name: 'newTemplate' }\"><i class=\"fa fa-wrench\"></i>Preferences</router-link>\n            </li>\n        </ul>\n    </div>\n  "
}).$mount('.navMenu');
new Vue({
    router: router,
    template: "<div id=\"mainContainer\"> \n                    <router-view class=\"view\"></router-view> \n               </div>"
}).$mount('#mainContainer');
//# sourceMappingURL=index.js.map