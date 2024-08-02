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
      <ZFileCab />
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
import ZFileCab from '@/components/ZFileCab.vue'
import { mitter } from '@/utils/mitt'

const appStore = useAppStore()
const themeOverrides = {
  common: {
    fontWeightStrong: '600',
    // primaryColor: '#1890ff',
  },
}
const router = useRouter()

onMounted(() => {
  mitter.on('custom-ws-open', () => {
  // 拿配置
  // 拿柜子数据，拿文档数据
  // 开始进入主页
    setTimeout(() => {
      appStore.updateCurrentView('home')
      router.replace('/home')
    }, 2000)
  })
})
onUnmounted(() => {
  mitter.off('custom-ws-open')
})
</script>

<style scoped></style>
