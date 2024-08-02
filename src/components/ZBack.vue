<template>
  <n-button-group class="custom-back">
    <slot />
    <n-button type="primary" round ghost @click="goBack">
      <template #icon>
        <i class="i-line-md:arrow-left-circle text-20" />
      </template>
      返回
    </n-button>
  </n-button-group>
</template>

<script setup>
import { toggleAnimation } from '@/utils/tools'
import { useAppStore } from '@/stores/app.js'

const router = useRouter()
const appStore = useAppStore()
const goBack = ({ clientX, clientY }) => {
  appStore.updateCurrentView('home')
  toggleAnimation(clientX, clientY, () => router.push({ path: '/home' }))
}
</script>

<style lang="scss" scoped>
.custom-back {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
