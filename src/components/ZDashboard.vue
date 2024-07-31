<template>
  <div class="f-b-c-r wh-full">
    <div class="dash-card-item f-a-c-r">
      <div class="f-c-s-c h-full">
        <div class="item-used custom-color">
          档案数量概览
        </div>
        <div class="item-number custom-color f-c-s-c mt-12 px-12 text-14 lh-26">
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
      <div class="f-c-s-c h-full">
        <div class="item-over custom-color">
          档案状态概览
        </div>
        <div class="item-number custom-color f-c-s-c mt-12 px-12 text-14 lh-26">
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
      <div class="f-c-s-c h-full">
        <div class="item-doc custom-color">
          文件数量概览
        </div>
        <div class="item-number custom-color f-c-s-c mt-12 px-12 text-14 lh-26">
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dash-card-item {
  width: calc(32% + 3px);
  height: 100%;
  border-radius: 12px;
  background: #fff;
  font-size: 22px;
  font-weight: 600;
  line-height: 22px;
  // box-shadow: 2px 2px 14px rgba(241, 241, 241, 0.122);
  border: 1px solid #18a05754;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.4);
}
.n-progress.n-progress--multiple-circle {
  width: 100px;
}

.n-progress.n-progress--circle,
.n-progress.n-progress--dashboard {
  width: 100px;
}

.n-divider.n-divider--vertical {
  height: 50%;
}
</style>
