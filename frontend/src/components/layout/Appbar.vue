<template>
  <div class="app-bar">
    <div class="navs">
      <input type="text" placeholder="Search">
      <img src="@/assets/images/account.jpg" alt="account" class="account">
    </div>
  </div>
</template>
    
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Appbar",
  components: {},
});
</script>
  
  <style scoped>
.app-bar {
  width: 100%;
  padding: 30px 80px;
}

.navs {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navs input {
  width: 40%;
  height: 40px;
  border: none;
  outline: none;
  padding: 20px;
  font-size: 14px;
  border-radius: 12px;
}

.account {
  width: 50px;
  height: 50px;
  padding: 4px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid var(--primary);
}
</style>