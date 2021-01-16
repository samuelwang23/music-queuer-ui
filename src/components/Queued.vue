<template>
  <div class="queue-wrapper">
    
    <tr class="queue-item">
        <th>  </th>
        <th> <span class="order"> # </span> </th>
        <th>  </th>
        <th> Album Title </th>
        <th> Artist </th>
        <th> Release date </th> 
        <th> </th> 
    </tr> 
    
    <queue-item v-for="result in results" :item="result" :key="result.position"/>
  </div>
  
</template>

<script>
import Api from '../utils/api.js';
import QueueItem from './QueueItem.vue';

export default {
  name: 'Queue', 
 
  components: {
      QueueItem,
  },
  methods:{
    compare(){
      return function(a, b) {    
        if (a.position > b.position) {    
            return 1;    
        } 
        else if (a.position < b.position) {    
            return -1;    
        }    
        return 0;    
      };
    }
  },
  created(){
    Api.get("queue/0x08439056572f11ebb62338002586822d").then(result => this.results = result.data[0]["queue_item"].sort((a1, a2) => a1.position < a2.position ? -1: 1));
  },
  data: function(){
    return {
      results: [],
    };
  }, 
}


</script>
    

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .queue-wrapper{
        display: inline-block;
    }
</style>
