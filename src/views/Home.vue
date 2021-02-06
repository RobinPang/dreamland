<template>
  <div class="home">
    <Blog msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Blog from '@/components/Blog.vue'


export default {
  name: 'Home',
  components: {
    Blog
  }
}
</script>
