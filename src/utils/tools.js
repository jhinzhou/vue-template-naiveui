export const toggleAnimation = (clientX, clientY, callback) => {
  const maxRadius = Math.hypot(
    Math.max(clientX, window.innerWidth - clientX),
    Math.max(clientY, window.innerHeight - clientY),
  )
  const style = document.documentElement.style
  style.setProperty('--circle-x', `${clientX}px`)
  style.setProperty('--circle-y', `${clientY}px`)
  style.setProperty('--circle-r', `${maxRadius}px`)

  document.startViewTransition
    ? document.startViewTransition(callback)
    : callback()
}

export const dateFormat = (fmt, val) => {
  const date = new Date(val)
  let ret
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (const k in opt) {
    ret = new RegExp(`(${k})`).exec(fmt)
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'),
      )
    }
  }
  return fmt
}

export const renderIcon = (icon) => {
  return () => {
    return h('i', { class: icon })
  }
}
