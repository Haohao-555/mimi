<template>
  <div id="app">
    <router-view></router-view><!--存放页面-->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    // 判断用户是否已经登录，登录了再获取用户信息
    if (this.$cookie.get("userId")) {
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    // 获取用户信息
    getUser() {
      this.axios.get("/user").then((res = {}) => {
        this.$store.dispatch("saveUserName", res.username);
      });
    },
    // 获取购物车
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        this.$store.dispatch("saveCartCount", res);
      });
    },
  },
};
</script>
<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
