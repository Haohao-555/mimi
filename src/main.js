import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import 'element-ui/lib/theme-chalk/index.css'
import { Message } from 'element-ui'
import store from './store/index'

import App from './App.vue'

// （代理）根据前端跨域做调整 /a/b: /api/a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 生产环境提示
Vue.config.productionTip = false

// axios 挂载 vue 原型上 后期直接使用 this.axios 直接使用即可
Vue.prototype.axios = axios;

Vue.prototype.$message = Message;

//图片懒加载
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})

//注册 cookie
Vue.use(VueCookie)

//拦截器
axios.interceptors.response.use(function(response) {
  //获取接口返回的值
  let res = response.data;
  //获取当前页面路径
  let path = location.hash;

  if (res.status == 0) {
    return res.data;
  } else if(res.status == 10){ // 未登录
    if (path != '#/index') {
      window.location.href = '/#/login';
    }
    return Promise.reject(res);
  } else {
    Message.warning(res.msg);
    return Promise.reject(res.data.message);
  }
}, (error) => {
  let res = error.response;
  Message.error(res.data.msg);
  return Promise.reject(error);
})


new Vue({
  store,
  //路由注册
  router,
  render: h => h(App),
}).$mount('#app')




