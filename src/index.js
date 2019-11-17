import Vue from 'vue';
import router from './router';
import echarts from 'echarts';
import App from './app.vue';
import GLOBAL  from './pages/util/constants';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import store from './store/store.js';

Vue.use(ElementUI);
//引入全局echarts
Vue.prototype.$echarts = echarts;
//引入全局变量
Vue.prototype.GLOBAL  = GLOBAL;

new Vue({
    el:'#root',
    render:h=>h(App),
    router
})