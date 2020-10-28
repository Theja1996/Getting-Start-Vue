<template>
    <h1>hello vue home</h1>
    <h1>{{data}}</h1>
      <h1>{{msg}}</h1>
</template>

<script>
export default {
    name: 'Home',
    props:{
        data: String,
        msg:String
    }
}
</script>