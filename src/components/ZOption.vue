<template>
  <div class="wh-full">
    <div class="option-item f-a-c-r" @click="goto($event, 'log')">
      <img src="@/assets/images/log.png">
      <div class="text-20 fw-700">
        日志记录
      </div>
    </div>
    <n-divider dashed />
    <div class="option-item f-a-c-r" @click="goto($event, 'alarm')">
      <img src="@/assets/images/alarm.png">
      <div class="text-20 fw-700">
        报警记录
      </div>
    </div>
    <n-divider dashed />
    <div class="option-item f-a-c-r" @click="goto($event, 'user')">
      <img src="@/assets/images/user.png">
      <div class="text-20 fw-700">
        用户管理
      </div>
    </div>
    <div class="option-item f-a-c-r" @click="goto($event, 'setting')">
      <img src="@/assets/images/setting.png">
      <div class="text-20 fw-700">
        系统配置
      </div>
    </div>
  </div>
</template>

<script setup>
import { toggleAnimation } from '@/utils/tools'

const router = useRouter()
const goto = ({ clientX, clientY }, val) => {
  toggleAnimation(clientX, clientY, () => router.push({ path: `/${val}` }))
}
</script>

<style scoped lang="scss">
.option-item {
  width: 100%;
  height: 80px;
  img {
    width: 48px;
  }
}
.n-divider:not(.n-divider--vertical) {
  margin: unset !important;
}
</style>
