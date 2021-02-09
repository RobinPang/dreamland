<template>
  <div class="time-line">
    <el-tree 
    :data="data"
    @node-click="handleNodeClick"
    >
    </el-tree>
  </div>
</template>

<script>
import { ref } from 'vue'
import { ElTree } from 'element-plus'
export default {
  components: {
    ElTree
  },
  setup() {
    // 时间归档
    let data = ref([{
      label: '2021年',
      children: [{
        label: '12月',
      },{
        label: '11月'
      },{
        label: '10月'
      }]
    }, {
      label: '2020年',
      children: [{
        label: '12月',
      }]
    }])

    function handleNodeClick(data) {
        console.log(data);
    }


    return { data, handleNodeClick }
  }
}
</script>

<style lang="less" scoped>
  .time-line{
    padding: 1rem;
  }
</style>