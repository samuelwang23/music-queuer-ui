<template>
  <div class="queue-wrapper">
    <QueueItem 
        :album="{
            art: 'https://2.imimg.com/data2/XY/WO/MY-769630/chlorophlly-green-colour-oil-soluble-250x250.jpg',
            title: 'Album Title',
            artist: 'Artist Name',
            release: '12.20.2020',
        }"
        added="12.24.2020"
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
  
  
</style>
