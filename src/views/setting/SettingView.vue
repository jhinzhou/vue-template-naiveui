<template>
  <div class="custom-view">
    <div class="custom-title custom-color">
      系统配置
    </div>
    <div class="full-body">
      <n-tabs type="segment" animated>
        <n-tab-pane name="chap1" tab="属性配置" />
        <n-tab-pane name="chap2" tab="权限配置" />
        <n-tab-pane name="chap3" tab="操作配置" />
      </n-tabs>
    </div>
    <ZBack />
  </div>
</template>

<script setup>
import ZBack from '@/components/ZBack.vue'
</script>

<style lang="scss" scoped></style>
