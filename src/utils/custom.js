import * as Lockr from 'lockr'
import { mitter } from '@/utils/mitt'

const userInfo = Lockr.get('userInfo')

// 处理开关门日志
export const createDoorLog = (boxId, state) => {
  const userId = userInfo?.id
  const data = {
    boxId,
    action: state ? 5 : 6,
  }
  if (userId) {
    data.userId = userId
  }
  // 开关门日志记录
}

// 处理身份认证识别
export const userAka = (val) => {
  if (userInfo) {
    if (val === userInfo.userId || val === userInfo.cardNum) {
      // 您已登录，无需再次验证
    }
  }
  else {
    // 传入参数验证身份并写入localstorage
    Lockr.set('userInfo', {})
  }
}
