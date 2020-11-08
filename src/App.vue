<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{title}}</h1>
 <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
 <!-- <Welcome />-->
<!-- <Temp /> -->
<!--<Deco /> -->
<!-- <Databind />-->
<Child v-on:changetitle="updateTitleText($event)" />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Welcome from './components/welcome.vue'
//import Temp from './components/template.vue'
//import Deco from './components/style.vue'
//import Databind from './components/Databind.vue'
import Child from './components/Child.vue'
export default {
  name: 'App',
  components: {
  //  HelloWorld
 // Welcome
 //Temp
  // Deco
 // Databind
 Child
},
data(){
  return{
    title:"child to parent",
  }
},

methods:{
  updateTitleText(title){
    this.title=title
  }

},


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
