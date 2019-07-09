<template>
    <div>
       <swiper :options="swiperOption">
           <swiper-slide>
               <img class="swiper-slide_img" src="http://p1.music.126.net/i1DfjW3MCMnwzRKMzMok6Q==/109951164199293727.jpg" alt="">
           </swiper-slide>
           <swiper-slide>
                <img class="swiper-slide_img" src="http://p1.music.126.net/_31y7T1M9jDCg8n9gruIVw==/109951164199297629.jpg" alt="">
           </swiper-slide>
           <swiper-slide>
                 <img class="swiper-slide_img" src="http://p1.music.126.net/IhRw-Qp-vQtUgJhq6OGt2g==/109951164199275916.jpg" alt="">
           </swiper-slide>
            <swiper-slide>
                 <img class="swiper-slide_img" src="http://p1.music.126.net/X-TOahWEhWPrHpWk9wwdhQ==/109951164199295354.jpg" alt="">
           </swiper-slide>
           <div class="swiper-pagination" slot="pagination"> </div>
            <!-- <div class="swiper-pagination" slot="pagination"> </div> -->
       </swiper>
    </div>
</template>

<script>
export default {
     data() {
         return {
             swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    // clickable: true,
                   
                },
                autoplay: {
                      delay: 3000,
                      //当用户滑动图片后继续自动轮播
                      disableOnInteraction: false,
                },
                loop: true,
           }
        }
     }
}
</script>

<style scoped>
.swiper-slide_img{
    width: 100%;
    height: 10rem;
}
</style>
