// 图标注册入口：统一把 src/assets/icons/svg 下的所有 SVG 文件注册为可用的图标组件

import Vue from 'vue'                                  // 引入 Vue
import SvgIcon from '@/components/SvgIcon'             // 引入自定义 SvgIcon 组件（封装了 <svg> 使用）

// 全局注册组件：以后在任意页面可直接使用 <svg-icon name="xxx" />
Vue.component('svg-icon', SvgIcon)

// 使用 Webpack 的 require.context 收集 ./svg 目录下的所有 .svg 文件（不递归）
const req = require.context('./svg', false, /\.svg$/)
// 遍历并加载这些模块，使它们被打包器识别与引入（从而可被 SvgIcon 使用）
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
