import Vue from 'vue';
import VueRouter from 'vue-router';
import Init from "./site";
Init.start();
window.$ = window.jQuery = require("jquery");
Vue.use(VueRouter);
var Home = { template: '<div>This is Home</div>' };
var Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' };
var router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/bar/:id', name: 'bar', component: Bar },
        { path: '/hello', name: 'hello', component: require("./hello.vue"), props: { name: 'Can PERK', initialEnthusiasm: 1 } },
        { path: '/newTemplate', name: 'newTemplate', component: require("./create/newTemplate.vue") }
    ]
});
new Vue({
    router: router,
    template: "\n     <div class=\"navMenu\">\n        <ul class=\"mainMenu\">\n            <li>\n                <router-link :to=\"{ name: 'home' }\"><i class=\"fa fa-home\"></i>Home</router-link>\n            </li>\n            <li>\n                <router-link :to=\"{ name: 'hello' }\"><i class=\"fa fa-database\"></i>Data Sources</router-link>\n            </li>\n            <li>\n                <router-link :to=\"{ name: 'bar', params: { id: 123 } }\"><i class=\"fa fa-download\"></i>Downloads</router-link>\n            </li>\n            <li>\n                <router-link :to=\"{ name: 'newTemplate' }\"><i class=\"fa fa-plus\"></i>Create Template</router-link>\n            </li>\n        </ul>\n    </div>\n  "
}).$mount('.navMenu');
new Vue({
    router: router,
    template: "<div id=\"mainContainer\"> \n                    <transition name=\"fade\" mode=\"out-in\">\n                        <router-view class=\"view\"></router-view> \n                    </transition>\n               </div>"
}).$mount('#mainContainer');
//# sourceMappingURL=index.js.map