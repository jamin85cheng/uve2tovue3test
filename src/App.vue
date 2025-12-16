<!-- 
  App.vue
  应用的根组件 (Root Component of the Application)
  这是整个Vue应用的入口组件，所有的页面都在这里渲染 (This is the entry component of the entire Vue app, all pages are rendered here)
-->
<template>
  <!-- 根元素，id为app (Root element with id 'app') -->
  <div id="app">
    <!-- 路由视图占位符 (Router view placeholder) -->
    <!-- 所有的页面组件都会根据路由规则在这里显示 (All page components will be displayed here according to routing rules) -->
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // 组件名称 (Component name)
  name: 'App',
  // metaInfo配置，用于管理页面的标题等元信息 (metaInfo configuration, used to manage page title and other meta info)
  metaInfo() {
    return {
      // 页面标题 (Page title)
      // 如果开启了动态标题且设置了标题，就用设置的标题 (If dynamic title is enabled and title is set, use the set title)
      title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
      // 标题模板 (Title template)
      // 格式化标题显示，例如 "页面标题 - 系统名称" (Format title display, e.g., "Page Title - System Name")
      titleTemplate: title => {
        return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
      }
    }
  }
})
</script>
