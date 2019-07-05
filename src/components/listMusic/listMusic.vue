<template>
  <div class="music">
    <div class="music-left">
      <div class="title">{{song.song.name}}</div>
      <div class="singer">{{song.song.song.artists[0].name}}</div>
    </div>
    <div class="music-right">
      <div class="player">
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

    }
  },
  props: {
    song: {
      type: Object
    }
  }
}
</script>

<style>

</style>
