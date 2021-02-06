<template>
  <header id="header">
    <el-menu :default-active="activeIndex" class="el-menu-style" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">日志</el-menu-item>
      <el-menu-item index="2">画廊</el-menu-item>
      <el-menu-item index="3">家务</el-menu-item>
      <el-menu-item index="4">事业</el-menu-item>
    </el-menu>
  </header>
</template>

<script>
import { ref } from 'vue'
import { ElMenu, ElMenuItem } from 'element-plus'
export default {
  name: 'NavBar',
  components: {
    ElMenu,
    // ElSubmenu,
    ElMenuItem
  },
  setup(){
    // 导航栏
    const activeIndex = ref('1')

    return { activeIndex }
  }
}
</script>

<style lang="less" scoped>
  #header {
    width: 100%;
    height: 4rem;
    background-color: #fff;
  }
  .el-menu-style{
    width: 90%;
    height: 100%;
    margin: auto;
  }
</style>