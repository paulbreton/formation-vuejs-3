import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'
import Exo1View from '@/views/Exo1View.vue'
import Exo2View from '@/views/Exo2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/profile/:id',
      name: 'user',
      component: ProfileView
    },
    {
      path: '/exo-1',
      name: 'exo-1',
      component: Exo1View
    },
    {
      path: '/exo-2',
      name: 'exo-2',
      component: Exo2View
    }
  ],
})

// TODO: Exercice complet : Mettre un place des pages accessible uniquement pour les utilisateurs authentifié

export default router
