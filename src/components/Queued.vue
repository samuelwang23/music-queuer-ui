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
  created(){
    Api.get("queue").then(result => this.results = result.data);
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
