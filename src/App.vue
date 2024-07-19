<template>
  <n-config-provider
    class="wh-full"
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="appStore.isDark ? darkTheme : undefined"
    :class="appStore.isDark ? 'bg-dark' : 'bg-light'"
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
</script>

<style scoped></style>
