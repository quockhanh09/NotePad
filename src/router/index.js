import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Feature from '../components/Features.vue'
import RegisterLogin from '../components/RegisterLogin.vue'
import From from '../components/From.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/feature',
      name: 'Feature',
      component: Feature
    },
    {
      path:"/registerLogin",
      name :'RegisterLogin',
      component: RegisterLogin
    },

    {
      path:"/FormLanguages",
      name :'FormLanguages',
      component: From
    },
    {
      path: '/about',
      name: 'about', 
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
