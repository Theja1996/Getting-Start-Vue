<template >
  <div class="init">
    <h1>Welocome sreen</h1>
    <User />
    <Admin />
  </div>
</template>

<script>
import User from "./user"
import Admin from "./admin"
export default {
    name:"Welcome",

    components:{
        User,
        Admin
    }
}
</script>

<style scoped>
.init {
  background-color: aqua;
  height: 900px;
}
</style>