<script>
// 重定向组件：用于 `/redirect/:path*` 路由，将参数中的 path 与 query 恢复并替换到目标路由，避免刷新丢失。
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
