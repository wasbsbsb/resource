<template>
  <div class="Chat">
    <div class="items"></div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.Chat {
  width: 100%;
  height: 100%;
  .items {
    height: 60px;
    background: chartreuse;
  }
}
</style>