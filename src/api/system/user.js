import request from '@/utils/request'
import { parseStrEmpty } from "@/utils/ruoyi";
// 用户管理API：提供用户CRUD、状态变更、个人信息、授权角色等接口

// 查询用户列表
export function listUser(query) {
  return request({
    url: '/system/user/list',
    // 对应后端：system_user_list
    method: 'get',
    params: query
  })
}

// 查询用户详细
export function getUser(userId) {
  return request({
    url: '/system/user/' + parseStrEmpty(userId),
    // 对应后端：system_get_user
    method: 'get'
  })
}

// 新增用户
export function addUser(data) {
  return request({
    url: '/system/user',
    // 对应后端：system_create_user
    method: 'post',
    data: data
  })
}

// 修改用户
export function updateUser(data) {
  return request({
    url: '/system/user',
    // 对应后端：system_update_user
    method: 'put',
    data: data
  })
}

// 删除用户
export function delUser(userId) {
  return request({
    url: '/system/user/' + userId,
    // 对应后端：system_delete_users
    method: 'delete'
  })
}

// 用户密码重置（管理员操作）
export function resetUserPwd(userId, password) {
  const data = {
    userId,
    password
  }
  return request({
    url: '/system/user/resetPwd',
    // 对应后端：system_update_user_resetpwd
    method: 'put',
    data: data
  })
}

// 用户状态修改
export function changeUserStatus(userId, status) {
  const data = {
    userId,
    status
  }
  return request({
    url: '/system/user/changeStatus',
    // 对应后端：system_update_user_changestatus
    method: 'put',
    data: data
  })
}

// 查询用户个人信息
export function getUserProfile() {
  return request({
    url: '/system/user/profile',
    // 对应后端：system_user_profile
    method: 'get'
  })
}

// 修改用户个人信息
export function updateUserProfile(data) {
  return request({
    url: '/system/user/profile',
    // 对应后端：system_update_user_profile
    method: 'put',
    data: data
  })
}

// 用户密码重置（个人中心）
export function updateUserPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword
  }
  return request({
    url: '/system/user/profile/updatePwd',
    // 对应后端：system_update_user_pwd
    method: 'put',
    params: data
  })
}

// 用户头像上传
export function uploadAvatar(data) {
  return request({
    url: '/system/user/profile/avatar',
    // 对应后端：system_update_user_avatar
    method: 'post',
    data: data
  })
}

// 查询授权角色
export function getAuthRole(userId) {
  return request({
    url: '/system/user/authRole/' + userId,
    // 对应后端：system_get_user_authrole
    method: 'get'
  })
}

// 保存授权角色
export function updateAuthRole(data) {
  return request({
    url: '/system/user/authRole',
    // 对应后端：system_update_user_authrole
    method: 'put',
    params: data
  })
}
