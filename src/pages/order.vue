<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>

import serviceBar from "./../components/ServiceBar";
import navFooter from "./../components/NavFooter";

export default {
  name: "order",
  components: {
   
    navFooter,
    serviceBar,
  },
  data() {
    return {
      title: "",
      tip: "",
    };
  },
  mounted() {
  
  },
  methods: {
    // init() {
    //   let path = this.$route.path;
    //   if (path == "/order/confirm") {
    //     this.title = "订单确定";
    //     this.tip = "请认真填写地址";
    //   } else if (path == "/order/list") {
    //     this.title = "订单列表";
    //     this.tip = "请谨防钓鱼链接或诈骗电话，链接更多";
    //   } else if (path == "/order/pay") {
    //     this.title = "订单支付";
    //     this.tip = "请谨防钓鱼链接或诈骗电话，链接更多";
    //   }
    // },
  },
};
</script>