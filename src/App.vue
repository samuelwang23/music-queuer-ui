<template>
  <font-awesome-icon icon="user-secret" />

  <Queue/>
  <font-awesome-icon icon="shopping-cart" />
  <Search placeholder="Search"/>
  
</template>

<script>

import Queue from './components/Queue.vue';
import Search from './components/Search.vue';
export default {
  name: 'App',
  components: {
    Queue,
    Search
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
