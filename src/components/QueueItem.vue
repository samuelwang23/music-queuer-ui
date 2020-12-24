<template>  
    <tr class="queue-item">
        <td> <span class="order"> {{position}} </span> </td>
        <td> <img :src=album.art :alt=album.title> </td>
        <td> <a>{{album.title}}</a> </td>
        <td> <span class="artist-name"> {{album.artist}}</span> </td>
        <td> <span class="release-date">Released {{album.release}}</span> </td> 
        <td> <span class="addition-date"><em>Added to the queue on {{added}} by {{contributor}}</em></span> </td> 
    </tr> 
</template>

<script>

export default {
  name: 'QueueItem',
  props: {
    album: Object,
    added: String,
    position: String,
    contributor: String,
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
