<template>
  <div>
    <div class="top">
      <div class="header">
        <img src="./listMusic/images/back.png" alt="" class="icon">
        <div class="title">最近播放</div>
        <div class="clear">清空</div>
      </div>
      <div class="tabs">
        <div class="tab" :class="isActive1 ? 'active': '' ">歌曲 
          <span class="mini-font">({{history.length}})</span>
        </div>
        <div class="tab" :class="isActive2 ? 'active': '' ">直播

        </div>
        <div class="tab" :class="isActive3 ? 'active': '' ">视频

        </div>
      </div>
    </div>
   
    <div class="list-container" ref="listContainer">
      <div class="musicBox" ref="musicBox">
        <div class="lists" v-for="(item, index) in history" :key="index">
          <List :song="item"></List>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from './listMusic/listMusic'
import BScroll from 'better-scroll'
export default {
  name: 'historyMusic',
  data() {
    return {
      history: [],
      isActive1: 1,
      isActive2: 0,
      isActive3: 0,
    }
  },
  components: {
    List
  },
  created() {
    let history = this.$route.params.history;
    this.history = history
    console.log('history',this.history);
    this.$nextTick(() => {  // 保证html渲染
      this._initScroll()
    })
    console.log('scroll')
  },
  methods: {
     _initScroll () {
      this.listContainer = new BScroll(this.$refs.listContainer, {
        click: true,
        // scrollY: true,
        // scrollX: false,
        probetype: 3
      })
    },
  }
}
</script>

<style scoped>
/* .top{
  position: absolute;top: 0;
} */
.active{  
  background-color: #06a7c486;
  border-bottom: 2px solid #06a7c486;
}
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
.list-container{
  width: 100%;
  /* border: 1px solid #000; */
  position: absolute;
  top: 9rem;
  bottom: 3.5rem;
  overflow: hidden;
}
.musicBox{
  width: 100%;
}
.lists{
  width: 100%;
  padding: 0.4rem 0 0.4rem 0;
  border-bottom: 1px solid #cfcfcf;
}
</style>
