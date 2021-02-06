<template>
  <app-container>
    <nav-bar />
    <keep-alive>
      <router-view/>
    </keep-alive>
  </app-container>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AppContainer from '@/components/AppContainer.vue'
export default {
  components: {
    AppContainer,
    NavBar
  }
}
</script>
