<template>
  <div class="router-full f-c-c">
    <div class="login-form f-c-c-c">
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
          <i class="i-carbon:view" />
        </template>
        <template #password-invisible-icon>
          <i class="i-carbon:view-filled" />
        </template>
      </n-input>
      <n-button round size="large" type="primary" class="large-type" @click="login">
        <i class="i-carbon:navaid-ndb px-20 text-18" />
        <span class="text-16">{{ $t('Login') }}</span>
      </n-button>
      <n-divider dashed>
        {{ $t('Or') }}
      </n-divider>
      <n-button round size="large" strong secondary class="large-type">
        <i class="i-carbon:face-wink px-20 text-18" />
        <span class="text-16">{{ $t('UseFace') }}</span>
      </n-button>
    </div>
    <div class="login-illustration f-c-c-c">
      <img src="@/assets/images/login-illustration.png">
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const login = () => {
  router.replace('/home/option')
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/login.scss';
</style>
