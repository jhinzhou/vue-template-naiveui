import { useDark } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const isDark = useDark()
  const toggleDark = () => {
    isDark.value = !isDark.value
  }

  return { isDark, toggleDark }
}, {
  persist: true,
})
