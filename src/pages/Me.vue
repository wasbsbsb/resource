<template>
  <div>
    <h4 @click="linkto('register')">注册</h4>
    <h4 @click="linkto('login')">登录</h4>
  </div>
</template>

<script>
export default {
  name: "MeDetail",
  data() {
    return {};
  },
  methods: {
    linkto(e) {
      this.$store.dispatch(
        "changeHeaderName",
        e === "register" ? "注册" : "登录"
      );

      e === "register"
        ? this.$router.push({ path: "/register" })
        : this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style lang="less" scoped>
</style>