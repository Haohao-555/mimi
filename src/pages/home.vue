<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view><!--存放子页面(其关系在router.js中配置)-->
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import navHeader from '../components/NavHeader'
import navFooter from '../components/NavFooter'
export default {
    name:'nav-home',
    components:{
      navHeader,
      navFooter
    }
}
</script>