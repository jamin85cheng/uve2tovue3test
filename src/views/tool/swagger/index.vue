<template>
  <!-- Swagger 页面：通过内嵌 iframe 展示后端 Swagger 文档，地址基于后端基路径拼接。 -->
  <i-frame :src="url" />
</template>
<script>
import iFrame from "@/components/iFrame/index";
export default {
  name: "Swagger",
  components: { iFrame },
  data() {
    return {
      url: process.env.VUE_APP_BASE_API + "/swagger-ui/index.html"
    };
  },
};
</script>
