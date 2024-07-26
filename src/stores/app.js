import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const isDark = ref(false)
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  const lang = ref('zh')
  const updateLang = (val) => {
    lang.value = val
  }

  const currentView = ref('dashboard')
  const updateCurrentView = (val) => {
    currentView.value = val
  }
  return { isDark, toggleTheme, lang, updateLang, currentView, updateCurrentView }
}, {
  persist: true,
})

export const useFileBoxStore = defineStore('fileBox', () => {
  const fileBoxList = ref([])

  return { fileBoxList }
}, {
  persist: true,
})
