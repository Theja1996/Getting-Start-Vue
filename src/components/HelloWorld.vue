<template>
  <div class="hello">

    
    
    <Home data="hi again" msg="holoo vue" msgA="welcome" />
  </div>
  
</template>

<script>
import Home from './Home.vue'
export default {
  name: 'HelloWorld',
  components: {
   // msg: String,
    Home
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
