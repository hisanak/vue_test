<template>
  <div>
    <h1 v-on:click="$router.push({name: 'gallery'})">Hello World(click to gallery)</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
    }
  },
  mounted() {
    console.log("Top");
  },
  methods: {
  }
}
</script>

<style>

</style>

