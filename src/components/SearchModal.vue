<template>
  <div class="modal">
    <p>This is a Modal</p>
    <font-awesome-icon icon="check-square" size="2x" />
    <font-awesome-icon icon="window-close" size="2x" @click="addToQueue()" />

  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindowClose, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faWindowClose, faCheckSquare);


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
      Api.post('album',this.album)
         .then(r => Api.post('queue', {item_type: 'album', item_id: r.data["id"], contributor: 'self', status: 'active'}));
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal{
    border: 0.5em black solid;
    border-radius: 1em;
    padding: 1em;
    width: 30%;
    display:block;
    margin-left: auto;
    margin-right: auto;

}

font-awesome-icon{
    margin: 20px;
}
</style>