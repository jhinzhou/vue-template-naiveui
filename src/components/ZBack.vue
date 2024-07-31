<template>
  <NButton type="primary" round ghost class="custom-back" @click="goBack">
    <template #icon>
      <i class="i-line-md:arrow-left-circle text-20" />
    </template>
    返回
  </NButton>
</template>

<script setup>
import { toggleAnimation } from '@/utils/tools'

const router = useRouter()
const goBack = ({ clientX, clientY }) => {
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
