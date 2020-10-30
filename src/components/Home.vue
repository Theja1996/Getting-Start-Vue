<template>
    <h1>hello vue home</h1>
    <h1>{{data}}</h1>
      <h1>{{msg}}</h1>
      <h1>{{msgA}}</h1>
      <button v-on:mouseOver="okey('my data')">ok</button> <br> <br> <br>
      <button v-on:click="okey('my data')">okey</button>
      <h1 v-if="show">if statement work correctly</h1>
      <h1 v-else>else statement work correctly</h1>
      <button v-on:click="display">woow</button>

</template>

<script>
export default {
    name: 'Home',
    props:{
        data: String,
        msg:String,
        msgA:String
    }, datas(){
            return{
                show:false,
            }
        },


    methods:{
        okey(item){
            alert("hi welcome vue")
            console.warn("hi welcome vue")
             console.warn(item)
        },
       
       display(){
            this.show=!this.show
        },

        }
        
       
        

    }

</script>