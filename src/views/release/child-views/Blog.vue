<template>
  <el-form ref="form" :model="formData" label-width="80px">
    <el-form-item label="标题">
    <el-input v-model="formData.name" placeholder="输入标题"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input type="textarea" :rows="5" v-model="formData.desc" placeholder="输入内容描述"></el-input>
    </el-form-item>
    <el-form-item label="标签">
      <el-tag
        :key="tag"
        v-for="tag in formData.tags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag.desc}}<span>&yen;{{tag.money}}</span>
      </el-tag>
      <el-button class="button-new-tag" size="small" @click="showInput">+ 添加标签</el-button>
    </el-form-item>
    <el-form-item label="上传图片">
      <el-upload
        action="http://127.0.0.1/testing/index.php"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :file-list="formData.files"
        >
        <i class="el-icon-plus"></i>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="blog-submit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive } from 'vue'
import { ElForm, ElFormItem, ElInput, ElTag, ElButton, ElUpload, ElMessage } from 'element-plus'
export default {
  name: "Blog",
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElTag,
    ElButton,
    ElUpload
  },
  setup() {
    // 表单内容
    let formData = reactive({
      name: '',
      desc: '',
      tags: [
        { 
          id: 1,
          type: '类别1',
          desc: '机票',
          money: 1000,
          account: '招商'
        },
        { 
          id: 2,
          type: '类别2',
          desc: '早茶',
          money: 100,
          account: '支付宝'
        }
      ],
      files: [
        { 
          url: 'http://oss.byone.top/o_1dmdfurov7661b9m1t7le201orba.jpeg'
        },
        {
          url: 'https://www.tietu8.com/uploads/allimg/c210203/1612345414O0-1215X.jpg'
        }
      ]
    })


    // 删除图片
    function handleRemove(file) {
        console.log(file);
    }

    // 上传失败
    function handleError() {
      ElMessage.error('图片上传错误');
    }

    // 上传成功
    function handleSuccess() {
      ElMessage.success('图片上传成功');
    }

    return { formData, handleRemove, handleError, handleSuccess }
  }
}
</script>

<style lang="less" scoped>
  .el-tag{
    cursor: pointer;
    +.el-tag {
      margin-left: 10px;
    }
    span{
      margin-left: 5px;
    }
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .blog-submit{
    padding: 0 3rem;
  }
</style>