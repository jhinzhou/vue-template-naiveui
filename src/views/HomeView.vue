<template>
  <div class="home-view">
    <div class="home-head">
      <ZDashboard v-if="active === 'dash'" />
      <ZFileBoxItem v-else-if="active === 'fileBoxItem'" page="home" @back="back" />
    </div>
    <div class="home-body">
      <ZFileBoxList @add-box="showAddBox" />
    </div>
  </div>
</template>

<script setup>
import ZFileBoxList from '@/components/ZFileBoxList.vue'
import ZFileBoxItem from '@/components/ZFileBoxItem.vue'
import ZDashboard from '@/components/ZDashboard.vue'

const active = ref('dash')
const showAddBox = () => {
  active.value = 'fileBoxItem'
}

const back = () => {
  active.value = 'dash'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/home.scss';
</style>
