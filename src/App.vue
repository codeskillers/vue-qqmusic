<template>
  <div id="app">
    <div class="tabBar">
      <div class="tab-item" @click="toMusic">
        <router-link class="router-link" :to="{name:'Music'}" exact>
          <img class="img" v-if="isColor1" src="./images/tabBar/music-active.png" alt="">
          <img class="img" v-else src="./images/tabBar/music.png" alt="">
          <div :class="{bottomBarColorActive:isColor1}">音乐馆</div>
        </router-link>
      </div>
      <div class="tab-item" @click="toSearch">
        <router-link class="router-link" :to="{name:'Search'}" exact> 
          <img class="img" v-if="isColor2" src="./images/tabBar/play-active.png" alt="">
          <img class="img" v-else src="./images/tabBar/play.png" alt="">
          <div :class="{bottomBarColorActive:isColor2}">发现</div>
        </router-link>
      </div>
      <div class="tab-item" @click="toMine">
        <router-link class="router-link" :to="{name:'Mine'}" exact> 
          <img class="img" v-if="isColor3" src="./images/tabBar/mine-active.png" alt="">
          <img class="img" v-else src="./images/tabBar/min.png" alt="">
          <div :class="{bottomBarColorActive:isColor3}">我的</div>
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isColor1: true,
      isColor2: false,
      isColor3: false,
    }
  },
  methods: {
    toMusic () {
      this.isColor1 = true;
      this.isColor2 = false;
      this.isColor3 = false;
    },
    toSearch () {
      this.isColor1 = false;
      this.isColor2 = true;
      this.isColor3 = false;
    },
    toMine () {
      this.isColor1 = false;
      this.isColor2 = false;
      this.isColor3 = true;
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html {
  font-size: 16px;
}
html,body {
   width: 100%;
   height: 100%;
}
#app {
    width: 100%;
    height: 100%
}
.tabBar {
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  font-size: 0.9rem;
}
.tab-item {
  flex: 1;
  text-align: center;
  vertical-align: middle;
}
.tab-item .img {
  width: 1.6rem;
  height: 1.6rem;
}
.router-link {
  text-decoration: none;
  color: #BABABA;
}
.router-link-active {
   color: #6BD3A1;
}
/* .bottomBarColorActive {
  color: rgb(65, 192, 65);
} */
</style>
