<template>
    <div class="searchWrapper">
           <div class="search-input">
               <input type="text" class="" placeholder="搜索歌手歌曲~">
           </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.searchWrapper{
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}
.search-input{
    width: 94%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
input{
    border: none;
    outline: none;
    width: 100%;
    height: 1.6rem;
    border-radius: 0.2rem;
    text-align: center;
    font-size: 0.8rem;
}
.search-input::before{
    width: .9rem;
    height: .9rem;
    content: "";
    display: block;
    position: absolute;
    background: url('../../../images/music/search.png');
    background-size: cover;
    left: 8rem;
}
</style>
