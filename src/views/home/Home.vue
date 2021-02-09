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
        <div class="content">
          <div class="user">
            <div class="user-info">
              <div class="info-avatar">
                <img src="@/assets/images/avatar1.jpg" alt="">
                <p>**</p>
              </div>
              <svg t="1612679768360" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2119" width="200" height="200"><path d="M635.712 160c34.112 0 62.208 25.792 65.792 58.88l0.384 7.232v358.4c0 34.112-25.792 62.208-58.944 65.792l-7.232 0.384H413.888a32 32 0 0 1-5.76-63.488l5.76-0.512h221.824a2.112 2.112 0 0 0 1.92-1.088l0.256-1.088v-358.4a2.112 2.112 0 0 0-1.088-1.792l-1.088-0.32H192a2.112 2.112 0 0 0-1.856 1.088l-0.256 1.024v358.4c0 0.832 0.384 1.472 1.024 1.92l1.088 0.192h51.2a32 32 0 0 1 5.76 63.488l-5.76 0.512H192c-34.112 0-62.144-25.792-65.728-58.944l-0.384-7.232v-358.4c0-34.048 25.792-62.08 58.88-65.728L192 160h443.712z" fill="#333333" p-id="2120"></path><path d="M819.2 872.512c34.112 0 62.144-25.792 65.728-58.88l0.384-7.232V448c0-34.112-25.792-62.144-58.88-65.728l-7.232-0.384H768a32 32 0 0 0-5.76 63.488l5.76 0.512h51.2c0.768 0 1.472 0.384 1.856 1.024l0.256 1.088v358.4a2.496 2.496 0 0 1-0.832 1.856l-0.64 0.256L362.688 800a2.112 2.112 0 0 1-1.92-1.088l-0.256-1.024v-358.4c0-0.832 0.448-1.472 1.088-1.92l1.088-0.256h221.824a32 32 0 0 0 5.76-63.488l-5.76-0.512H362.688c-34.112 0-62.208 25.792-65.792 58.944l-0.384 7.232v358.4c0 34.048 25.792 62.08 58.432 65.728l7.104 0.384 457.152 8.512z" fill="#333333" p-id="2121"></path><path d="M0 0h1024v1024H0z" fill="#333333" fill-opacity="0" p-id="2122"></path></svg>
              <div class="info-avatar">
                <img src="@/assets/images/avatar2.jpg" alt="">
                <p>**</p>
              </div>
            </div>
            <div class="user-desc">
              <span>“用彩虹编织而成的晴空丝带，当做是送给你笑容的礼物”</span>
            </div>
            <!-- <div class="user-stast">
              <div class="stast-item">
                <p>日志</p>
                <p>99+篇</p>
              </div>
              <div class="stast-item">
                <p>照片</p>
                <p>99+张</p>
              </div>
              <div class="stast-item">
                <p>财务</p>
                <p>99$</p>
              </div>
            </div> -->
          </div>
          <time-line />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { ElRow, ElCol } from 'element-plus'
import ToolBar from './components/ToolBar'
import TimeLine from './components/TimeLine'
export default {
  name: 'Home',
  components: {
    ElRow,
    ElCol,
    ToolBar,
    TimeLine
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
        margin-bottom: 1rem;
        box-shadow: 0 0 10px #d2d2d2;
      }
    }
  }
  .user{
    padding-top: 1rem;
  .user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      width: 80%;
      height: 1px;
      background-color: #efefef;
      bottom: 0;
    }
    svg{
      width: 1.5rem;
      height: 1.5rem;
    }
    .info-avatar {
      img {
        width: 4rem;
        margin: 0 .5rem;
        border-radius: 50%;
        border: 2px solid @component-color;
      }
      p {
        text-align: center;
        font-weight: bold;
      }
    }
  }
  .user-desc{
    text-align: center;
    padding: .8rem;
  }
  .user-stast{
    display: flex;
    position: relative;
    padding: 1rem 0;
    border-top: 2px solid #efefef;
    .stast-item {
      flex: 1;
      text-align: center;
     
      p{
        margin: .2rem 0; 
        &:first-child{
         color: #444;
        }
      }
    }
  }
  }

</style>