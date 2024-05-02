<script setup>
import utilities from '../Utils/utilities.js'
// import { RouterView } from 'vue-router'
import HomePage from './components/HomePage/Home-page.vue'

console.log('utilities', utilities)
</script>

<template>
  <div id="App-Container">
    <HomePage />
  </div>
</template>

<style scoped>
#App-Container {
  display: flex;
}

@media screen and (max-width: 990px) {
  #Container {
    display: block;
  }
}
</style>
