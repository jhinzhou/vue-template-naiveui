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

  const alarm = ref(0)
  const updateAlarm = (val) => {
    alarm.value = val
  }
  return { isDark, toggleTheme, lang, updateLang, alarm, updateAlarm }
}, {
  persist: true,
})
