<template>  
  
    <tr class="queue-item" >
        <td class = "controls"> <font-awesome-icon icon="caret-up" size="2x" /> <font-awesome-icon icon="caret-down" size="2x"/> </td>
        <td> <span class="order"> {{item.position}} </span> </td>
        <td> <img :src="album.cover" :alt="album.title"></td>
        <td> <a>{{album.title}}</a> </td>
        <td> <span class="artist-name"> {{album.artist}} </span> </td>
        <td> <span class="release-date">Released {{album.release}}</span> </td> 
        <td> <span class="addition-date"><em>Added to the queue on {{item.insert_date}} by {{item.contributor}}</em></span> </td> 
        <td> <a :href="album.link"  target="_blank"><img src="../assets/Spotify_Icon_RGB_Green.png" alt=""/></a></td>
    </tr>
    
</template>

<script>
import Api from '../utils/api.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretUp);
library.add(faCaretDown);

export default {
  name: 'QueueItem',
  props: {
    item: Object,
  },
  components: {
    FontAwesomeIcon
  },
  created (){
    Api.get(this.item.item_type+"/"+this.item.item_id).then(result => this.album = result.data);
  },
  data: function(){
    return {
      album: []
    };
  }, 
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
  .controls{
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
