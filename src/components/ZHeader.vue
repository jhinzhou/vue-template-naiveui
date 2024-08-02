<template>
  <div class="header-view f-c-c">
    <div class="header-left f-s-c-r">
      <img src="@/assets/images/logo_cnnc.png">
    </div>
    <div class="header-center f-s-c-r" />
    <div class="header-right">
      <n-input
        v-if="showSearch && appStore.currentView === 'home'" round placeholder="搜索档案盒或者文件名称等" class="custom-search"
        passively-activated autofocus
        @change="handleChange"
        @blur="onHandleBlurSearch"
      >
        <template #suffix>
          <i class="custom-color i-mingcute:search-3-fill text-24" />
        </template>
      </n-input>
      <i v-if="!showSearch && appStore.currentView === 'home'" class="custom-color i-mingcute:search-3-fill mx-16 text-24" @click="onShowSearch" />
      <n-popover
        placement="bottom"
        trigger="manual"
        :show="showFuncPopover"
        class="mx-16"
      >
        <template #trigger>
          <i class="custom-color i-mingcute:classify-2-fill mx-16 text-24" @click="showFuncPopover = !showFuncPopover" />
        </template>
        <div class="func-body">
          <ZOption @click="showFuncPopover = false" />
        </div>
      </n-popover>
      <i v-if="appStore.currentView === 'login'" class="custom-color i-mdi:cards mx-16 text-24" @click="goto($event, 'home')" />
      <i v-else-if="appStore.currentView === 'home'" class="custom-color i-majesticons:login mx-16 text-24" @click="goto($event, 'login')" />
      <i v-else class="custom-color i-majesticons:logout mx-16 text-24" @click="logout" />
      <i class="custom-color mx-16 text-24" :class="appStore.isDark ? 'i-line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition' : ' i-line-md:moon-filled-alt-to-sunny-filled-loop-transition'" @click="changeTheme" />
      <!-- <i class="i-carbon:ibm-watson-language-translator custom-color mx-8 text-22" @click="changeLang" /> -->
      <i v-if="true" class="i-material-symbols:signal-wifi-4-bar-rounded custom-color mx-16 text-24" />
      <i v-else class="i-material-symbols:signal-wifi-bad-rounded custom-color mx-16 text-24" />
      <div class="header-time custom-color mx-16 text-20">
        {{ currentTime }}
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useI18n } from 'vue-i18n'
// import { storeToRefs } from 'pinia'
import { createDiscreteApi } from 'naive-ui'
import { useAppStore } from '@/stores/app.js'
import { dateFormat, toggleAnimation } from '@/utils/tools'
import ZOption from '@/components/ZOption.vue'
// const { locale } = useI18n()

const showSearch = ref(false)
const onShowSearch = ({ clientX, clientY }) => {
  toggleAnimation(clientX, clientY, () => showSearch.value = true)
}
const onHandleBlurSearch = () => {
  // blur貌似拿不到位置？？后边研究一下
  toggleAnimation(1344, 30, () => showSearch.value = false)
}

const showFuncPopover = ref(false)

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

const { dialog } = createDiscreteApi(['dialog'])
const logout = ({ clientX, clientY }) => {
  dialog.warning({
    title: '提示',
    content: '你确定要退出吗？',
    positiveText: '确定',
    negativeText: '取消',
    closable: false,
    onPositiveClick: () => {
      appStore.updateCurrentView('home')
      toggleAnimation(clientX, clientY, () => router.push({ path: '/home' }))
    },
    onNegativeClick: () => {
    },
  })
}
</script>

<style lang="scss" scoped>
.header-view {
  width: 100%;
  height: 60px;
}
.header-left {
  width: 30%;
  height: 100%;
  img {
    height: 48px;
    margin-left: 6px;
  }
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
  .custom-search {
    width: 260px;
    margin-right: 4px;
  }
}
.func-body {
  width: 180px;
  padding: 8px;
}
</style>
