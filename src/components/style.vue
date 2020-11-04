<template>
<h1 class="styleVue">vue deco</h1>
    <h1 v-bind:style="{color:'green'}">awesome experiences</h1>
    <h1 v-bind:style="{color:colorName}">awesome next level experiences</h1>
      <h1 v-bind:class="{display:show}">woow vue, class with object</h1>
      <h1 v-bind:class="{screen:play,view:play}">woow vue, class with object next level</h1>
      <h1 v-bind:class="[s,v]">woow vue, class with array </h1>
      <h1 v-bind:class="[checkDisply?s:v]">woow vue, class with array next level</h1>
</template>


<script>
export default {
    name:"Deco",

    data(){
        return{
            colorName:'red',
            show:true,
            play:true,
            s:'screen',
            v:'view',
            checkDisply:false
        }
    }
}
</script>

<style scoped>
.styleVue{
    color: blue;
}
.display{
 background-color: magenta;
 font-size: 50;
 color: turquoise;
}
.screen{
    background-color: rgb(88, 64, 224);
}
</style>