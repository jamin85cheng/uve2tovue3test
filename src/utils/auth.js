// 认证工具：统一通过浏览器 Cookie 保存/读取/删除登录令牌，
// 便于请求拦截器注入 Authorization 与全局判断登录态。
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'       // 约定的令牌键名（与后端/拦截器保持一致）

export function getToken() {         // 读取 Cookie 中的令牌
  return Cookies.get(TokenKey)
}

export function setToken(token) {    // 设置令牌到 Cookie
  return Cookies.set(TokenKey, token)
}

export function removeToken() {      // 删除令牌（退出登录）
  return Cookies.remove(TokenKey)
}
