import { createApp } from 'vue'
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/css/default.less'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
createApp(App).use(store).use(router).mount('#app')