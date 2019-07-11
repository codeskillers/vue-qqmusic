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
             id: [],
         }
     },
     created(){
        this.$http.get('http://neteasecloudmusicapi.zhaoboy.com/personalized')
        .then(res =>{
            console.log('recommend',res);
            this.recoMv = res.data.result;
            let ids = this.recoMv[0].id
            // resolve(id)
            console.log(ids);
            return ids
        })
        .then(res => {
            console.log(res)
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
