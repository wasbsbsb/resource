<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  watch: {
    $route(to) {
      this.$store.dispatch("changeHeaderName", to.name);
    }
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  font-size: 14px;
  color: #336c;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
