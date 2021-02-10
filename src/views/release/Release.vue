<template>
  <div class="release">
    <div class="rel-tool">
      <el-button class="back" @click="back">返回</el-button>
      <el-button-group>
        <el-button :type="0 == display ? 'primary' : 'default'" @click="toggle(0)">日志</el-button>
        <el-button :type="1 == display ? 'primary' : 'default'" @click="toggle(1)">作品</el-button> 
        <el-button :type="2 == display ? 'primary' : 'default'" @click="toggle(2)">菜谱</el-button>
      </el-button-group>
    </div>
    <div class="form">
      <router-view  v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElButton, ElButtonGroup } from 'element-plus'
export default {
  components: {
    ElButton,
    ElButtonGroup
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    // 退出
    function back(){
      router.back()
    }
    // 切换表单
    let display = ref(route.meta.id)
    function toggle(id){
      console.log(id,route.meta);
      switch (id) {
        case 0:
          display.value = 0
          router.replace('/release/blog')
          break;
        case 1:
          display.value = 1
          router.replace('/release/works')
          break;
        case 2:
          display.value = 2
          router.replace('/release/recipes')
          break;
        default:
          display.value = 0
          router.replace('/release/blog')
          break;
      }
    }
    return { display, toggle, back }
  }
}
</script>

<style lang="less" scoped>
  .release{
    width: 90%;
    background-color: @theme-color;
    padding: 1rem;
    margin: 1.5rem auto;
    .rel-tool{
      width: 100%;
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      .back{
        position: absolute;
        left: 0;
        top: 0;
      }
    }
    .form{
      margin: auto;
      margin-top: 2rem;
      width: 80%;
    }
  }
</style>