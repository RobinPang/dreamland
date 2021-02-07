<template>
  <div class="tool-bar">
    <el-select v-model="value" placeholder="请选择" class="tool-select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { ref } from 'vue'
import { ElSelect, ElOption } from 'element-plus'
export default {
  components: {
    ElSelect,
    ElOption
  },
  setup() {
    // 日期选项
    let options = ref([
      {
        value: '选项1',
        label: '2020年12月'
      }, {
        value: '选项2',
        label: '2020年11月'
      }, {
        value: '选项3',
        label: '2020年10月'
      }, {
        value: '选项4',
        label: '2020年9月'
      }, {
        value: '选项5',
        label: '2020年8月'
      }
    ])
    let value = ref('选项1')
    return { options, value }
  }
}
</script>

<style lang="less" scoped>
  .tool-bar{
    width: 100%;
    display: flex;
    background-color: @theme-color;
    padding: .6rem 0;
  }
  .tool-select{
    margin-left: 1rem;
  }
</style>