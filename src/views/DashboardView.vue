<template>
  <div class="dashboard-view">
    <div class="dash-card f-b-c-r">
      <div class="dash-card-item f-a-c-r">
        <div class="f-c-s-c">
          <div class="item-used custom-color">
            档案数量概览
          </div>
          <div class="item-number custom-color f-c-s-c mt-12 px-12 text-14 lh-18">
            <div>全部 <n-number-animation :from="0" :to="60" /> 盒</div>
            <div>在柜 <n-number-animation :from="0" :to="38" /> 盒</div>
          </div>
        </div>
        <n-divider vertical />
        <n-progress type="dashboard" gap-position="bottom" color="#18a057bd" :stroke-width="8" :percentage="90">
          <span style="text-align: center" class="custom-color">
            <n-number-animation :from="0" :to="38" />
          </span>
        </n-progress>
      </div>
      <div class="dash-card-item f-a-c-r">
        <div class="f-c-s-c">
          <div class="item-over custom-color">
            档案状态概览
          </div>
          <div class="item-number custom-color f-c-s-c mt-12 px-12 text-14 lh-18">
            <div>将失效 <n-number-animation :from="0" :to="25" /> 盒</div>
            <div>已失效 <n-number-animation :from="0" :to="10" /> 盒</div>
          </div>
        </div>
        <n-divider vertical />
        <n-progress
          type="multiple-circle" :stroke-width="6"
          :circle-gap="2"
          :color="['#f0a020bd', '#d03050bd']"
          :percentage="[25, 10]"
        >
          <span style="text-align: center" class="custom-color">
            <n-number-animation :from="0" :to="25" />
          </span>
        </n-progress>
      </div>
      <div class="dash-card-item f-a-c-r">
        <div class="f-c-s-c">
          <div class="item-doc custom-color">
            文件数量概览
          </div>
          <div class="item-number custom-color f-c-s-c mt-12 px-12 text-14 lh-18">
            <div>全部 <n-number-animation :from="0" :to="1200" /> 件</div>
            <div>在柜 <n-number-animation :from="0" :to="1000" /> 件</div>
          </div>
        </div>
        <n-divider vertical />
        <n-progress type="dashboard" gap-position="bottom" color="#2080f0bd" :stroke-width="8" :percentage="90">
          <span style="text-align: center" class="custom-color">
            <n-number-animation :from="0" :to="1000" />
          </span>
        </n-progress>
      <!-- <n-progress
          type="multiple-circle" :stroke-width="6"
          :circle-gap="2"
          :color="['#2080f0bd', '#18a057bd']"
          :percentage="[25, 10]"
        >
          <span style="text-align: center" class="custom-color">
            <n-number-animation :from="0" :to="1200" />
          </span>
        </n-progress> -->
      </div>
    </div>
    <div class="dash-body">
      <ZFileList />
    </div>
  </div>
</template>

<script setup>
import ZFileList from '@/components/ZFileList.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/styles/dashboard.scss';
</style>
