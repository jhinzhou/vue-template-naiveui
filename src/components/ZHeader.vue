<template>
  <div class="header-view f-c-c">
    <div class="header-left" />
    <div class="header-center f-c-c">
      <n-input round placeholder="输入档案盒名称或文件名称搜索" size="large">
        <template #prefix>
          <i class="custom-color i-mingcute:search-line mx-16 text-24" />
        </template>
      </n-input>
    </div>
    <div class="header-right">
      <i class="custom-color i-mingcute:search-3-fill mx-16 text-24" />
      <n-popover
        placement="bottom"
        trigger="click"
        class="mx-16"
        @update:show="handleUpdateShow"
      >
        <template #trigger>
          <i class="custom-color i-mingcute:switch-fill mx-16 text-24" />
        </template>
        <div class="func-body">
          <ZOption />
        </div>
      </n-popover>
      <i class="custom-color mx-16 text-24" :class="appStore.isDark ? 'i-ri:moon-fill' : ' i-ri:sun-fill'" @click="changeTheme" />
      <i v-if="appStore.currentView === 'login'" class="custom-color i-mingcute:grid-2-fill mx-16 text-24" @click="goto($event, 'dashboard')" />
      <i v-else-if="appStore.currentView === 'dashboard'" class="custom-color i-majesticons:login mx-16 text-24" @click="goto($event, 'login')" />
      <i v-else class="custom-color i-majesticons:logout mx-16 text-24" />
      <!-- <i class="i-carbon:ibm-watson-language-translator custom-color mx-8 text-22" @click="changeLang" /> -->
      <div class="header-time custom-color mx-16 text-20">
        {{ currentTime }}
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useI18n } from 'vue-i18n'
// import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app.js'
import { dateFormat, toggleAnimation } from '@/utils/tools'
import ZOption from '@/components/ZOption.vue'
// const { locale } = useI18n()

const appStore = useAppStore()
// 方法可以解构const {toggleTheme, updateLang} = useAppStore() ，但是变量解构将不起作用，因为它破坏了响应性，所以要用 storeToRefs
// 然而写两次又不够优雅，所以都用 appStore.xxx
// const { isDark } = storeToRefs(appStore)

// 暂时移除中英文切换
// const changeLang = () => {
//   locale.value = locale.value === 'en' ? 'zh' : 'en'
//   appStore.updateLang(locale.value)
// }

const changeTheme = ({ clientX, clientY }) => {
  toggleAnimation(clientX, clientY, () => appStore.toggleTheme())
}

// 时间显示
const currentTime = ref(dateFormat('HH:MM', new Date()))
const timer1 = ref(null)
onMounted(() => {
  timer1.value = setInterval(() => {
    currentTime.value = dateFormat('HH:MM', new Date()) // 修改数据date
  }, 1000)
})
onUnmounted(() => {
  if (timer1.value) {
    clearInterval(timer1.value)
  }
})

// 登录和 dashboard 等页面切换状态
const router = useRouter()
const goto = ({ clientX, clientY }, val) => {
  appStore.updateCurrentView(val)
  toggleAnimation(clientX, clientY, () => router.push({ path: `/${val}` }))
}
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
  .header-time {
    font-weight: 700;
    line-height: 60px;
  }
}
.func-body {
  width: 200px;
}
</style>
