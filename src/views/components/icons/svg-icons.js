// 项目内 SVG 图标名称清单：通过 require.context 枚举 src/assets/icons/svg 下的所有文件名
const req = require.context('../../../assets/icons/svg', false, /\.svg$/) // 不递归，只匹配 .svg 文件
const requireAll = requireContext => requireContext.keys()                 // 取出所有相对路径键

const re = /\.\/(.*)\.svg/                                              // 正则：提取文件名（去掉 ./ 和 .svg）

const svgIcons = requireAll(req).map(i => {                                // 遍历并提取名称
  return i.match(re)[1]
})

export default svgIcons                                                     // 导出给图标展示页使用
