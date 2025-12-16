// Vuex getters：统一把各模块的常用状态映射出来，供组件通过 this.$store.getters 便捷访问。
// 这些键名在项目各处被使用（如权限判断、导航栏、标签视图等）。
const getters = {
  sidebar: state => state.app.sidebar,                 // 侧边栏展开/折叠状态
  size: state => state.app.size,                       // 全局组件大小（Element UI size）
  device: state => state.app.device,                   // 设备类型（desktop/mobile）
  visitedViews: state => state.tagsView.visitedViews,  // 已访问的标签页集合
  cachedViews: state => state.tagsView.cachedViews,    // 被缓存的标签页（keep-alive）
  token: state => state.user.token,                    // 登录令牌
  avatar: state => state.user.avatar,                  // 用户头像
  name: state => state.user.name,                      // 用户名称
  introduction: state => state.user.introduction,      // 用户简介
  roles: state => state.user.roles,                    // 角色集合
  permissions: state => state.user.permissions,        // 菜单权限集合
  permission_routes: state => state.permission.routes, // 动态路由表（根据权限生成）
  topbarRouters: state => state.permission.topbarRouters, // 顶部栏路由集合
  defaultRoutes: state => state.permission.defaultRoutes,  // 默认路由集合
  sidebarRouters: state => state.permission.sidebarRouters // 侧边栏路由集合
}
export default getters
