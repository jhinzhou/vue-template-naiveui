<template>
  <ZHeader>
    <template #left />
    <template #center />
  </ZHeader>
  <RouterView />
</template>

<script setup>
import ZHeader from '@/components/ZHeader.vue'

const router = useRouter()
router.replace('/home/login')
</script>

<style scoped></style>
