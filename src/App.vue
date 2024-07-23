<template>
  <n-config-provider
    class="wh-full"
    :locale="appStore.lang === 'zh' ? zhCN : null"
    :date-locale="appStore.lang === 'zh' ? dateZhCN : null"
    :theme="appStore.isDark ? darkTheme : null"
    :class="appStore.isDark ? 'dark-theme' : 'light-theme'"
    :theme-overrides="themeOverrides"
  >
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </n-config-provider>
</template>

<script setup>
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'
import { useAppStore } from '@/stores/app.js'

const appStore = useAppStore()
const themeOverrides = {
  common: {
    // primaryColor: '#1890ff',
  },
}
</script>

<style scoped></style>
