import { WebSocketClient } from './dataDispatcher/webSocketClient'

import { mitter } from '@/utils/mitt'

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
        mitter.emit('open-door', reData.box_id)
      case 'register_result':
      case 'user_del_result':
      case 'user_info':
      case 'login':
      case 'door_status':
        mitter.emit('open-door', reData.box_id)
        break
      case 'door_not_open':
    }
  }
})
