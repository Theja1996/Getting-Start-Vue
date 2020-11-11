<template>
  <div>
      <p v-if="error.length">
          <b>plz correct the following errors</b>
          <ul v-for="e in error" v-bind:key="e.id">
              <li>{{e}}</li>
          </ul>




      </p>
    <form @submit="login">
      <input type="text" placeholder="name" v-model="name" /><br /><br />
      <input type="password" placeholder="password" v-model="password" /><br /><br />
      <button type="submit">submit</button>
    </form>
    <br /><br />

    <input
      type="text"
      v-model="Log.username"
      placeholder="username"
    /><br /><br />
    <input
      type="password"
      v-model="Log.password"
      placeholder="password"
    /><br /><br />
    <button v-on:click="getLog">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      Log: {
        username: null,
        password: null,
      },
      
      error: [],
      name: null,
      password: null,
    
    };
  },
  methods: {
    getLog() {
      console.log("get data", this.Log.username, this.Log.password);
    },
    login(e) {
      if (this.name && this.password) {
        console.log("submit data");
      }
      this.error = [];
      if (!this.name) {
        this.error.push("name is required");
      }
      if (!this.password) {
        this.error.push("password is required");
      }
      console.warn("errors", this.error);
      e.preventDefault();
    },
  },
};
</script>