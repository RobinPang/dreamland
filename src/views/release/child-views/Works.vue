<template>
  <el-form ref="form" :model="formData" label-width="80px">
    <el-form-item label="标题">
    <el-input v-model="formData.title" placeholder="输入标题"></el-input>
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
        #{{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="tags.inputVisible"
        v-model="tags.inputValue"
        size="small"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加标签</el-button>
    </el-form-item>
    <el-form-item label="上传图片">
      <el-upload
        action="http://127.0.0.1/testing/index.php"
        list-type="picture-card"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :on-error="handleError"
        :file-list="formData.files"
        >
        <i class="el-icon-plus"></i>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="blog-submit" @click="sendData">提交</el-button>
    </el-form-item>
  </el-form>

  <el-dialog v-model="dialog.visible">
    <img :src="dialog.imgUrl" alt="预览图片" class="preview">
  </el-dialog>

</template>

<script>
import { reactive } from 'vue'
import { ElForm, ElFormItem, ElInput, ElTag, ElButton, ElUpload, ElMessage, ElDialog } from 'element-plus'
export default {
  name: "Works",
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElTag,
    ElButton,
    ElUpload,
    ElDialog
  },
  setup() {
    // 表单内容
    const formData = reactive({
      title: '',
      desc: '',
      tags: ['阿这','是谁','写的一堆','Bug'],
      files: [
        { 
          uid: 0,
          url: 'http://oss.byone.top/o_1dmdfurov7661b9m1t7le201orba.jpeg',
          status: 'success'
        },
        {
          uid: 0,
          url: 'https://www.tietu8.com/uploads/allimg/c210203/1612345414O0-1215X.jpg',
          status: 'success'
        }
      ]
    })

    // 图片预览弹窗
    const dialog = reactive({
      visible: false,
      imgUrl: ''
    })
    // 标签
    const tags = reactive({
      inputVisible: false,
      inputValue: ''
    })
    // 显示添加标签框
    function showInput(){
      tags.inputVisible = true
    }
    // 添加标签
    function handleInputConfirm() {
      if(tags.inputValue){
        formData.tags.push(tags.inputValue)
      }
      tags.inputValue = ''
      tags.inputVisible = false
    }

    // 预览图片
    function handlePreview(file) {
      console.log(file);
      dialog.imgUrl = file.url
      dialog.visible = true
    }

    // 删除图片
    function handleRemove(file) {
      let id = formData.files.findIndex((e) => e.uid === file.uid)
      if(-1 != id) {
        formData.files.splice(id, 1)
        ElMessage.success('图片删除成功');
      }else{
        ElMessage.error('图片删除错误');
      }
    }

    // 上传失败
    function handleError() {
      ElMessage.error('图片上传错误');
    }

    // 上传成功
    function handleSuccess(res) {
      ElMessage.success('图片上传成功');
      formData.files.push({
        status: 'success',
        uid: res.uid,
        url: res.url
      })
    }

    // 关闭标签
    function handleClose(tag) {
      let id = formData.tags.findIndex(e => e.desc === tag.desc)
      formData.tags.splice(id, 1)
    }

    // 提交数据
    function sendData() {
      console.log(formData);
    }

    return { formData, handleRemove, handleError, handleSuccess, dialog, handlePreview, handleClose, tags, handleInputConfirm, sendData, showInput }
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
  .preview{
    width: 100%;
    height: 100%;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>