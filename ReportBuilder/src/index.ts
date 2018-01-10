﻿import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = { template: '<div>This is Home</div>' }
const Foo = { template: '<div>This is Foo</div>' }
const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/foo', name: 'foo', component: Foo },
        { path: '/bar/:id', name: 'bar', component: Bar },
        { path: '/newTemplate', name: 'hello', component: require("./hello.vue"), props: { name: 'Can PERK', initialEnthusiasm: 2 } },
        { path: '/newTemplate', name: 'newTemplate', component: require("./newTemplate.vue"), props: { title: 'Create Template' } }
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
                <router-link :to="{ name: 'foo' }"><i class="fa fa-database"></i>Data Sources</router-link>
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
                    <router-view class="view"></router-view> 
               </div>`
}).$mount('#mainContainer');