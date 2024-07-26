<template>
  <n-config-provider
    class="wh-full"
    :locale="appStore.lang === 'zh' ? zhCN : null"
    :date-locale="appStore.lang === 'zh' ? dateZhCN : null"
    :theme="appStore.isDark ? darkTheme : null"
    :class="appStore.isDark ? 'dark-theme' : 'light-theme'"
    :theme-overrides="themeOverrides"
  >
    <ZHeader />
    <div class="main-full">
      <ZFileBox />
      <div class="router-view">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup>
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'
import { useAppStore } from '@/stores/app.js'
import ZHeader from '@/components/ZHeader.vue'
import ZFileBox from '@/components/ZFileBox.vue'

const appStore = useAppStore()
const themeOverrides = {
  common: {
    fontWeightStrong: '600',
    // primaryColor: '#1890ff',
  },
}
</script>

<style scoped></style>
