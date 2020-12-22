<template>
  <div class="card">
    <div>
      <figure>
        <img :src=album.art :alt=album.title >       
     </figure>
   </div>
    <div>
      <div>
        <div>
          <div><a>{{album.title}}</a></div>
          <div>
            {{album.artist}}<br>
            <em>Released {{album.release}}</em>
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

</style>
