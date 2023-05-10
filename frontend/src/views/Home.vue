<template>
  <div class="home">
    <SongsList v-if="state.songs.code === 200" title="Top 50 Songs 2022 Year" :songs="state.songs.data.slice(0, 4)"/>
    <SongsList v-if="state.songs.code === 200" title="Top 10 Hit Songs 2023 Year" :songs="state.songs.data.slice(4, 8)"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import SongsList from "@/components/SongsList.vue";
import appService from "@/services/appService";

export default defineComponent({
  name: "Home",
  components: {
    SongsList,
  },

  setup() {
    let state: any = reactive({
      songs: [],
      topSongsEachYear: {},
      hitSongsEachYear: {},
    })

    onMounted(() => {
      loadSongs()
    })

    // Methods........
    const loadSongs = async () => {
      state.songs = await appService.songsList();
    }

    return { state };
  },
});
</script>