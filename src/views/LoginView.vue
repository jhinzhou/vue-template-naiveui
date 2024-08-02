<template>
  <div class="login-box f-c-c">
    <div class="login-form f-c-c-c">
      <div class="custom-color text-28 fw-700 lh-80">
        RFID 智能档案柜
      </div>
      <n-input round size="large" class="large-type" :placeholder="$t('InputAccount')" />
      <n-input
        type="password"
        round
        size="large"
        class="large-type"
        :placeholder="$t('InputPassword')"
        show-password-on="click"
        :maxlength="20"
      >
        <template #password-visible-icon>
          <i class="i-line-md:watch-loop" />
        </template>
        <template #password-invisible-icon>
          <i class="i-line-md:watch-off-twotone-loop" />
        </template>
      </n-input>
      <n-button round size="large" type="primary" class="large-type" @click="login">
        <i class="i-carbon:navaid-ndb px-20 text-18" />
        <span class="text-16">{{ $t('Login') }}</span>
      </n-button>
      <n-divider dashed>
        {{ $t('Or') }}
      </n-divider>
      <n-button round size="large" strong secondary class="large-type" @click="faceRecognize">
        <i class="i-line-md:emoji-smile-wink px-20 text-18" />
        <span class="text-16">{{ $t('UseFace') }}</span>
      </n-button>
      <div class="copyright custom-color">
        Copyright © 2014 - present, 苏州银橡智能科技有限公司
      </div>
    </div>
    <div class="login-illustration f-c-c-c">
      <img src="@/assets/images/login-illustration.png">
    </div>
    <n-modal v-model:show="showFaceModal" transform-origin="center" @on-mask-click="cancelFace">
      <div class="face-modal">
        <div class="face-img">
          <span>正在启动人脸识别模块...</span>
        </div>
      </div>
    </n-modal>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app.js'

const appStore = useAppStore()

const router = useRouter()
const login = () => {
  appStore.updateCurrentView('home')
  router.replace('/home')
}

const showFaceModal = ref(false)
const faceRecognize = () => {
  showFaceModal.value = true
}
const cancelFace = () => {
  showFaceModal.value = false
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/login.scss';
</style>
