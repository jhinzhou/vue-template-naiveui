<template>
  <div class="wh-full">
    <div class="option-item f-a-c-r" @click="goto($event, 'check')">
      <img src="@/assets/images/check.png">
      <div class="text-20 fw-700">
        盘点记录
      </div>
    </div>
    <n-divider dashed />
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
    <n-divider dashed />
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
import { useAppStore } from '@/stores/app.js'

const appStore = useAppStore()
const router = useRouter()
const goto = ({ clientX, clientY }, val) => {
  appStore.updateCurrentView(val)
  toggleAnimation(clientX, clientY, () => router.push({ path: `/${val}` }))
}
</script>

<style scoped lang="scss">
.option-item {
  width: 100%;
  height: 80px;
  border-radius: 8px;
  img {
    width: 48px;
  }
}
.option-item:hover {
  background: #d0d0d057;
}
.n-divider:not(.n-divider--vertical) {
  margin: unset !important;
}
</style>
