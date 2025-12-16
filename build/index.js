// 构建脚本：支持 `npm run build --preview` 在本地启动一个静态预览服务，
// 并可通过 `--report` 打开打包分析页面。普通模式则直接调用 vue-cli 的构建命令。

const { run } = require('runjs')             // 引入 runjs，方便在 Node 中执行命令行
const chalk = require('chalk')               // 引入 chalk，用彩色输出提示信息
const config = require('../vue.config.js')   // 引入项目的 Vue CLI 配置，以获取 publicPath 等
const rawArgv = process.argv.slice(2)        // 读取命令行参数（去掉前两个 node 和脚本文件名）
const args = rawArgv.join(' ')               // 把参数拼成字符串传给构建命令

// 判断是否是预览模式：支持 `npm_config_preview` 环境变量或 `--preview` 参数
if (process.env.npm_config_preview || rawArgv.includes('--preview')) {
  const report = rawArgv.includes('--report')    // 是否生成打包分析报告（report.html）

  run(`vue-cli-service build ${args}`)           // 先执行打包（生成 dist 目录）

  const port = 9526                              // 预览服务端口（默认 9526）
  const publicPath = config.publicPath           // 取出构建配置中的 publicPath（访问根路径）

  var connect = require('connect')               // 轻量 HTTP 服务器（中间件机制）
  var serveStatic = require('serve-static')      // 静态文件中间件（托管 dist 目录）
  const app = connect()                          // 创建服务实例

  // 挂载静态文件服务：把 dist 目录映射到 publicPath（例如 "/"）
  app.use(
    publicPath,
    serveStatic('./dist', {
      index: ['index.html', '/']                 // 默认首页文件
    })
  )

  // 启动预览服务，并在控制台输出访问地址；如启用了 --report 同时提示报告地址
  app.listen(port, function () {
    console.log(chalk.green(`> Preview at  http://localhost:${port}${publicPath}`))
    if (report) {
      console.log(chalk.green(`> Report at  http://localhost:${port}${publicPath}report.html`))
    }
  })
} else {
  // 非预览模式：直接执行构建命令
  run(`vue-cli-service build ${args}`)
}
