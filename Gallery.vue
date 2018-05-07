<template>
  <div>
    <h1>Gallery</h1>
    <p v-on:click="$router.push({name: 'top'})">{{txt}}(click to top)</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      txt: "hoge",
    }
  }
}
</script>

<style>
</style>
