<template>
   <div class="tabWrapper">
       <ul class="tab">
       <li tag="li" v-for="(tabItem, index) in tab" :key="index" class="tab-item" :class="[tabItem.isActive ? activeClass : nactiveClass]"
        @click="switchTab(index,tabItem)"
       >
         {{tabItem.name}}</li>
     </ul>
     </div>
</template>

<script>
export default {
     data() {
       return {
          tab:[
            {
              name:'推荐',
              path:'/music/recommend',
              isActive: true
            },
             {
              name:'歌手',
              path: '/music/singer',
              isActive: false
            },
             {
              name:'排行',
              path: '/music/list',
              isActive: false
            },
             {
              name:'搜索',
              path: '/music/search',
              isActive: false
            }
          ],
          activeClass: 'active',
          nactiveClass: 'noactive'
       }
     },
     methods: {
       switchTab(index){
          for(let i in this.tab){
            if(index==i){
              this.tab[i].isActive = true;
              this.$router.push({path: this.tab[i].path})
            } else {
              this.tab[i].isActive = false;
            }
          }
       }
     }
}
</script>

<style scoped>
.tabWrapper{
  background-color: #fff;
  height: 3rem;
}
.tab{
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.tab-item{
  display: inline-block;
  color: #000000;
  position: relative;
}
.active{
  color: #31C27C;
}
.noactive{
  color: #000000;
}
.active::before{
   width: 2.2rem;
   height: 2.3rem;
   content: "";
   display: block;
   position: absolute;
   border-top: 3px solid #31C27C;
   top: 1.8rem;
   left: 1.78rem;
}
</style>
