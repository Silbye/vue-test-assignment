<template>
  <div class="top-bar">
    <div class="container">
      <router-link class="logo-link" to="/"
        ><img src="./assets/logo.png" alt=""
      /></router-link>
      <SearchComponent />
    </div>
  </div>
  <router-view />
</template>
<script>
import SearchComponent from "./components/SearchComponent.vue";
export default {
  components: {
    SearchComponent,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
</style>
