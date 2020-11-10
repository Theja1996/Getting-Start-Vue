<template>
    <div>
<input type="text" v-model="Log.username" placeholder="username" /><br><br>
<input type="password" v-model="Log.password" placeholder="password" /><br><br>
<button v-on:click="getLog">Login</button>


    </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            Log:{
                username:null,
                password:null

            }
        }
    },
    methods:{
        getLog(){
            console.log('get data',this.Log.username,this.Log.password)
        }
    }
}
</script>