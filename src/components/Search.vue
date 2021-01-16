<template>
  <div class="search-wrapper">
      <input type="text" v-model="search" :placeholder=placeholder @input="find" @keydown.enter="isOpen = false" @keydown.esc="isOpen = false" />
  </div>
  <div class="search-results">
    <search-result v-for="result in results" :album="result" :key="result.artist"/>
  </div>
</template>

<script>
import SearchResult from './SearchResult.vue';
import Api from '../utils/api.js';
import _debounce from 'lodash.debounce';

export default {
  name: 'Search', 
 
  components: {
    SearchResult,
  },
  computed:{
    debounceChange(){
      return _debounce(this.find, 500);
    }
  },
  methods:{
    find(){
      if(this.search.length > 0){
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
