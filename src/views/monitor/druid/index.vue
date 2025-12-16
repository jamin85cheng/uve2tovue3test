<template>
  <!-- Druid 监控：内嵌 iframe 打开后端 Druid 页面，用于查看数据源与 SQL 监控信息。 -->
  <i-frame :src="url" />
</template>
<script>
import iFrame from "@/components/iFrame/index";
export default {
  name: "Druid",
  components: { iFrame },
  data() {
    return {
      url: process.env.VUE_APP_BASE_API + "/druid/login.html"
    };
  },
};
</script>
