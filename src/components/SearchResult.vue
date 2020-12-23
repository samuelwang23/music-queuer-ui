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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: {
    album: Object,
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
