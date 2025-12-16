import { debounce } from '@/utils'
// 图表自适应 mixins：用于 ECharts 等图表组件复用的“自动适配”逻辑。
// 思路：
// - 监听窗口 resize 事件（防抖处理），触发 this.resize()
// - 监听侧边栏（sidebar）展开/收起的过渡结束事件（transitionend），在宽度变化时触发 resize
// - 在 keep-alive 场景下，组件被激活（activated）时自动执行一次 resize

export default {
  data() {
    return {
      $_sidebarElm: null,   // 侧边栏元素引用
      $_resizeHandler: null // 防抖后的 resize 处理函数
    }
  },
  mounted() {
    this.initListener()     // 组件挂载后初始化监听器
  },
  activated() {
    if (!this.$_resizeHandler) {
      // avoid duplication init
      this.initListener()   // 避免重复初始化：仅当不存在处理器时再初始化
    }

    // when keep-alive chart activated, auto resize
    this.resize()           // keep-alive 激活后自动执行一次自适应
  },
  beforeDestroy() {
    this.destroyListener()  // 组件销毁前移除监听
  },
  deactivated() {
    this.destroyListener()  // keep-alive 失活时也移除监听，防止内存泄漏
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {    // 仅在宽度变化时触发（与布局相关）
        this.$_resizeHandler()             // 执行防抖处理后的 resize
      }
    },
    initListener() {
      this.$_resizeHandler = debounce(() => { // 使用防抖减少 resize 调用频次
        this.resize()
      }, 100)
      window.addEventListener('resize', this.$_resizeHandler) // 监听窗口变化

      this.$_sidebarElm = document.getElementsByClassName('sidebar-container')[0] // 获取侧边栏元素
      this.$_sidebarElm && this.$_sidebarElm.addEventListener('transitionend', this.$_sidebarResizeHandler) // 监听展开/收起动画结束
    },
    destroyListener() {
      window.removeEventListener('resize', this.$_resizeHandler)  // 解绑窗口监听
      this.$_resizeHandler = null

      this.$_sidebarElm && this.$_sidebarElm.removeEventListener('transitionend', this.$_sidebarResizeHandler) // 解绑侧边栏监听
    },
    resize() {
      const { chart } = this            // 约定：混入的组件应在 this.chart 上持有 echarts 实例
      chart && chart.resize()           // 如果存在图表实例则执行自适应
    }
  }
}
