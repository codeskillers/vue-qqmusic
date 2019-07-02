<template>
  <div id="app">
    <TarBar class="footer"></TarBar>
    <router-view/>
  </div>
</template>

<script>
import TarBar from './components/TabBar/tabbar'
export default {
  name: 'App',
  data () {

  },
  components: {
    TarBar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html {
  font-size: 16px;
}
html,body {
   width: 100%;
   height: 100%;
}
#app {
    width: 100%;
    height: 100%
}
.footer{
  position: absolute;
  bottom: 0;
  padding: 2px;
  border-top: 1px solid #cfcfcf;
}
</style>
