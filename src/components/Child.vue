<template>
  <div>
    <button v-on:click="updateTitle">JUST</button>
  </div>
</template>

<script>
export default {
  name: "Child",

  methods: {
    updateTitle() {
      this.$emit("changetitle", "holoo all");
    },
  },
 
  created: function () {
    console.warn("created");
  },
  beforeMount: function () {
    console.warn("before mount");
  },
  mounted: function () {
    console.warn("mounted");
  },
  beforeUpdate: function () {
    console.warn("before update");
  },
  updated: function () {
    console.warn('updated')
  },
   beforeCreate: function () {
    console.warn("before create");
  },
  
};
</script>