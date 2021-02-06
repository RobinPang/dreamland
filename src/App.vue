<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1"
      ><router-link to="/">日志</router-link></el-menu-item>
    <el-menu-item index="2">画廊</el-menu-item>
    <el-submenu index="3">
      <template #title>家务</template>
      <el-menu-item index="3-1">日程</el-menu-item>
      <el-menu-item index="3-2">菜谱</el-menu-item>
      <el-menu-item index="3-3">购物</el-menu-item>
      <el-menu-item index="3-4">财务</el-menu-item>
    </el-submenu>
  </el-menu>
  <div class="line"></div>
  <el-row :gutter="10">
    <el-col :xs="17" :sm="17" :md="17" :lg="17" :xl="17"><div class="grid-content bg-purple"><router-view /></div></el-col>
    <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row>
  
</template>

<style lang="less">
body{
  padding: 0 50px 0 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.a1 {
  height: 60px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>
