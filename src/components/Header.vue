<template>
  <div id="title">{{$store.getters.headerName }}</div>
</template>
<script>
export default {
  name: "titleHeader"
};
</script>
<style lang="less" scoped>
#title {
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}
</style>