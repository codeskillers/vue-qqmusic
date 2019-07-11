<template>
   <div class="musicWrapper">
     <MusicNav />
     <TarBar></TarBar>
     <router-view></router-view>
   </div>
</template>

<script>
import MusicNav from './Child/musicNav';
import TarBar from '../TabBar/tabbar'
export default {
     data() {
       return {
          
       }
     },
     components:{
       MusicNav,
       TarBar
     }
}
</script>

<style scoped>
.musicWrapper{
  width: 100%;
  height: 84.7%;
  background-color: #F5F5F5;
}
</style>
