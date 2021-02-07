<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :lg="16" :xl="8">
        <tool-bar />
        <div class="content">
          <ul class="content-list">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </el-col>
      <el-col :lg="8" :xl="4">
        <div class="content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { ElRow, ElCol } from 'element-plus'
import ToolBar from './components/ToolBar'
export default {
  name: 'Home',
  components: {
    ElRow,
    ElCol,
    ToolBar
  },
  setup() {

  }
}
</script>

<style lang="less" scoped>
  .home {
    padding: 1rem;
  }
  .content {
    background-color: @theme-color;
    .content-list{
      padding: .5rem 0;
      li{
        width: 90%;
        height: 150px;
        background: #fff;
        border-radius: 10px;
        margin: auto;
        margin-bottom: .5rem;
        box-shadow: 0 0 10px #eee;
      }
    }

  }
  
</style>