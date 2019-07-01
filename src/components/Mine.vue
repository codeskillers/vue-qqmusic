<template>
  <div class="mine">
    <div class="userInfo">
      <div class="user" v-if="isLogin ">
        <img :src="profile.avatarUrl" alt="">
        <div class="username">{{profile.nickname}}</div>
      </div>
      <div class="user" v-else>
        <!-- <button>登录</button> -->
        <router-link :to="{name:'Login'}">
          <div class="btn">登录</div>
        </router-link>
      </div>
    </div>
    <div class="lists">
      <div class="loadMusic"></div>
      <div class="historyMusic"></div>
      <div class="download"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
      isLogin: false,
      profile: [],
    }
  },
  created () {
    if(this.$route.params.profile){
      // console.log(this.$route.params.profile)
      this.isLogin = true;
      this.profile = this.$route.params.profile
    } 
    else {
      this.$http.get('http://neteasecloudmusicapi.zhaoboy.com/login/status')
      .then(res => {
        console.log(res.data)
        // console.log(res)
        if (res.data.code === 200) {
          this.isLogin = true;
          this.profile = res.data.profile;
        }
      })
      .catch(err => {
        console.log('error:', err);
        this.isLogin = false;
        // console.log('islogin',this.isLogin)
      })
    }
  }
}
</script>

<style>
.userInfo{
  width: 100%;
}
</style>
