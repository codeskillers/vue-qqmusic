<template>
  <div>
    <div class="historyMusic-box">
      <img src="../../../images/mine/play.png" alt="" class="load">
      <div class="historyMusic">最近播放 ({{playMount}})</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'historyMusic',
  data () {
    return {

    }
  },
  props: {
    playMount: {
      type: Number
    }
  },
  mounted() {
    console.log('playMount', this.playMount)
  }
}
</script>

<style>
.historyMusic-box {
  width: 100%;
  height: 3.5rem;
  border-bottom: 1px solid #cfcfcf;
}
.historyMusic-box img{
  vertical-align: middle;
  margin-top: 0.8rem;
  margin-left: 1.5rem;
}
.historyMusic {
  display: inline-block;
  vertical-align: middle;
  margin-top: 0.8rem;
  margin-left: 1rem;
}
</style>
