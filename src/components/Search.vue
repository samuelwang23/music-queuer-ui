<template>
  <div class="search-wrapper">
      <input type="text" v-model="search" :placeholder=placeholder />
  </div>
  <div class="search-results">
      
  </div>
</template>

<script>

export default {
  name: 'Search',
 
  components: {
    
  },

   props: {
    placeholder: String,
  }
}
</script>
    

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
