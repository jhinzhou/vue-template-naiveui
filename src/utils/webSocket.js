import { WebSocketClient } from './dataDispatcher/webSocketClient'

import { mitter } from '@/utils/mitt'
import { createDoorLog } from '@/utils/custom'

const ws = new WebSocketClient('ws://localhost:2120/websocket')

export const connectWs = () => {
  ws.connect()
}

export const sendWs = (val) => {
  const jsonData = JSON.stringify(val)
  ws.send(jsonData)
}

ws.onopen(() => {
  mitter.emit('custom-ws-open')
})
ws.onclose(() => {})
ws.onerror(() => {})
ws.onmessage((e) => {
  const reData = JSON.parse(e.data)
  if (reData) {
    switch (reData.action) {
      case 'config':
      case 'register_result':
      case 'user_del_result':
      case 'user_info':
        // 刷卡走这里
      case 'login':
        // 人脸走这里
      case 'door_status':
        // 写入开关门
        createDoorLog(reData.box_id, reData.state)
        // 触发开关门事件
        mitter.emit('door_status', { boxId: reData.box_id, state: reData.state })
        break
      case 'notify_msg':
        if (reData.type === 'door_not_open') {
          mitter.emit('door_not_open')
        }
        else if (reData.type === 'face_failed') {
          mitter.emit('face_failed', reData.reason)
        }
        break
      case 'frame':
        mitter.emit('frame', reData.img_base64)
        break
      default:
        mitter.emit(reData.action, reData)
        break
    }
  }
})
