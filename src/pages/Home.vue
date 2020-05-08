<template>
  <div class="indexPage">
    <Header />

    <div class="content">
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  name: "indexPage",
  data() {
    return {};
  },
  components: {
    Footer,
    Header
  }
};
</script>

<style lang="less" scoped>
.indexPage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    overflow: auto;
  }
}
</style>