import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/booting',
    },
    {
      path: '/booting',
      name: 'booting',
      component: () => import('../views/Booting.vue'),
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
      path: '/check',
      name: 'check',
      component: () => import('../views/check/CheckView.vue'),
    },
    {
      path: '/log',
      name: 'log',
      component: () => import('../views/log/LogView.vue'),
    },
    {
      path: '/alarm',
      name: 'alarm',
      component: () => import('../views/alarm/AlarmView.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/UserView.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../views/setting/SettingView.vue'),
    },
  ],
})

export default router
