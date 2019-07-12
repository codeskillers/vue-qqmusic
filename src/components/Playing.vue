<template>
  <div>
    <div class="body">
      <div class="sing-brief">
        <div class="sing-name">{{songInfo.name}}</div>
        <div class="singer-name">{{songInfo.ar[0].name}}
          <!-- <text v-for="song.ar">{{item.name}}</text> -->
        </div>
      </div>
      <div class="sing-show">
        <img src="../images/playing/stick.png" class="stick" :class="isPlay ? 'rotate': '' " />
        <img src="../images/playing/disk.png" class="disk" />
        <img :src="songInfo.al.picUrl" alt="" class="music" :class="isPlay ? 'play': '' " />
        <!-- <img src="{{song.al.picUrl}}" class="coverImg {{isPlay ? 'play' : ''}}" /> -->
      </div>
      <!-- <div>  
        <img v-if="isPlay" src="../images/playing/pause.png" alt="">
        <img v-else src="../images/playing/play.png" alt="">
        <button type="primary" bindtap="handleToggleBGAudio">{{isPlay ? '暂停' : '播放'}}</button>
      </div> -->
      <div class="words"></div>
    </div>
    <Player :isPlay='isPlay' @isPlay='getIsPlay' />
    <audio :src=musicUrl id="music"></audio>
  </div>
</template>

<script>
import Player from './Player/player';
import { getMusicUrl } from '../api/index'
import { resolve } from 'q';
export default {
  name: 'palying',
  data() {
    return {
      isPlay: false,
      songInfo: {},
      musicId: null,
      musicUrl: ''
    }
  },
  props: {
    song: {
      type: Object
    }
  },
  components: {
    Player
  },
  methods: {
    getMusic() {
      return new Promise( (resolve, reject) => {
        let res = getMusicUrl(this.musicId);
        res.then(res => {
          // a = res;
          // console.log(res,'a',a)
          resolve(res)
          console.log('res', res)
        })
      })
      // return a;
    },
    getIsPlay(value) {
      console.log(value);
      this.isPlay = value;
      // todo 
      let audio = document.getElementById('music');
      let src = audio.src;
      // console.log(/\.mp3$/.test(src)); // 判断后缀是否为.MP3格式
      // if(/\.mp3$/.test(src)) {
        
      // } else {

      // }
      if(audio) {
          console.log(this.isPlay);
          if(this.isPlay) {
            audio.currentTime = 0;
            audio.play();
          } else {
            audio.pause();
          }
        }
    }
  },
  created() {
    console.log(1)
    this.songInfo = this.$route.params.song.song;
    this.musicId = this.songInfo.id;
    this.getMusic().then( res => {
      this.musicUrl = res.data[0].url
      // console.log(this.musicUrl)
    })
    if(!this.getIsPlay){
      console.log('!getIsPlay','123');

    } else {
      console.log('getIsPlay')
    }
  },
  updated() {
    console.log('updated')
  }
};
</script>

<style scoped>
.body{
    background: linear-gradient(to right, #4cb8c4, #3cd3ad);
  width: 100%;
  position: absolute;
  top: 3.5rem;
  bottom: 3.8rem;
}
.sing-brief {
  position: relative;
  text-align: center;
  top: 1rem;
  color: #bb4e55;
}
.sing-name {
  font-size: 20px;
  font-weight: 600;
}
.singer-name {
  font-size: 12px;
  margin-top: 1rem;
}
.sing-show {
  position: absolute;
  /* position: relative; */
  width: 98%;
  top: 7rem;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stick{
  width: 8rem;
  height: 8rem;
  position: absolute;
  top: 1.5rem;
  left: 10.5rem;
  z-index: 99;
  transform: translate(-15%, 0%) rotate(8deg);
}
/* .stick.rotate{
  transform: translate(-15%, 0%) rotate(8deg);
} */
.disk{
  z-index: 0;
  width: 20rem;
  height: 20rem;
  position: absolute;
  top: 7.5rem;
  border-radius: 50%;
}
.music{
  width: 15rem;
  height: 15rem;
  position: absolute;
  top: 10rem;
  border-radius: 50%;
}
.music.play{
   animation: rotate 15s linear infinite;
}
.words{
  width: 100%;
  height: 2.5rem;
  position: absolute;
  top: 38rem;
  overflow: hidden;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
