import request from '@/utils/request'
// 认证相关API：登录、注册、用户信息、登出、验证码

// 登录方法
export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/login',
    // 登录接口地址
    headers: {
      isToken: false
      // 登录请求无需携带Token
    },
    method: 'post',
    data: data
  })
}

// 注册方法
export function register(data) {
  return request({
    url: '/register',
    // 注册接口地址
    headers: {
      isToken: false
      // 注册请求无需携带Token
    },
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/getInfo',
    // 获取用户信息接口地址
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    // 退出登录接口地址
    method: 'post'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    // 获取验证码图片接口地址
    headers: {
      isToken: false
      // 获取验证码无需携带Token
    },
    method: 'get',
    timeout: 20000
    // 设置超时时间
  })
}
