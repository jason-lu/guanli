import Vue from 'vue';
import VueRouter from 'vue-router';
import echarts from 'echarts';
import App from './app.vue';
import Venue from './pages/Venue.vue';
import FirstPage from './pages/FirstPage.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import ActivityContainer from './pages/ActivityContainer.vue';
import activityListDetail from './pages/activity/activityListDetail.vue';
import joinActivity from './pages/activity/joinActivity.vue';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import store from './store/store.js';



Vue.use(VueRouter);
Vue.use(ElementUI)


Vue.prototype.$echarts = echarts

const routes = [
    { path: '/', component: FirstPage },
    { path: '/venue', component: Venue },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile},
    { path: '/activities', component: ActivityContainer},
    { path: '/activityListDetail', component: activityListDetail},//活动详情
    { path: '/joinActivity', component: joinActivity}// 加入活动 即活动组队 
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