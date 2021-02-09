<template>
  <div class="tool-bar">
    <div class="search">
      <el-input
        placeholder="请输入内容"
        v-model="value">
        <template #prefix>
          <i class="el-input__icon el-icon-search"></i>
        </template>
      </el-input>
      <el-button type="primary" class="search-start">搜索</el-button>
    </div>
     <el-button @click="goto" type="success">新日志</el-button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { ElInput, ElButton } from 'element-plus'
import { useRouter } from 'vue-router';
export default {
  components: {
    ElInput,
    ElButton
  },
  setup() {
    // 搜索
    let value = ref('')

    // 跳转发布
    const router = useRouter();
    function goto() {
      router.push('/release')
    }
    return { value, goto }
  }
}
</script>

<style lang="less" scoped>
  .tool-bar{
    width: 100%;
    display: flex;
    background-color: @theme-color;
    padding: .6rem 0;
    justify-content: center;
  }
  .search{
    display: flex;
    width: 80%;
    padding: 0 .5rem;
    .search-start{
      margin-left: .6rem;
    }
  }
</style>