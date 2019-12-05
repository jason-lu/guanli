import Vue from 'vue';
import VueRouter from 'vue-router';
import Venue from './pages/venue/Venue.vue';
import VenueContainer from './pages/venue/VenueContainer.vue';
import FirstPage from './pages/FirstPage.vue';
import Login from './pages/login/Login.vue';
import Register from './pages/login/Register.vue';
import ResetPasswd from './pages/login/ResetPasswd.vue';
import Profile from './pages/profile/Profile.vue';
import Zone from './pages/profile/Zone.vue';
import Personal from './pages/profile/Personal.vue';
import ActivityContainer from './pages/ActivityContainer.vue';
import activityListDetail from './pages/activity/activityListDetail.vue';
import joinActivity from './pages/activity/joinActivity.vue';
import RealTime from './pages/management/RealTime.vue';
import DataDisplay from './pages/management/DataDisplay.vue';
import activityMa from './pages/activityMa.vue';
import VenueMa from './pages/venue/VenueMa.vue';
import navintroduce from './pages/homePages/NavIntroduce.vue';
import base from './pages/homePages/Base.vue';
import operationalVideo from './pages/operationalVideo.vue';
import main from './pages/Main.vue';
import ActiveAdd from './pages/activity/activeAdd.vue';
import ActiveEdit from './pages/activity/activeEdit.vue';
import ActivePlace from './pages/activity/activePlace.vue';
import ActiveBack from './pages/ActiveBack.vue';
import PlaceDetail from './pages/activity/placeDetail.vue';


Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/homePages' },
    { path: '/homePages', component: FirstPage },
    { path: '/homePages/navintroduce', component: navintroduce },
    { path: '/venue', component: Venue },//场馆展示
    { path: '/venue/venuecontainer', component: VenueContainer },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/resetpasswd', component: ResetPasswd },
    { path: '/profile', component: Profile },//用户中心
    { path: '/zone', component: Zone },//我的主页
    { path: '/personal', component: Personal },//用户中心
    { path: '/activities', component: ActivityContainer },//活动列表页面
    { path: '/activities/activityListDetail', component: activityListDetail },//活动详情
    { path: '/activities/joinActivity', component: joinActivity },// 加入活动 即活动组队 
    { path: '/management/realtime', component: RealTime },
    { path: '/management/datadisplay', component: DataDisplay },
    { path: '/management/activityMa', component: activityMa },
    { path: '/management/venueMa', component: VenueMa },//场馆管理
    { path: '/operationalVideo', component: operationalVideo },//作战视频
    { path: '/homePages/base', component: base },
    { path: '/main', component: main },//作战视频
    { path: '/activityMa/activeAdd', component: ActiveAdd},
    { path: '/activityMa/activeEdit', component: ActiveEdit},
    { path: '/activityMa/activePlace', component: ActivePlace},
    // { path: '/activityMa/activeAdd/:id', component: ActiveAdd,props: true },
    { path: '/ActiveBack', component: ActiveBack },
    { path: '/activityMa/placeDetail', component: PlaceDetail},

];

const router = new VueRouter({
    // mode: 'history',
    routes // (缩写) 相当于 routes: routes
})


// 路由拦截
// router.beforeEach((to, from, next) => {
//     const regex = RegExp(/^\/homePages/);
//     if(to.path === '/login' || regex.test(to.path) || localStorage.getItem('token')) {
//         next();
//     } else {
//         next('/login');
//     }
// })

export default router;
