/* eslint-disable vue/no-deprecated-filter */

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--<h1>{{title}}</h1>-->
  // eslint-disable-next-line vue/no-deprecated-filter
  <h1>{{ Ucase(info)}}</h1>
 <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
 <!-- <Welcome />-->
<!-- <Temp /> -->
<!--<Deco /> -->
<!-- <Databind />-->
<!--<Child v-on:changetitle="updateTitleText($event)" />-->
<!--<Login />-->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Welcome from './components/welcome.vue'
//import Temp from './components/template.vue'
//import Deco from './components/style.vue'
//import Databind from './components/Databind.vue'
//import Child from './components/Child.vue'
//import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
  //  HelloWorld
 // Welcome
 //Temp
  // Deco
 // Databind
 //Child
 //Login
},
data(){
  return{
    //title:"child to parent",
    info:"Filters on vue",
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
