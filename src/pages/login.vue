<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt="" /></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span
            ><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username" />
          </div>
          <div class="input">
            <input
              type="password"
              placeholder="请输入密码"
              v-model="password"
            />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <!-- <div class="reg">立即注册<span>|</span>忘记密码？</div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://xiaomi.tmall.com/" target="_blank">小米天猫店</a
        ><span>|</span>
        <a href="https://home.mi.com/index.html" target="_blank">米家</a
        ><span>|</span>
        <a href="https://privacy.mi.com/all/zh_CN/" target="_blank"
          >小米商城隐私政策</a
        ><span>|</span>
        <a href="https://static.mi.com/feedback/" target="_blank">问题反馈</a>
      </div>
      <p class="copyright">
        Copyright ©2020 mi.futurefe.com All Rights Reserved.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      userId: "",
    };
  },
  methods: {
    login() {
      //对象解构
      let { username, password } = this;
      this.axios
        .post("/user/login", {
          username,
          password,
        }).then((res) => {
          //返回结果中用户id是唯一凭证，将其保存到Cookie中
          this.$cookie.set("userId", res.id, { expires: "s" });
          //保存到vuex action.js saveUserName
          this.$store.dispatch("saveUserName", res.username);
          this.$router.push({
            // 接在url后面
            // path: '/index', // path是对应 router中路由的 path
            // query: {
            //   from: 'login',
            // }

            // post
            name: 'index', // name 是对应 router 中路由的 name
            params: {
              from: 'login',
            }
          });
        });
    },
    //注册功能写死
    register() {
      this.axios
        .post("/user/register", {
          username: "admin322",
          password: "admin322",
          email: "admin322@qq.com",
        })
        .then(() => {
          alert("注册成功");
        });
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
.login {
  & > .container {
    height: 113px;
    img {
      width: auto;
      height: 100%;
    }
  }
  .wrapper {
    background: url("/imgs/login-bg.jpg") no-repeat center;
    .container {
      position: relative;
      height: 576px;
      .login-form {
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width: 410px;
        height: 510px;
        background-color: $colorG;
        position: absolute;
        bottom: 29px;
        right: 0;
        h3 {
          line-height: 23px;
          font-size: $fontE; // 24
          text-align: center;
          margin: 40px auto 49px;
          .checked {
            color: $colorA;
          }
          .sep-line {
            margin: 0 32px;
          }
        }
        .input {
          display: inline-block;
          width: 348px;
          height: 50px;
          border: 1px solid $colorH;
          margin-bottom: 20px;
          input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn {
          width: 100%;
          line-height: 50px;
          margin-top: 10px;
          font-size: $fontI; // 16
        }
        .tips {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: $fontJ; // 14
          cursor: pointer;
          .sms {
            color: $colorA;
          }
          .reg {
            color: #999999;
            span {
              margin: 0 7px;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 100px;
    padding-top: 60px;
    color: $colorD;
    font-size: $fontI; // 16
    text-align: center;
    .footer-link {
      a {
        color: $colorD;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
    }
    .copyright {
      margin-top: 13px;
    }
  }
}
</style>