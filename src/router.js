// 页面路由封装
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'

Vue.use(Router)

{/* <router-view></router-view> */ }
export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home,//父页面(承载多个子页面)
        redirect: '/index',//默认跳转到index页面
        // 子页面
        children: [{
            //http:localhost:8080/#/index(主页面)
            path: '/index',
            name: 'index',
            component: Index
        }, {
            //http:localhost:8080/#/product/123(商品页面)
            path: '/product/:id',
            name: 'product',
            component: () => import("./pages/product.vue")
        }, {
            //http:localhost:8080/#/detail/123(商品详情页面)
            path: '/detail/:id',
            name: 'detail',
            component: () => import("./pages/detail.vue")
        }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("./pages/login.vue")
    },
    {
        path: '/register',
        name: 'register',
        component: () => import("./pages/register.vue")
    },
    {
        path: '/cart',//http:localhost:8080/#/cart(商品卡片)
        name: 'cart',
        component: () => import("./pages/cart.vue")
    },
    {
        path: '/order',
        name: 'order',
        component: () => import("./pages/order.vue"),
        // 子页面
        children: [{
            path: 'confirm',//http://localhost:8080/order/confrim (提交订单)
            name: 'order-confrim',
            component: () => import("./pages/orderConfirm.vue")
        }, {
            path: 'list',//http://localhost:8080/order/list (订单列表)
            name: 'order-list',
            component: () => import("./pages/orderList.vue")
        }, {
            path: 'Pay',//http://localhost:8080/order/pay(订单支付)
            name: 'order-pay',
            component: () => import("./pages/orderPay.vue")
        }, {
            path: 'alipay',//支付中间页面
            name: 'alipay',
            component: () => import("./pages/alipay.vue")
        }

        ]
    }
    ]
})