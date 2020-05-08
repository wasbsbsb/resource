<template>
  <div class="box">
    <div
      class="box_item"
      @click="linkTo(e)"
      v-for="e in $store.getters.footerLink"
      :key="e.name"
    >{{e.name}}</div>
  </div>
</template>


<script>
export default {
  name: "Footer",
  methods: {
    linkTo(e) {

      this.$router.push({
        path: e.path
      });
    }
  }
};
</script>

<style lang="less" scoped>
@boxHeight: 60px;

.box {
  height: @boxHeight;
  display: flex;

  .box_item {
    flex: 1;
    line-height: @boxHeight;
    text-align: center;
  }
}
</style>