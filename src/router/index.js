import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/archives',
      name: 'archives',
      component: () => import('../views/Archives/ArchivesView.vue'),
    },
    {
      path: '/log',
      name: 'log',
      component: () => import('../views/log/LogView.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/UserView.vue'),
    },
    {
      path: '/alarm',
      name: 'alarm',
      component: () => import('../views/alarm/AlarmView.vue'),
    },
  ],
})

export default router
