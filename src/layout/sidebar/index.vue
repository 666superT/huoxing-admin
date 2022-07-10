<template>
  <div class="sidebar">
    <div class="menuHeader">
      <img src="https://cn.vuejs.org/images/logo.svg" alt="" />
      <h2>admind</h2>
    </div>
    <menu-tree></menu-tree>
  </div>
</template>

<script setup>
import MenuTree from './MenuTree'
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  background: #001529;
  .menuHeader {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    align-items: center;
    box-sizing: border-box;
    img {
      width: 40px;
    }
    h2{
      font-size: 30px;
      color: #fff;
    }
  }
}
</style>
