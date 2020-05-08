<template>
  <div class="Relation">
    <div class="item" v-for="e in list" :key="e.code">{{e.name}}</div>
  </div>
</template>

<script>
export default {
  name: "Relation",
  data() {
    return {
      list: [
        {
          code: "fwwf",
          name: "zlc"
        },
        {
          code: "fwwsf",
          name: "zl"
        },
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.Relation {
  width: 100%;
  height: 100%;

  .item {
    height: 30px;
    padding: 8px 32px;
    background: #ccc;
  }
}
</style>