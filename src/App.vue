<template>
  <img alt="Vue logo" src="./assets/logo.png">
 <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
 <!-- <Welcome />-->
<!-- <Temp /> -->
<Deco />

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Welcome from './components/welcome.vue'
//import Temp from './components/template.vue'
import Deco from './components/style.vue'

export default {
  name: 'App',
  components: {
  //  HelloWorld
 // Welcome
 //Temp
   Deco
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
