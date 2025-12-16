import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
    })
  ],
  // 配置路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 开发服务器配置
  server: {
    port: process.env.port || 80,
    host: '0.0.0.0',
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:9000`,
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^' + process.env.VUE_APP_BASE_API), '')
      }
    }
  },
  // 构建配置
  build: {
    // 生成静态资源的存放路径
    assetsDir: 'static',
    // 生产环境是否生成 sourceMap 文件
    sourcemap: false,
    // 构建输出目录
    outDir: 'dist',
    // 开启 Gzip 压缩
    rollupOptions: {
      output: {
        manualChunks: {
          // 将第三方库打包到不同的 chunk 中
          'chunk-libs': ['vue', 'vue-router', 'vuex', 'axios'],
          'chunk-element-plus': ['element-plus']
        }
      }
    }
  },
  // CSS 相关配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
})
