<template>
  <div class="card">
    <div>
      <figure>
        <img :src=album.cover :alt=album.title >       
     </figure>
   </div>
    <div class="add-text" v-if="adding == true">
      <p>Add "{{album.title}}" to queue?</p>
      <div>
        <label> Contributor: </label>
        <input placeholder="Contributor" v-model="contributor"/>
      </div>
      <div class = "icons">
        <font-awesome-icon icon="check-square" size="2x" @click="$emit('selected', album, contributor); adding=false;" />
        <font-awesome-icon icon="window-close" size="2x" @click="closeAdd()" />
      </div>

    </div>
    <div class="result-text" v-else>
      <div>
        <div>
          <div><a>{{album.title}}</a></div>
          <div>
            {{album.artist}}<br>
            <span class="release-date">Released {{album.release}}</span>
          </div>
        </div>
        <div>
          <font-awesome-icon icon="plus-circle" size="2x" @click="openAdd()" />
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle,faWindowClose, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlusCircle, faWindowClose, faCheckSquare);

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
      this.closeAdd();
    },
    openAdd(){
      this.adding = true;
    },
    closeAdd(){
      this.adding = false;
    }
  },
  data: function(){
    return {
      adding: false,
      contributor: "",
      queue: [],
    };
  },
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
  svg{
    margin: 5px;
  }
</style>