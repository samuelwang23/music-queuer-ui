<template>
  <div class="card">
    <div>
      <figure>
        <img :src=album.art :alt=album.title >       
     </figure>
   </div>
    <div class="result-text">
      <div>
        <div>
          <div><a>{{album.title}}</a></div>
          <div>
            {{album.artist}}<br>
            <span class="release-date">Released {{album.release}}</span>
          </div>
        </div>
        <div>
          <font-awesome-icon icon="plus-circle" @click="addToQueue()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlusCircle);

import Api from '../utils/api.js';

export default {
  name: 'SearchResult',
  props: {
    album: Object,
  },
  components: {
    FontAwesomeIcon
  },
  methods:{
    addToQueue(){
      Api.post("album?cover="+this.album.art+"&link="+this.album.link+"&release="+this.album.release);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .result-text{
    border: 3px black solid;
  }
  .release-date{
    color: grey;
  }
  .card{
    flex: 1;
    padding: 1em;
    display: block;
  }
</style>