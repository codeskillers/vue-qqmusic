<template>
  <div class="player">
    <div class="flex last">
      <img src="./images/last.png" alt="">
    </div>
    <div class="flex paly">
      <img v-if='flag' src="./images/pause.png" alt="" @click='play'>
      <img v-else src="./images/play.png" alt="" @click='play'>
    </div>
    <div class="flex next">
      <img src="./images/next.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  data() {
    return {
      flag: false
    }
  },
  props: {
    isPlay: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.flag = this.isPlay
  },
  methods: {
    play(){
      console.log('play or pause');
      this.flag = !this.flag;
      this.$emit('isPlay', this.flag);
    }
  }
}
</script>

<style scoped>
.player{
  background: linear-gradient(to right, #4cb8c4, #3cd3ad);
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #cfcfcf;
  display: flex;
  text-align: center;
  height: 5rem;
}
.flex{
  flex: 1;
  padding-top: 1.6rem;
}
</style>
