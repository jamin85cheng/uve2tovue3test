// 前端插件聚合入口：统一把常用能力挂到 Vue 应用实例上，方便全局通过 this.$xxx 使用。
// 包含页签（tab）、权限（auth）、缓存（cache）、模态交互（modal）、下载（download）。

import tab from './tab'           // 页签操作封装（刷新/关闭/批量关闭/打开）
import auth from './auth'         // 权限判断封装（角色/菜单权限校验）
import cache from './cache'       // 浏览器缓存封装（session/local）
import modal from './modal'       // 模态交互封装（消息/通知/确认/输入框/Loading）
import download from './download' // 通用下载封装（普通文件/资源/ZIP）

export default {
  install(app) {                  // Vue 3 插件格式：对外暴露 install 函数，参数为 app 实例
    app.config.globalProperties.$tab = tab      // 页签操作挂载为 $tab
    app.config.globalProperties.$auth = auth    // 权限对象挂载为 $auth
    app.config.globalProperties.$cache = cache  // 缓存对象挂载为 $cache
    app.config.globalProperties.$modal = modal  // 模态对象挂载为 $modal
    app.config.globalProperties.$download = download // 下载对象挂载为 $download
  }
}
