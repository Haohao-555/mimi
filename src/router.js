// 页面路由封装
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfrim from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import Alipay from './pages/alipay'

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
            component: Product
        }, {
            //http:localhost:8080/#/detail/123(商品详情页面)
            path: '/detail/:id',
            name: 'detail',
            component: Detail
        }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/cart',//http:localhost:8080/#/cart(商品卡片)
        name: 'cart',
        component: Cart
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        // 子页面
        children: [{
            path: 'confirm',//http://localhost:8080/order/confrim (提交订单)
            name: 'order-confrim',
            component: OrderConfrim
        }, {
            path: 'list',//http://localhost:8080/order/list (订单列表)
            name: 'order-list',
            component: OrderList
        }, {
            path: 'Pay',//http://localhost:8080/order/pay(订单支付)
            name: 'order-pay',
            component: OrderPay
        }, {
            path: 'alipay',//支付中间页面
            name: 'alipay',
            component: Alipay
        }

        ]
    }
    ]
})