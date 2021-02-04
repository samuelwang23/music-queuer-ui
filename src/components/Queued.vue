<template>
  <div class="queue-wrapper">
    <tr class="queue-item">
        <th>  </th>
        <th>  </th>
        <th> <span class="order"> # </span> </th>
        <th>  </th>
        <th> Album Title </th>
        <th> Artist </th>
        <th> Release date </th> 
        <th> </th> 
    </tr> 
    <queue-item v-for="item in orderedQueue" :item="item" :key="item.id" @up="up" @down="down" @remove="remove"/>    
  </div>
  
</template>

<script>
import Api from '../utils/api.js';
import QueueItem from './QueueItem.vue';
import _ from 'lodash';

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
    },
    up(item){
      let current = item.position - 1, swap = item.position - 2;
      [this.queue.queue_item[swap].position, this.queue.queue_item[current].position] = [this.queue.queue_item[current].position, this.queue.queue_item[swap].position];
      Api.put("queue", this.queue).then(result => {
        this.queue = result.data["queue"];
      });    
    },
    down(item){
      let current = item.position - 1, swap = item.position;
      let a = 
      [this.queue.queue_item[swap].position, this.queue.queue_item[current].position] = [this.queue.queue_item[current].position, this.queue.queue_item[swap].position];
      Api.put("queue", this.queue).then(result => {
        this.queue = result.data["queue"];
      });
    },
    remove(item){
      this.queue["queue_item"][item.position-1]["delete_date"] = new Date();
      Api.put("queue", this.queue).then(result => {
        this.queue = result.data["queue"];
      });
    },
  },
  created(){
    Api.get("queue/08439056572F11EBB62338002586822D").then(result => {
      this.queue = result.data["queue"];
      });
  },
  data: function(){
    return {
      queue: [],
    };
  }, 
  computed:{
    orderedQueue: function () {
      return _.orderBy(this.queue.queue_item, 'position')
    },
  }
}


</script>
    

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .queue-wrapper{
        display: inline-block;
    }
</style>
