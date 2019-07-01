<template>
  <div>
    <div class="box">
    <div class="username">
       <div class="text-phone">手机号</div>
       <input type="text" placeholder="请输入手机号" v-model="phone">
    </div>
    <div class="password">
      <div class="text-password">密码</div>
      <input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <div class="login" @click="login">登录</div>
  </div>
  </div>
  
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      phone: '',
      password: '',
      profile: {},
    }
  },
  methods: {
    login() {
      console.log(this.phone)
      this.$http.get(`http://neteasecloudmusicapi.zhaoboy.com/login/cellphone?phone=${this.phone}&password=${this.password}`)
      .then(res => {
        console.log(res.data)
        // console.log(res)
        if (res.data.code === 200) {
          this.isLogin = true;
          this.profile = res.data.profile;
          console.log(this.profile)
          this.$router.push({
            name: 'Mine',
            params: {profile: this.profile}
          })
          console.log(11122)
        }
      })
      .catch(err => {
        alert('手机号或密码错误，请重新输入');
        this.phone = '';
        this.password = '';
      })
    }
  }
}
</script>

<style>
.box{
  width: 90%;
  /* height: 150px; */
  border: 1px solid #cfcfcf;
  position: absolute;
  top: 150px;
}
.username{
  display: flex;
  margin-left: 5px;
   margin-top: 10px;
}
.password{
  display: flex;
  margin-top: 10px;
   margin-left: 5px;
}
input{
  margin-left: 10px;
}
.login{
  border: 1px solid #000;
  width: 50px;
  height: 24px;
  border-radius: 5px;
  text-align: center;
  margin: 10px auto 10px;
}
</style>
