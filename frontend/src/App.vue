<template>
  <div class="app">
    <Sidebar />
    <div class="main">
      <Appbar />
      <router-view style="width: 100%; height: 80vh; padding: 0 80px; overflow: auto;"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Appbar from "./components/layout/Appbar.vue";
import Sidebar from "./components/layout/Sidebar.vue";

export default defineComponent({
  name: "App",
  components: {
    Appbar,
    Sidebar,
  },
});
</script>
 
<style scoped>
.app {
  width: 100%;
  height: 100%;
  display: flex;
  user-select: none;
  background: var(--secondary);
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>