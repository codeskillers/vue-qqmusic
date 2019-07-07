<template>
    <div class="navbar">
       <p class="navbar-title">{{title}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Music"
        }
    },
}
</script>

<style scoped>
.navbar {
    width: 100%;
    height: 3rem;
    display: flex;
}
.navbar-title{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 550;
}
</style>
