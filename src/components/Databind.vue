<template>
<h1>hi with databinding</h1>
  <h1>{{ message }}</h1>
  <input type="text" v-model="message">

  <h1 style="white-space:pre-line">{{  clip }}</h1>
  <textarea type="text" v-model=" clip" />
</template>

<script>
export default {
    name:'Databind',
    data(){
        return{
            message:"hi ",
            clip:"hello"
        }
    }
}
</script>