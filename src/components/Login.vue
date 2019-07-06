<template>
  <div class="box">
    <div class="username">
      <!-- <div class="text-phone">手机号</div> -->
      <el-input v-model="phone" placeholder="请输入手机号"></el-input>
    </div>
    <div class="password">
      <!-- <div class="text-password">密码</div> -->
      <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
    </div>
    <el-button class="login" type="primary" @click="login">登录</el-button>
    <router-link :to="{name:'Register'}" exact>
      <el-button class="register" type="primary">注册</el-button>
    </router-link>
    
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      phone: '',
      password: '',
      profile: {}, // 包含账号信息(userId)
    }
  },
  methods: {
    login() {
      this.$http.get(`http://neteasecloudmusicapi.zhaoboy.com/login/cellphone?phone=${this.phone}&password=${this.password}`)
      .then(res => {
        // console.log(res.data)
        if (res.data.code === 200) {
          this.isLogin = true;
          this.profile = res.data.profile;
          // console.log(this.profile)
          this.$router.push({
            name: 'Mine',
            params: {profile: this.profile}
          })
        }
      })
      .catch(err => {
        alert('手机号或密码错误，请重新输入');
        this.phone = '';
        this.password = '';
      })
    },
    // register() {
    //   this.$http.get(`http://neteasecloudmusicapi.zhaoboy.com/register/cellphone?phone=13xxx&password=xxxxx&captcha=1234&nickname=binary1345`)
    //   .then(res => {
    //     console.log(res.data)
    //   })
    // }
  }
}
</script>

<style scoped>
.box{
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #24b3bd70;
  z-index: 99;
  position: absolute;
  bottom: 0;
  top: 0;
}
.username{
  display: block;
  position: absolute;
  top: 12rem;
  left: 5.5rem;
}
.password{
  display: block;
  position: absolute;
  top: 15rem;
  left: 5.5rem;
}
.register{
  border-radius: 5px;
  position: absolute;
  top: 19rem;
  left: 12rem;
}
.login{
  border-radius: 5px;
  position: absolute;
  top: 19rem;
  left: 6rem;
}
/* .text-phone {
  width: 4rem;
  text-align: center;
  padding-top: 0.6rem;
}
.text-password {
  width: 4rem;
  text-align: center;
  padding-top: 0.6rem;
} */
</style>
