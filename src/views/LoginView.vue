<template>
  <div class="login-box f-c-c">
    <div id="login-form" class="login-form f-c-c-c">
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
    <n-drawer
      v-model:show="showFaceModal"
      width="100%"
      :height="620"
      placement="bottom"
      :trap-focus="false"
      :block-scroll="false"
      to="#login-form"
      :mask-closable="false"
      @after-leave="cancelFace"
    >
      <n-drawer-content closable title="人脸识别">
        <!-- <span>正在启动人脸识别模块...</span> -->
        <img v-if="loading" class="loading-img" src="@/assets/images/loading.svg">
        <img v-else ref="faceRef" class="face-img">
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app.js'
import { mitter } from '@/utils/mitt'
import { sendWs } from '@/utils/webSocket'

const appStore = useAppStore()

const router = useRouter()
const login = () => {
  appStore.updateCurrentView('home')
  router.replace('/home')
}

const showFaceModal = ref(false)
const loading = ref(true)
const faceRef = ref(null)
const faceRecognize = () => {
  showFaceModal.value = true
  setTimeout(() => {
    sendWs({ action: 'face_recognize' })
  }, 500)
  mitter.on('frame', (val) => {
    if (val) {
      loading.value = false
    }
    if (faceRef.value) {
      faceRef.value.src = val
    }
  })
}
onUnmounted(() => {
  mitter.off('frame')
})
const cancelFace = () => {
  showFaceModal.value = false
  loading.value = true
  mitter.off('frame')
  sendWs({ action: 'close', type: 1 })
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/login.scss';
</style>
