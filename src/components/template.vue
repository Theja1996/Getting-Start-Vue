<template>
<p v-html="header"></p>
    <h1>Vue Template </h1>
    <h1 v-once>{{name}}</h1>
     <h1>{{name}}</h1>
    <button v-on:click="holo">hi</button>
    <p>{{38*5}}</p>
    <h1>{{ok?"yes":"no"}}</h1>
    <button v-bind:disabled=" btnDisable" v-on:click="holo">hi</button>

</template>

<script>

export default {
    name:"Temp",
data(){
    return{
        name:"HI EVERYONE",
        ok:true,
        header:"<h>header add using html tags</h>",
         btnDisable:true
    }
},
methods:{
    holo(){
        alert("getting start vue"),
        this.name="Thej",
        this.ok=!this.ok
       
    }
}


}
</script>