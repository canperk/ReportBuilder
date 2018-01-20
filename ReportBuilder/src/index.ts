import Vue from 'vue'
import VueRouter from 'vue-router'
import Init from "./site"
Init.start();
window.$ = window.jQuery = require("jquery");
Vue.use(VueRouter)
const Home = { template: '<div>This is Home</div>' }
const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/bar/:id', name: 'bar', component: Bar },
        { path: '/hello', name: 'hello', component: require("./hello.vue"), props: { name: 'Can PERK', initialEnthusiasm: 1 } },
        { path: '/newTemplate', name: 'newTemplate', component: require("./create/newTemplate.vue") }
    ]
})
new Vue({
    router,
    template: `
     <div class="navMenu">
        <ul class="mainMenu">
            <li>
                <router-link :to="{ name: 'home' }"><i class="fa fa-pencil-square-o"></i>Templates</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'hello' }"><i class="fa fa-database"></i>Data Sources</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'bar', params: { id: 123 } }"><i class="fa fa-download"></i>Downloads</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'newTemplate' }"><i class="fa fa-wrench"></i>Preferences</router-link>
            </li>
        </ul>
    </div>
  `
}).$mount('.navMenu');
new Vue({
    router,
    template: `<div id="mainContainer"> 
                    <transition name="fade" mode="out-in">
                        <router-view class="view"></router-view> 
                    </transition>
               </div>`
}).$mount('#mainContainer');