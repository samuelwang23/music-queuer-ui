<template>
  <div class="search-wrapper">
      <input type="text" v-model="search" :placeholder=placeholder @change="find"/>
  </div>
  <div class="search-results">
    <search-result v-for="result in results" :album="result" :key="result.artist"/>
  </div>
</template>

<script>
import SearchResult from './SearchResult.vue';
import Api from '../utils/api.js';
export default {
  name: 'Search', 
 
  components: {
    SearchResult,
  },
  methods:{
    find(){
      if(this.search.length > 3){
        Api.get("search?q="+this.search).then(result => this.results = result.data);
      }
    },
  },
  data: function(){
    return {
      search: "",
      results: []
    };
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
    flex-wrap: wrap;
  }

  input{
    width: 50%;
    font-size: 1.5em;
  }
</style>
