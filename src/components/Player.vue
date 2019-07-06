<template>
  <div>
    Player
  </div>
</template>

<script>
export default {
  name: 'player',
  data() {
    return {
      
    }
  },
  // props: {
  //   song: {
  //     type: Object
  //   }
  // },
  created() {
    console.log('player',this.$route.params.song)
  }
}
</script>

<style>

</style>
