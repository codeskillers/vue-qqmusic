<template>
   <div class="musicWrapper">
     <MusicNav />
     <router-view></router-view>
   </div>
</template>

<script>
import MusicNav from './Child/musicNav';
export default {
     data() {
       return {
          
       }
     },
     components:{
       MusicNav
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
