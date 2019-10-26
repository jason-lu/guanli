import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './app.vue';
import Venue from './pages/Venue.vue';
import FirstPage from './pages/FirstPage.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import ActivityContainer from './pages/ActivityContainer.vue';
import store from './store/store.js';


Vue.use(VueRouter);

const routes = [
    { path: '/', component: FirstPage },
    { path: '/venue', component: Venue },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile},
    { path: '/activities', component: ActivityContainer}
];

const router = new VueRouter({
    // mode: 'history',
    routes // (缩写) 相当于 routes: routes
  })

new Vue({
    el:'#root',
    render:h=>h(App),
    router
})