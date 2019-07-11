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
        <img src="../images/playing/stick.png" class="stick" >
        <img src="../images/playing/disk.png" class="disk" />
        <!-- <img src="{{song.al.picUrl}}" class="coverImg {{isPlay ? 'play' : ''}}" /> -->
      </div>
      <!-- <div>  
        <img v-if="isPlay" src="../images/playing/pause.png" alt="">
        <img v-else src="../images/playing/play.png" alt="">
        <button type="primary" bindtap="handleToggleBGAudio">{{isPlay ? '暂停' : '播放'}}</button>
      </div> -->
      <div class="words"></div>
    </div>
    <Player :isPlay='isPlay' />
  </div>
</template>

<script>
import Player from './Player/player'
export default {
  name: 'palying',
  data() {
    return {
      isPlay: false,
      songInfo: {},
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
  created() {
    this.songInfo = this.$route.params.song.song
    console.log('created', this.$route.params.song.song)
  }
};
</script>

<style scoped>
.body{
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
  border: 1px solid #000;
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
  top: 2rem;
  left: 9.5rem;
  z-index: 99;
}
.disk{
  z-index: -1;
  width: 20rem;
  height: 20rem;
  position: absolute;
  top: 7.5rem;
}
.coverImgStick {
  position: absolute;
  top: 15%;
  left: 50%;
  width: 100px;
  height: 130px;
  transform: translate(-20%, -50%) rotate(-20deg);
}
.coverImgBg {
  z-index: -1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500rpx;
  height: 500rpx;
  border-radius: 50%;
}
.coverImg {
  width: 400rpx;
  height: 400rpx;
  border-radius: 50%;
}
.coverImg.play {
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
