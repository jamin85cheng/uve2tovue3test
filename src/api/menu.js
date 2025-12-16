import request from '@/utils/request'
// 菜单路由API：根据权限获取可访问路由

// 获取路由
export const getRouters = () => {
  return request({
    url: '/getRouters',
    method: 'get'
  })
}
