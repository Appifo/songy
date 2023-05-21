import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home,
    meta: { title: (route: { name: any }) => `Songy | ${route.name}` }
  },
  {
    path: '/browse',
    name: 'Browse',
    component: () => import(/* webpackChunkName: "browse" */ '../views/Browse.vue'),
    meta: { title: (route: { name: any }) => `Songy | ${route.name}` }
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import(/* webpackChunkName: "favorite" */ '../views/Favorite.vue'),
    meta: { title: (route: { name: any }) => `Songy | ${route.name}` }
  },
  {
    path: '/register',
    name: 'About',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: { title: (route: { name: any }) => `Songy | ${route.name}` }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-nav-link'
})

router.afterEach((to: any, from) => {
  document.title = to.meta.title(to) || process.env.DEFAULT_TITLE;
});

export default router
