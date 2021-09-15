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
  
  },
};
</script>