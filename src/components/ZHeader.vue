<template>
  <div class="header-view">
    <i class="text-20" :class="appStore.isDark ? 'i-carbon:moon' : ' i-carbon:sun'" @touchstart="changeTheme()" />
    <i class="i-carbon:ibm-watson-language-translator text-20" />
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app.js'

const appStore = useAppStore()

const changeTheme = () => {
  setTimeout(() => {
    appStore.toggleDark()
  }, 500)
}
</script>

<style lang="scss" scoped>
.header-view {
  width: 100%;
  height: 60px;
  background: #ffffffd6;
}
</style>
