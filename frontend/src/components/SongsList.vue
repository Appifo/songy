<template>
  <div class="songs-list">
    <div class="list-header">
      <h1 class="title">{{ props.title }}</h1>
      <router-link to="" class="link">See all</router-link>
    </div>
    <div class="list-content">
      <SongCard v-for="song in props.songs" :key="song._id" :song="song"/>
    </div>
  </div>
</template>
    
<script lang="ts">
import { computed, defineComponent } from "vue";
import SongCard from "./SongCard.vue";

export default defineComponent({
  name: "SongsList",
  components: {
    SongCard,
  },
  props: {
    title: String, 
    pageLink: String,
    songs: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  setup(props) {
    return { props }
  }
});
</script>
  
  <style scoped>
.songs-list {
  width: 100%;
  margin-top: 40px;
  color: var(--primary);
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.title {
  font-size: 20px;
  font-weight: 700;
}

.list-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  color: var(--primary);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}
</style>