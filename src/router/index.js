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
      path: '/archive',
      name: 'archive',
      component: () => import('../views/Archive/ArchiveView.vue'),
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
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../views/setting/SettingView.vue'),
    },
  ],
})

export default router
