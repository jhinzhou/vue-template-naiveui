<template>
  <div class="header-view f-c-c">
    <div class="header-left">
      <solt name="left" />
    </div>
    <div class="header-center">
      <solt name="center" />
    </div>
    <div class="header-right">
      <div class="custom-color mx-16 text-18">
        120S
      </div>
      <n-badge v-if="appStore.alarm > 0" :value="appStore.alarm" dot class="mx-16">
        <i class="custom-color i-carbon:notification text-24" />
      </n-badge>
      <n-popover v-else trigger="click" class="mx-16">
        <template #trigger>
          <i class="i-carbon:notification custom-color mx-16 text-24" />
        </template>
        <span>暂无通知</span>
      </n-popover>
      <i class="custom-color mx-16 text-24" :class="appStore.isDark ? 'i-carbon:moon' : ' i-carbon:sun'" @click="changeTheme" />
      <!-- <i class="i-carbon:ibm-watson-language-translator custom-color mx-8 text-22" @click="changeLang" /> -->
      <div class="f-c-c">
        <n-dropdown trigger="click" size="large" :options="options" @select="handleSelect">
          <n-button circle type="primary" class="mx-16">
            <template #icon>
              <span class="text-14">周</span>
            </template>
          </n-button>
        </n-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useI18n } from 'vue-i18n'
// import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app.js'
import { toggleAnimation } from '@/utils/tools'

// const { locale } = useI18n()

const appStore = useAppStore()
// 方法可以解构const {toggleTheme, updateLang} = useAppStore() ，但是变量解构将不起作用，因为它破坏了响应性，所以要用 storeToRefs
// 然而写两次又不够优雅，所以都用 appStore.xxx
// const { isDark } = storeToRefs(appStore)

const changeTheme = ({ clientX, clientY }) => {
  toggleAnimation(clientX, clientY, () => appStore.toggleTheme())
}

// 暂时移除中英文切换
// const changeLang = () => {
//   locale.value = locale.value === 'en' ? 'zh' : 'en'
//   appStore.updateLang(locale.value)
// }

const renderIcon = (icon) => {
  return () => {
    return h('i', { class: icon })
  }
}
const options = [
  {
    label: '个人资料',
    key: 'profile',
    icon: renderIcon('i-carbon:user-avatar text-18'),
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon('i-carbon:logout text-18'),
  },
]
</script>

<style lang="scss" scoped>
.header-view {
  width: 100%;
  height: 60px;
  // background: #ffffff16;
}
.header-left {
  width: 30%;
  height: 100%;
}
.header-center {
  width: 40%;
  height: 100%;
}
.header-right {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .custom-avatar {
    color: white;
    background: var(--n-color);
  }
}
</style>
