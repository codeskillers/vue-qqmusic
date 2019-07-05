<template>
  <div>
    <div class="top">
      <div class="header">
        <img src="./listMusic/images/back.png" alt="" class="icon">
        <div class="title">最近播放</div>
        <div class="clear">清空</div>
      </div>
      <div class="tabs">
        <div class="tab">歌曲 <span class="mini-font">({{history.length}})</span></div>
        <div class="tab">直播</div>
        <div class="tab">视频</div>
      </div>
    </div>
   
    <!-- todo -->
    <div class="list-container">
      <div class="lists" v-for="(item, index) in history" :key="index">
        <List :song="item"></List>
      </div>
    </div>
  </div>
</template>

<script>
import List from './listMusic/listMusic'
export default {
  name: 'historyMusic',
  data() {
    return {
      history: []
    }
  },
  components: {
    List
  },
  // props: {
  //   history: {
  //     type: []
  //   }
  // },
  created() {
    let history = this.$route.params.history;
    this.history = history
    console.log('history',this.history);
  }
}
</script>

<style scoped>
/* .top{
  position: absolute;top: 0;
} */
.header{
  width: 100%;
  height: 3.5rem;
  /* border: 1px solid #000; */
}
.icon{
  width: 32px;
  height: 32px;
  margin: 0.8rem;
}
.title{
  display: inline-block;
  font-size: 1.5rem;
  /* /* position: absolute; */
  vertical-align: middle; 
  margin-top: -3.5rem;
  margin-left: 3.5rem;
}
.clear{
  display: inline-block;
  font-size: 1.5rem;
  position: relative;
  bottom: 1.4rem;
  right: -5.6rem;
}
.tabs{
  width: 100%;
  display: flex;
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #cfcfcf;
}
.tab{
  flex: 1;
  font-size: 1.2rem;
}
.mini-font{
  font-size: 0.8rem;
}
</style>
