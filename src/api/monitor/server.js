import request from '@/utils/request'
// 服务器监控API：用于获取后端服务器当前运行状态信息（CPU、内存、磁盘等）

// 获取服务信息
export function getServer() {
  return request({
    url: '/monitor/server',
    method: 'get'
  })
}
