<template>
  <div>
    <el-button type="info" @click="loginOut">退出</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    loginOut() {
      window.sessionStorage.clear();
      this.$message("已退出登录");
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped></style>
