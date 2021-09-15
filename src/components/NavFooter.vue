<template>
    <div class="footer">
        <div class="footer-login">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://xiaomi.tmall.com/" target="_blank">小米天猫店</a><span>|</span>
            <a href="https://home.mi.com/index.html" target="_blank">米家</a><span>|</span>
            <a href="https://privacy.mi.com/all/zh_CN/" target="_blank">小米商城隐私政策</a><span>|</span>
            <a href="https://static.mi.com/feedback/" target="_blank">问题反馈</a>
        </div>
        <div class="copyright">© Copyright 2019 <span class="domain">mi.future.com</span> All Rights Reserved</div>
    </div>
</template>
<script>
export default {
    name:'nav-footer',
}
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
  .footer{
      height: 234px;
      border-top: 4px solid $colorA;
      background-color: $colorB;
      color: #9A9A9A;
      font-size: $fontI; // 16px
      font-family: FZLanTingHeiS-R-GB;
      text-align: center;
    .footer-login{
        margin-top: 45px;
        margin-bottom: 31px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    } 
    .footer-link{
        margin-bottom:13px ;
        a{
         color: #9A9A9A;
         display: inline-block;//行内块级元素   
        }
        span{
            margin: 0 10px;//上下0 左右10
        }
    }
    .copyright{
        .domain{
          color: $colorA;
        }
    }

  }
</style>