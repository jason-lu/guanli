import Vue from 'vue';
import router from './router';
import echarts from 'echarts';
import App from './app.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import store from './store/store.js';
// ----------------------------------------------------
import axios from 'axios';
axios.defaults.baseURL = process.env.NODE_ENV === 'production'? '/api/v1/':'http://47.104.128.89/api/v1/';
Vue.prototype.$http= axios;
// ----------------------------------------------------


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