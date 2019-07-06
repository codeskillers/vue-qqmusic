<template>
  <div class="music">
    <div class="music-left">
      <div class="title">{{song.song.name}}</div>
      <div class="singer">{{song.song.song.artists[0].name}}</div>
    </div>
    <div class="music-right">
      <div class="player" @click="play">
        <img src="./images/play.png" alt="">
      </div>
      <div class="icon-more">
        <img src="./images/more.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listMusic',
  data () {
    return {
      // songInfo: {}
    }
  },
  props: {
    song: {
      type: Object
    }
  },
  created() {
    console.log('song', this.song);
  },
  methods: {
    play() {
      console.log('song',this.song);
      this.$router.push({
        name: 'Player',
        params: {song: this.song}
      })
    }
  }
}
</script>

<style>
.music{
  width: 100%;
  height: 3rem;
  display: block;
}
.music-left{
  float: left; 
  margin-left: 0.5rem;
}
.title{
  font-size: 1.2rem;
}
.singer{
  font-size: 0.8rem;
}
.music-right{
  float: right;
}
.player{
  display: inline-block;
  margin-right: 0.2rem;
}
.icon-more{
  display: inline-block;
}
</style>
