import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import UserComponent from '@/components/HomePage/Profile/My-Profile/User-Component.vue'
import UserHeader from '@/components/HomePage/Profile/My-Profile/User-Header.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          component: UserHeader
        }]
    },
    
  ]
})

export default router
