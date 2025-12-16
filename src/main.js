import { createApp } from 'vue'
// 应用入口：注册全局样式、插件、组件与工具方法，挂载路由与状态仓库，启动应用

import Cookies from 'js-cookie'
// 引入Cookie操作库

import ElementPlus from 'element-plus'
// 引入Element Plus组件库
import 'element-plus/dist/index.css'
// 引入Element Plus样式
import './assets/styles/element-variables.scss'
// 引入自定义主题样式

import '@/assets/styles/index.scss' // global css
// 引入全局通用样式
import '@/assets/styles/ruoyi.scss' // ruoyi css
// 引入若依框架特定样式
import App from './App'
// 引入根组件
import store from './store'
// 引入Vuex状态管理
import router from './router'
// 引入Vue Router路由管理
import directive from './directive' // directive
// 引入自定义指令
import plugins from './plugins' // plugins
// 引入自定义插件
import { download } from '@/utils/request'
// 引入通用下载方法

import './assets/icons' // icon
// 引入SVG图标
import './permission' // permission control
// 引入权限控制（路由守卫）
import { getDicts } from "@/api/system/dict/data";
// 引入字典查询API
import { getConfigKey } from "@/api/system/config";
// 引入配置查询API
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, handleTree } from "@/utils/ruoyi";
// 引入通用工具方法

// 分页组件
import Pagination from "@/components/Pagination";
// 自定义表格工具组件
import RightToolbar from "@/components/RightToolbar"
// 富文本组件
import Editor from "@/components/Editor"
// 文件上传组件
import FileUpload from "@/components/FileUpload"
// 图片上传组件
import ImageUpload from "@/components/ImageUpload"
// 图片预览组件
import ImagePreview from "@/components/ImagePreview"
// 字典标签组件
import DictTag from '@/components/DictTag'
// 头部标签组件
import VueMeta from 'vue-meta'
// 字典数据组件
import DictData from '@/components/DictData'

// 创建Vue应用实例
const app = createApp(App)

// 全局方法挂载
app.config.globalProperties.getDicts = getDicts
// 挂载字典查询方法
app.config.globalProperties.getConfigKey = getConfigKey
// 挂载配置查询方法
app.config.globalProperties.parseTime = parseTime
// 挂载时间格式化方法
app.config.globalProperties.resetForm = resetForm
// 挂载表单重置方法
app.config.globalProperties.addDateRange = addDateRange
// 挂载日期范围添加方法
app.config.globalProperties.selectDictLabel = selectDictLabel
// 挂载字典标签回显方法
app.config.globalProperties.selectDictLabels = selectDictLabels
// 挂载多选字典标签回显方法
app.config.globalProperties.download = download
// 挂载通用下载方法
app.config.globalProperties.handleTree = handleTree
// 挂载树形结构处理方法

// 全局组件挂载
app.component('DictTag', DictTag)
app.component('Pagination', Pagination)
app.component('RightToolbar', RightToolbar)
app.component('Editor', Editor)
app.component('FileUpload', FileUpload)
app.component('ImageUpload', ImageUpload)
app.component('ImagePreview', ImagePreview)

app.use(directive)
// 注册全局指令
app.use(plugins)
// 注册全局插件
app.use(VueMeta)
// 注册VueMeta插件，用于管理页面Meta信息
DictData.install()
// 安装字典数据组件

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

app.use(ElementPlus, {
  size: Cookies.get('size') || 'medium' // set element-plus default size
  // 设置Element Plus默认尺寸，优先从Cookie获取
})

// 关闭生产环境提示
app.config.productionTip = false

// 挂载应用
app.use(router)
   .use(store)
   .mount('#app')
// 渲染根组件
