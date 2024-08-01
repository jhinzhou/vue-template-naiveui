<template>
  <div class="custom-view">
    <div>
      <ZFileBoxItem @back="back" />
    </div>
    <ZArchiveList @add-box="showAddBox" />
  </div>
</template>

<script setup>
import ZArchiveList from '@/components/ZArchiveList.vue'
import ZFileBoxItem from '@/components/ZFileBoxItem.vue'
</script>

<style lang="scss" scoped>
</style>
