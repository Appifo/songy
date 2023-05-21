import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home,
  },
  {
    path: '/browse',
    name: 'Browse',
    component: () => import(/* webpackChunkName: "browse" */ '../views/Browse.vue'),
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import(/* webpackChunkName: "favorite" */ '../views/Favorite.vue'),
  },
  {
    path: '/register',
    name: 'About',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-nav-link'
})

export default router
