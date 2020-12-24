<template>  
    <tr class="queue-item">
        <td> <img :src=album.art :alt=album.title> </td>
        <td> <a>{{album.title}}</a> </td>
        <td> <span class="artist-name"> {{album.artist}}</span> </td>
        <td> <span class="release-date">Released {{album.release}}</span> </td> 
        <td> <span class="addition-date">Added to the queue {{added}}</span> </td> 
    </tr> 
</template>

<script>

export default {
  name: 'QueueItem',
  props: {
    album: Object,
    added: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .queue-item{
    border: 1em black solid;
  }
  td{
      padding: 1em;
      vertical-align: middle;
  }

  img{
      height: 50px;
  }
</style>
