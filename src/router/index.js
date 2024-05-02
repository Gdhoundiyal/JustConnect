import { createRouter, createWebHistory } from 'vue-router'
// import UserComponent from '@/components/HomePage/Profile/My-Profile/User-Component.vue'
// import UserHeader from '@/components/HomePage/Profile/My-Profile/User-Header.vue'
import LoginIn from '@/components/AuthPage/Login-in.vue'
import SignUp from '@/components/AuthPage/Sign-up.vue'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginIn
    },
    {
      path: '/auth-register',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/home',
      name: 'app',
      component: App
    }
  ]
})

export default router
