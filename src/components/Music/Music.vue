<template>
   <div class="musicWrapper">
     <MusicNav />
     <Search />
   </div>
</template>

<script>
import MusicNav from './Child/musicNav';
import Search from './Child/search';
export default {
     data() {
       return {
          
       }
     },
     components: {
       MusicNav,
       Search
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
