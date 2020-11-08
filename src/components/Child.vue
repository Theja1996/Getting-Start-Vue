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
};
</script>