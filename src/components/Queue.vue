<template>
  <div class="queue-wrapper">
    <tr class="queue-item">
        <th> <span class="order"> # </span> </th>
        <th>  </th>
        <th> Album Title </th>
        <th> Artist </th>
        <th> Release date </th> 
        <th> </th> 
    </tr> 
    <QueueItem 
        :album="{
            art: 'https://2.imimg.com/data2/XY/WO/MY-769630/chlorophlly-green-colour-oil-soluble-250x250.jpg',
            title: 'Album Title',
            artist: 'Artist Name',
            release: '12.20.2020',
        }"
        
        added="12.24.2020"
        position="1"
        contributor="John Doe"
    />
    <QueueItem 
        :album="{
            art: 'https://2.imimg.com/data2/XY/WO/MY-769630/chlorophlly-green-colour-oil-soluble-250x250.jpg',
            title: 'Album Title',
            artist: 'Artist Name',
            release: '12.20.2020',
        }"
        added="12.24.2020"
        position="2"
        contributor="John Doe"
    />
  </div>
</template>

<script>

import QueueItem from './QueueItem.vue';

export default {
  name: 'Queue', 
 
  components: {
      QueueItem,
  },

   props: {
  }
}
</script>
    

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .queue-wrapper{
        display: inline-block;
    }
</style>
