<template>
  <div class="custom-view">
    <div>
      <ZFileBoxItem @back="back" />
    </div>
    <ZArchivesList @add-box="showAddBox" />
  </div>
</template>

<script setup>
import ZArchivesList from '@/components/ZArchivesList.vue'
import ZFileBoxItem from '@/components/ZFileBoxItem.vue'
</script>

<style lang="scss" scoped>
</style>
