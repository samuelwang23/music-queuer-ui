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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.search-result{
    height: 20px;
}

.grid-container {
    
  display: grid;
  grid-template-columns: 0.3fr 1.2fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Image Text";
  width: 50%;
  margin: auto;
}


.Image { grid-area: Image; }

img{
    display: block;
    width: 100;
    margin: auto;
}

.Text {
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-rows: 0.8fr 0.3fr 1.9fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . ."
    ". Title Add"
    ". Subdata .";
  grid-area: Text;
  
}

.Title { 
    grid-area: Title; 
    font-size: 4em;
}

.Subdata { grid-area: Subdata; }

.Add { grid-area: Add; }

</style>
