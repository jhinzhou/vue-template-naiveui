<template>
  <div class="router-full f-c-c">
    <div class="login-form f-c-c-c">
      <n-input round size="large" placeholder="请输入账户" />
      <n-input
        type="password"
        round
        size="large"
        placeholder="请输入密码"
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
      <n-button round size="large" type="primary">
        <i class="i-carbon:navaid-ndb px-20" />
        登录系统
      </n-button>
      <n-divider dashed>
        或
      </n-divider>
      <n-button round size="large" strong secondary>
        <i class="i-carbon:face-wink px-20" />
        <span>人脸识别</span>
      </n-button>
    </div>
    <div class="login-illustration f-c-c-c">
      <img src="@/assets/images/login-illustration.png">
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '@/assets/styles/login.scss';
</style>
