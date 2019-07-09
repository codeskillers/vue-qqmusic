<template>
    <div>
       <Swiperhome />
    </div>
</template>

<script>
import Swiperhome from '../Child/swiper';
export default {
     data() {
         return {
             recoMv: [],
             id: []
         }
     },
     created(){
        this.$http.get('http://neteasecloudmusicapi.zhaoboy.com/personalized')
        .then(res =>{
            console.log('recommend',res);
            this.recoMv = res.data.result;
            this.id = this.recoMv[0].id
            // resolve(id)
            console.log(id);
        })
        .catch(err => {
            console.log(err);
        })
     },
     components: {
         Swiperhome
     }
}
</script>

<style>

</style>
