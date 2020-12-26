<template>
  <div class="card">
    {{album.artist}}

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
