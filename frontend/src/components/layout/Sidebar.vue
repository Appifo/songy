<template>
  <div class="side-bar">
    <div class="menu">

      <!-- Playlist -->
      <router-link to="/" class="nav-link">
        <div class="menu-icon"><i class="fa fa-list-ul"></i></div>
        <h1 class="title">Playlist</h1>
      </router-link>

      <!-- Browse -->
      <router-link to="/browse" class="nav-link">
        <div class="menu-icon"><i class="fa fa-th"></i></div>
        <h1 class="title">Browse</h1>
      </router-link>

      <!-- Favorites -->
      <router-link to="/favorite" class="nav-link">
        <div class="menu-icon"><i class="fa fa-light fa-heart"></i></div>
        <h1 class="title">Favorites</h1>
      </router-link>

    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
  components: {},
});
</script>

<style scoped>
.side-bar {
  width: 350px;
  height: 100vh;
  padding: 50px 25px;
  color: var(--primary);
  border-right: 2px solid var(--medium);
}

.nav-link {
  margin-top: 20px;
  margin-bottom: 20px;
  color: var(--primary);
  text-decoration: none;
  display: flex;
  align-items: center;
}

.title {
  font-size: 18px;
  font-weight: 500;
}

.menu-icon {
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 18px;
  color: var(--tertiary);
  background: var(--primary);
  margin-right: 15px;
}

.active-nav-link .title {
  color: var(--light);
}

.active-nav-link .menu-icon {
  color: var(--tertiary);
  opacity: 0.6;
}
</style>