module.exports = {
  /**
   * 侧边栏主题 深色主题theme-dark，浅色主题theme-light
   * (Sidebar theme: dark theme 'theme-dark', light theme 'theme-light')
   */
  sideTheme: 'theme-dark',

  /**
   * 是否系统布局配置
   * (Whether to show system layout settings)
   */
  showSettings: false,

  /**
   * 是否显示顶部导航
   * (Whether to show top navigation)
   */
  topNav: false,

  /**
   * 是否显示 tagsView
   * (Whether to show tagsView)
   */
  tagsView: true,

  /**
   * 是否固定头部
   * (Whether to fix the header)
   */
  fixedHeader: false,

  /**
   * 是否显示logo
   * (Whether to show the logo)
   */
  sidebarLogo: true,

  /**
   * 是否显示动态标题
   * (Whether to show dynamic title)
   */
  dynamicTitle: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   * (Error log component display setting)
   */
  errorLog: 'production'
}
