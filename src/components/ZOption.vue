<template>
  <div class="wh-full">
    <div class="option-item f-a-c-r">
      <img src="@/assets/images/log.png">
      <div class="text-20 fw-700">
        日志管理
      </div>
    </div>
    <n-divider dashed />
    <div class="option-item f-a-c-r">
      <img src="@/assets/images/alarm.png">
      <div class="text-20 fw-700">
        报警管理
      </div>
    </div>
    <n-divider dashed />
    <div class="option-item f-a-c-r">
      <img src="@/assets/images/user.png">
      <div class="text-20 fw-700">
        用户管理
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.option-item {
  width: 100%;
  height: 80px;
  img {
    width: 50px;
  }
}
.n-divider:not(.n-divider--vertical) {
  margin: unset !important;
}
</style>
