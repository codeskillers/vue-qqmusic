<template>
  <div class="register">
    <div class="username">
      <el-input v-model="phone" placeholder="请输入手机号"></el-input>
    </div>
    <div class="password">
      <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
    </div>
    <div class="verification-box">
      <el-input class="verification" v-model="verification" placeholder="请输入验证码"></el-input>
      <button class="send" @click="send">发送验证码</button>
    </div>
    <div class="nickname">
      <el-input v-model="nickname" placeholder="请输入昵称"></el-input>
    </div>
    <div>
      <el-button class="registerBtn" type="primary" round @click="register">注册</el-button>
      <el-button class="back" type="primary" round @click="back">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      phone: '',
      password: '',
      verification: '',
      nickname: '',
    }
  },
  methods: {
    register() {
      alert('暂时不支持注册');
    },
    back() {
      console.log(123)
      this.$router.push({ name: 'Mine' })
    },
    send() {
      console.log(234)
      alert('暂时发不了验证码')
      // if(this.phone){
      //   this.$http.get(`http://neteasecloudmusicapi.zhaoboy.com/captcha/sent?phone=${this.phone}`)
      //     .then(res => {
      //     console.log(res.data)
         
      //   })
      // } else {
      //   alert('手机号错误')
      // }
    },
  }
}
</script>

<style scoped>
.register{
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #24b3bd70;
}
.username{
  display: block;
  position: absolute;
  top: 8rem;
  left: 5.5rem;
}
.password{
  display: block;
  position: absolute;
  top: 11rem;
  left: 5.5rem;
}
.verification{
  display: block;
  position: absolute;
  top: 14rem;
  left: 5.5rem;
  width: 202px;
}
.verification-box .send{
  display: inline-block;
  position: absolute;
  left: 18.5rem;
  top: 14.5rem;
  height: 1.5rem;
}
.nickname{
  display: block;
  position: absolute;
  top: 17rem;
  left: 5.5rem;
}
.registerBtn{
  display: block;
  position: absolute;
  /* border-radius: 5px; */
  position: absolute;
  top: 21rem;
  left: 9rem;
}
.back{
  display: block;
  position: absolute;
  top: 24rem;
  left: 8.5rem;
}
</style>
