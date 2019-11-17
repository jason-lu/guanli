import Vue from 'vue';
import router from './router';
import echarts from 'echarts';
import App from './app.vue';
import GLOBAL  from './pages/util/constants';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import store from './store/store.js';
<<<<<<< HEAD
// ----------------------------------------------------
import axios from 'axios';
axios.defaults.baseURL = process.env.NODE_ENV === 'production'? '/api/v1/':'http://47.104.128.89/api/v1/';
Vue.prototype.$http= axios;
// ----------------------------------------------------


Vue.use(VueRouter);
Vue.use(ElementUI) 

=======

Vue.use(ElementUI);
>>>>>>> bcb70f0b8287192d3b2b3cca717c5e10907a6b80
//引入全局echarts
Vue.prototype.$echarts = echarts;
//引入全局变量
// Vue.prototype.GLOBAL  = GLOBAL;

<<<<<<< HEAD
const routes = [
    { path: '/', component: FirstPage },
    { path: '/venue', component: Venue },//场馆展示
    { path: '/login', component: Login },
    { path: '/profile', component: Profile},//用户中心
    { path: '/activities', component: ActivityContainer},//活动列表页面
    { path: '/activityListDetail', component: activityListDetail},//活动详情
    { path: '/joinActivity', component: joinActivity},// 加入活动 即活动组队 
    { path: '/management/realtime', component: RealTime},
    { path: '/management/datadisplay', component: DataDisplay},
    { path: '/management/activityMa', component: activityMa},
    { path: '/homePages/navintroduce', component: navintroduce},
    { path: '/operationalVideo', component: operationalVideo},//作战视频
];

const router = new VueRouter({
    // mode: 'history', 
    routes // (缩写) 相当于 routes: routes
  })

=======
>>>>>>> bcb70f0b8287192d3b2b3cca717c5e10907a6b80
new Vue({
    el:'#root',
    render:h=>h(App),
    router
})