import Vue from 'vue';
import router from './router';
import echarts from 'echarts';
import Vebar from 'v-charts/lib/bar.common'//按需引入折线图
import Vering from 'v-charts/lib/ring.common'//按需引入环图
import Vehistogram from 'v-charts/lib/histogram.common'//按需引入柱状图
import App from './app.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import store from './store/store.js';
import axios from 'axios';
import "babel-polyfill";
axios.defaults.baseURL = process.env.NODE_ENV === 'production'? '/api/v1/':'http://47.104.128.89/api/v1/';
Vue.prototype.$http= axios;
Vue.component(Vebar.name, Vebar)
Vue.component(Vering.name, Vering)
Vue.component(Vehistogram.name, Vehistogram)
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