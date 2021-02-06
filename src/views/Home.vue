<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :lg="16" :xl="8">
        <div class="color"></div>
      </el-col>
      <el-col :lg="8" :xl="4">
        <div class="color"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { ElRow, ElCol } from 'element-plus'

export default {
  name: 'Home',
  components: {
    ElRow,
    ElCol
  },
  setup() {

  }
}
</script>

<style lang="less" scoped>
  .home {
    padding: 1rem;
  }
  .color {
    background-color: #fff;
    height: 500px;
    margin-top: .5rem;
  }
</style>