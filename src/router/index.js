import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/release',
    name: 'Release',
    component: () => import('@/views/release/Release'),
    redirect: '/release/blog',
    children: [
      {
        path: 'blog',
        name: 'Blog',
        meta: { id: 0 },
        component: () => import('@/views/release/child-views/Blog'),
      },{
        path: 'works',
        name: 'Works',
        meta: { id: 1 },
        component: () => import('@/views/release/child-views/Works'),
      },{
        path: 'recipes',
        name: 'Recipes',
        meta: { id: 2 },
        component: () => import('@/views/release/child-views/Recipes'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
