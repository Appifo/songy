<template>
  <div class="song-card">
    <img :src="props.song.thumbnail" alt="img" />
    <div class="song-info">
      <h1 class="title">{{ props.song.title }}</h1>
      <div class="info">
        <h2 class="subtitle">{{ props.song.singer }}</h2>
        <h2 class="subtitle">{{ props.song.duration }}</h2>
      </div>
    </div>
  </div>
</template>
    
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SongCard",
  props: {
    song: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    return {props}
  }
});
</script>
  
  <style scoped>
.song-card {
  width: 225px;
  height: 290px;
  padding: 15px;
  cursor: pointer;
  color: var(--light);
  background: var(--primary);
  border-radius: 15px;
}

.song-card img {
    width: 100%;
    height: 205px;
    border-radius: 15px;
}

.title {
    padding: 5px 0;
    font-size: 18px;
    font-weight: 500;
}

.subtitle {
    font-size: 11px;
    font-weight: 500;
}

.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>