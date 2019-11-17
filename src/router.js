import Vue from 'vue';
import VueRouter from 'vue-router';
import Venue from './pages/Venue.vue';
import FirstPage from './pages/FirstPage.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import ActivityContainer from './pages/ActivityContainer.vue';
import activityListDetail from './pages/activity/activityListDetail.vue';
import joinActivity from './pages/activity/joinActivity.vue';
import RealTime from './pages/management/RealTime.vue';
import DataDisplay from './pages/management/DataDisplay.vue';
import activityMa from './pages/activityMa.vue';
import VenueMa from './pages/VenueMa.vue';
import navintroduce from './pages/homePages/NavIntroduce.vue';
// 作战视频
import operationalVideo from './pages/operationalVideo.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: FirstPage },
    { path: '/venue', component: Venue },//场馆展示
    { path: '/management/venueMa', component: VenueMa },//场馆展示
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },//用户中心
    { path: '/activities', component: ActivityContainer },//活动列表页面
    { path: '/activityListDetail', component: activityListDetail },//活动详情
    { path: '/joinActivity', component: joinActivity },// 加入活动 即活动组队 
    { path: '/management/realtime', component: RealTime },
    { path: '/management/datadisplay', component: DataDisplay },
    { path: '/management/activityMa', component: activityMa },
    { path: '/homePages/navintroduce', component: navintroduce },
    { path: '/operationalVideo', component: operationalVideo },//作战视频
];

const router = new VueRouter({
    // mode: 'history',
    routes // (缩写) 相当于 routes: routes
})

export default router; 