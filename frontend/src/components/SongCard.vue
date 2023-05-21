<template>
  <div class="song-card">
    <div class="show-play-control" v-show="showOnHover" @click="playSong()">
      <i class="fa fa-light fa-play btn"></i>
    </div>
    <img :src="props.song.thumbnail" alt="img" @mouseenter="showOnHover = true" @mouseleave="showOnHover = false"/>
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
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "SongCard",
  props: {
    song: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    let showOnHover = ref(false)

    const playSong = async () => {
    }

    return { props, showOnHover, playSong };
  },
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
  position: relative;
}

.song-card img {
  width: 100%;
  height: 205px;
  border-radius: 15px;
}

.show-play-control {
  width: 200px;
  height: 205px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.show-play-control i {
  font-size: 36px;
  font-weight: 700;
  color: var(--primary);
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