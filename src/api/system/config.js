import request from '@/utils/request'
// 系统参数API：参数列表、详情、按键查询、增删改、刷新缓存

// 查询参数列表
export function listConfig(query) {
  return request({
    url: '/system/config/list',
    // 对应后端：system_config_list
    method: 'get',
    params: query
  })
}

// 查询参数详细
export function getConfig(configId) {
  return request({
    url: '/system/config/' + configId,
    // 对应后端：system_config_get
    method: 'get'
  })
}

// 根据参数键名查询参数值
export function getConfigKey(configKey) {
  return request({
    url: '/system/config/configKey/' + configKey,
    // 对应后端：system_config_get_key
    method: 'get'
  })
}

// 新增参数配置
export function addConfig(data) {
  return request({
    url: '/system/config',
    // 对应后端：system_config_add
    method: 'post',
    data: data
  })
}

// 修改参数配置
export function updateConfig(data) {
  return request({
    url: '/system/config',
    // 对应后端：system_config_edit
    method: 'put',
    data: data
  })
}

// 删除参数配置
export function delConfig(configId) {
  return request({
    url: '/system/config/' + configId,
    // 对应后端：system_config_delete
    method: 'delete'
  })
}

// 刷新参数缓存
export function refreshCache() {
  return request({
    url: '/system/config/refreshCache',
    // 对应后端：system_config_refresh_cache
    method: 'delete'
  })
}
