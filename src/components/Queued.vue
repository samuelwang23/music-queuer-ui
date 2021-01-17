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
    <queue-item v-for="item in items" :item="item" :key="item.id" @up="up" @down="down"/>    
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
    },
    up(item){
      let a = Math.max(item.position - 2, 0), b = item.position - 1;
      [this.items[b], this.items[a]] = [this.items[a], this.items[b]];
      this.items[a].position = a + 1,this.items[b].position = b + 1;
      this.queue["queue_item"] = this.items;
      Api.put("queue", this.queue);
    },
    down(item){
      let a = Math.min(item.position, this.items.length - 1), b = item.position - 1;
      [this.items[b], this.items[a]] = [this.items[a], this.items[b]];
      this.items[a].position = a + 1,this.items[b].position = b + 1;
      this.queue["queue_item"] = this.items;
      Api.put("queue", this.queue);
    }
  },
  created(){
    Api.get("queue/0x08439056572f11ebb62338002586822d").then(result => {
      this.queue = result.data[0];
      //this.queue[0]["queue_item"]; 
      this.items = this.queue["queue_item"].sort((a1, a2) => a1.position < a2.position ? -1: 1);
      console.log(this.items);
      });
  },
  data: function(){
    return {
      queue: [],
      items: [],
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
