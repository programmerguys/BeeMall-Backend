<template>
  <el-card class="account-container">
    <h1>系统简介</h1>
    <div style="line-height: 30px">
      蜜蜂商城是一套企业级后台管理系统，基于 Spring Boot 、Vue 3.0
    </div>
    <h1>技术选型</h1>
    <ul style="font-weight: bold">
      <li>Vue 3.x</li>
      <li>Vite 2.x</li>
      <li>Vue-Router 4.x</li>
      <li>Element-Plus（适配全新 Vue 3.x 的 PC 端组件库）</li>
      <li>Echarts 5.0</li>
      <li>axios</li>
      <li>wangEditor</li>
    </ul>
  </el-card>
</template>

<script setup>
const goJuejin = () => {
  console.log("goJuejin");
  window.open("https://juejin.cn/book/6933939264455442444", "target");
};
</script>
<style scoped>
.course {
  font-weight: bold;
  display: inline-block;
}
.course li {
  line-height: 36px;
  color: #409eff;
  cursor: pointer;
}
</style>
