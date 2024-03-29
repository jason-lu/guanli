import Vue from 'vue';
import router from './router';
import echarts from 'echarts';
import Vebar from 'v-charts/lib/bar.common'//按需引入折线图
import Vering from 'v-charts/lib/ring.common'//按需引入环图
import Vehistogram from 'v-charts/lib/histogram.common'//按需引入柱状图
import Vemap from 'v-charts/lib/map.common'//按需引入地图
import App from './app.vue';
import './assets/css/global.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css'
// import store from './store/store.js';
import axios from 'axios';
import "babel-polyfill";
axios.defaults.baseURL = process.env.NODE_ENV === 'production'? '/api/v1/':'http://122.112.247.149/api/v1/';
Vue.prototype.$http= axios;
Vue.component(Vebar.name, Vebar)
Vue.component(Vering.name, Vering)
Vue.component(Vehistogram.name, Vehistogram)
Vue.component(Vemap.name, Vemap)
Vue.use(ElementUI);



//引入全局echarts
Vue.prototype.$echarts = echarts;
//引入全局变量 
// Vue.prototype.GLOBAL  = GLOBAL;

new Vue({
    el:'#root',
    render:h=>h(App),
    router
})
