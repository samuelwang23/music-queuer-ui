<template>
  <div class="search-wrapper">
      <input type="text" v-model="search" :placeholder=placeholder />
  </div>
  <div class="search-results">
   <SearchResult 
    :album="{
      art: 'https://2.imimg.com/data2/XY/WO/MY-769630/chlorophlly-green-colour-oil-soluble-250x250.jpg',
      title: 'Album Title',
      artist: 'Artist Name',
      release: '12.20.2020'
    }" 
    />
    <SearchResult 
    :album="{
      art: 'https://2.imimg.com/data2/XY/WO/MY-769630/chlorophlly-green-colour-oil-soluble-250x250.jpg',
      title: 'Album Title',
      artist: 'Artist Name',
      release: '12.20.2020'
    }" 
    />
    <SearchResult 
    :album="{
      art: 'https://2.imimg.com/data2/XY/WO/MY-769630/chlorophlly-green-colour-oil-soluble-250x250.jpg',
      title: 'Album Title',
      artist: 'Artist Name',
      release: '12.20.2020'
    }" 
    />
    <SearchResult 
    :album="{
      art: 'https://2.imimg.com/data2/XY/WO/MY-769630/chlorophlly-green-colour-oil-soluble-250x250.jpg',
      title: 'Album Title',
      artist: 'Artist Name',
      release: '12.20.2020'
    }" 
    />
    
  </div>
</template>

<script>
import SearchResult from './SearchResult.vue';
export default {
  name: 'Search',
 
  components: {
    SearchResult
  },

   props: {
    placeholder: String,
  }
}
</script>
    

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search-results{
    display: flex;
  }
  input{
    width: 50%;
    font-size: 1.5em;
  }
</style>
