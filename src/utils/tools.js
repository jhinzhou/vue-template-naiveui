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
