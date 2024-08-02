<template>
  <div class="waiting f-c-c-c">
    <div class="loading">
      <div class="loader" />
      <div class="title">
        {{ title }}<i class="i-svg-spinners:bouncing-ball text-12" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app.js'
import { mitter } from '@/utils/mitt'

const title = ref('设备启动中')

const router = useRouter()
const appStore = useAppStore()

onMounted(() => {
  mitter.on('custom-ws-open', () => {
  // 拿配置
  // 拿柜子数据，拿文档数据
  // 开始进入主页
    appStore.updateCurrentView('home')
    router.replace('/home')
  })
  mitter.on('open-door', (val) => {
    console.log(val)
  })
})
onUnmounted(() => {
  mitter.off('custom-ws-open')
})
</script>

<style lang="scss" scoped>
.waiting {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  background: url('@/assets/images/bg.jpg');
  background-size: cover;
}

.title {
  margin-top: 100px;
  color: #5188ed;
  font-size: 28px;
  font-weight: bold;
}

.ip__track {
  // stroke: #cfdcfc;
  stroke: #f4faff;
  transition: stroke 300ms;
}
.ip__worm1,
.ip__worm2 {
  animation: worm1 2s linear infinite;
}
.ip__worm2 {
  animation-name: worm2;
}

/* Animation */
@keyframes worm1 {
  from {
    stroke-dashoffset: 0;
  }
  50% {
    animation-timing-function: steps(1);
    stroke-dashoffset: -358;
  }
  50.01% {
    animation-timing-function: linear;
    stroke-dashoffset: 358;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes worm2 {
  from {
    stroke-dashoffset: 358;
  }
  50% {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -358;
  }
}

$colors: #e11462bf #3db88fbf #6fcadcbf #e9a920bf;
$size: 4.5em;
$thickness: 0.5em;

// Calculated variables.
$lat: 2em;
$offset: 1.5em;
.loader {
  position: absolute;
  top: calc(50% - 2.25em);
  left: calc(50% - 2.25em);
}
.loader {
  position: relative;
  width: 4.5em;
  height: 4.5em;
  transform: rotate(165deg);

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
  }

  &:before {
    animation: before 2s infinite;
  }

  &:after {
    animation: after 2s infinite;
  }
}

@keyframes before {
  0% {
    width: 0.5em;
    box-shadow:
      $lat (-$offset) nth($colors, 1),
      (-$lat) $offset nth($colors, 3);
  }
  35% {
    width: 4.5em;
    box-shadow:
      0 (-$offset) nth($colors, 1),
      0 $offset nth($colors, 3);
  }
  70% {
    width: $thickness;
    box-shadow:
      (-$lat) (-$offset) nth($colors, 1),
      $lat $offset nth($colors, 3);
  }
  100% {
    box-shadow:
      $lat (-$offset) nth($colors, 1),
      (-$lat) $offset nth($colors, 3);
  }
}

@keyframes after {
  0% {
    height: $thickness;
    box-shadow:
      $offset $lat nth($colors, 2),
      (-$offset) (-$lat) nth($colors, 4);
  }
  35% {
    height: $size;
    box-shadow:
      $offset 0 nth($colors, 2),
      (-$offset) 0 nth($colors, 4);
  }
  70% {
    height: $thickness;
    box-shadow:
      $offset (-$lat) nth($colors, 2),
      (-$offset) $lat nth($colors, 4);
  }
  100% {
    box-shadow:
      $offset $lat nth($colors, 2),
      (-$offset) (-$lat) nth($colors, 4);
  }
}
</style>
