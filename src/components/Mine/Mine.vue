<template>
  <div class="mine">
    <div class="userInfo">
      <div class="user" v-if="isLogin ">
        <img class="img" :src="profile.avatarUrl" alt="">
        <div class="username">{{profile.nickname}}</div>
      </div>
      <div class="user" v-else>
        <!-- <button>登录</button> -->
        <router-link :to="{name:'Login'}">
          <el-button class="btn" type="primary" round>登录</el-button>
        </router-link>
      </div>
    </div>
    <div class="lists">
      <LoadMusic  />
      <div class="historyMusicList" @click="historyMusicList">
        <HistoryMusic :playMount="historyLength" />
      </div>
      <Download />
      <Station />
      <div @click="collect">
         <Collect />
      </div>
    </div>
    <TarBar></TarBar>
    <router-view/>
  </div>
</template>

<script>
import loadMusic from './list/loadMusic'
import historyMusic from './list/historyMusic'
import download from './list/download'
import station from './list/station'
import collect from './list/collect'
import TarBar from '../TabBar/tabbar'
export default {
  name: 'mine',
  data () {
    return {
      isLogin: false,
      profile: [],  // 包含账号信息(userId)
      uid: 0,
      history: [],  // 最近100条播放记录
      historyLength: 0,
    }
  },
  created () {
    if(this.$route.params.profile){
      // console.log(this.$route.params.profile)
      this.isLogin = true;
      this.profile = this.$route.params.profile
      this.uid = this.$route.params.profile.userId
      console.log('profile',this.profile);
      this.$http.get(`http://neteasecloudmusicapi.zhaoboy.com/user/playlist?uid=${this.uid}`)
        .then(res => {
          console.log('playlist',res);
        })
        .catch(err => {
          console.log(err)
        })
      this.$http.get(`http://neteasecloudmusicapi.zhaoboy.com/user/record?uid=${this.uid}&type=0`)
        .then(res => {
          this.history = res.data.allData;
          this.historyLength = this.history.length;
          console.log("historyMusic",this.history,'oo',this.history[3].song.name,this.history[3].song.song.artists[0].name)
          console.log('record', res)
        })
        .catch(err => {
          console.log(err)
        })
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

  },
  components: {
    "LoadMusic": loadMusic,
    "HistoryMusic": historyMusic,
    "Download": download,
    "Station": station,
    "Collect": collect,
    TarBar
  },
  methods: {
    collect(){
      console.log('1')
    },
    historyMusicList() {
      if(this.$route.params.profile) {
        console.log(this.history,"123456")
        this.$router.push({
          name: 'HistoryMusic',
          params: {history: this.history}
        })
      } else {
        alert('请先登录')
      }
    }
  }
}
</script>

<style>
.mine{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.userInfo{
  width: 100%;
  height: 10rem;
  background-color: #6BD3A1;
  border-bottom: 1px solid #cfcfcf;
}
.user {
  text-align: center;
  position: relative;
  /* background-color: #fff; */
}
.user img{
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  float: left;
  position: relative;
  margin-left: 5rem;
  margin-top: 2.5rem;
}
.user .username{
  font-size: 1.2rem;
  float: right;
  position: relative;
  margin-right: 8rem;
  margin-top: 4rem;
}
.user .btn{
  margin-top: 5rem;
  transform: translateY(-50%);
}
.lists{
  width: 100%;
}
</style>
