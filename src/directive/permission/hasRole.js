/**
 * v-hasRole 角色权限处理
 * Copyright (c) 2019 ruoyi
 */
// 自定义指令：根据用户的角色集合（如admin）决定是否渲染某个按钮/元素
 
import store from '@/store'

export default {
  inserted(el, binding, vnode) {
    const { value } = binding
    const super_admin = "admin";
    const roles = store.getters && store.getters.roles

    if (value && value instanceof Array && value.length > 0) {
      const roleFlag = value

      const hasRole = roles.some(role => {
        return super_admin === role || roleFlag.includes(role)
      })

      if (!hasRole) {
        // 非指定角色则移除节点，实现按钮级别隐藏
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`请设置角色权限标签值"`)
    }
  }
}
