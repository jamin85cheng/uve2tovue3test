// 全局状态仓库：组织应用模块状态（用户、权限、标签视图、设置等），
// 通过 Vuex 统一管理，便于跨组件通信与持久化。
import { createStore } from 'vuex'
import app from './modules/app'           // 应用级状态（侧边栏、设备类型等）
import user from './modules/user'         // 用户与登录态
import tagsView from './modules/tagsView' // 标签视图（页签）
import permission from './modules/permission' // 路由权限（动态路由）
import settings from './modules/settings' // 系统设置（主题、大小等）
import getters from './getters'           // 统一的 getters 映射

const store = createStore({
  modules: {
    app,
    user,
    tagsView,
    permission,
    settings
  },
  getters
})

export default store
