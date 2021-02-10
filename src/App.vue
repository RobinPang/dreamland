<template>
  <app-container>
    <nav-bar />
      <router-view  v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
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
