<template>
  <div class="search-wrapper">
      <input type="text" v-model="search" :placeholder=placeholder @input="find" @keydown.enter="isOpen = false" @keydown.esc="isOpen = false" />
  </div>
  <div class="search-results">
    <search-result v-for="result in results" :album="result" :queue="queue" @selected="addToQueue" :key="result.i"/>
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
  async mounted(){
    //let {data} = await 
    Api.get('queue/08439056572F11EBB62338002586822D').then(response => this.queue = response.data.queue);
    //this.queue = data[0];
    console.log(this.queue);
  },
  methods:{
    find(){
      if(this.search.length > 0){
        Api.get("search?q="+this.search).then(result => this.results = result.data);
      }
    },
    addToQueue(album, contributor){
      Api.post('album', album)
        .then(r => {
          this.queue.queue_item.push( {item_type: 'album', item_id: r.data["id"], contributor: contributor, status: 'active'} );
          Api.put("queue", this.queue).then(r => console.log(r));
        });
    },
  },
  data: function(){
    return {
      search: "",
      results: [],
      queue: [],
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
