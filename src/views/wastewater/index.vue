<template>
  <!-- 废水管理首页：展示关键指标（占位）、近期动态与快捷入口；后续接入数据后替换占位内容为图表与列表。 -->
  <div class="app-container">
    <el-row :gutter="16">
      <el-col :span="24" class="card-box">
        <el-card>
          <div slot="header">
            <span>废水管理系统 · 首页</span> <!-- 卡片标题 -->
          </div>
          <div>
            <p class="sub-title">用于展示废水管理的关键指标与快捷入口</p> <!-- 副标题说明 -->
            <el-row :gutter="16">
              <el-col :span="6">
                <el-card shadow="never" class="metric-card"> <!-- 指标卡片：今日报警 -->
                  <div class="metric-title">今日报警</div>
                  <div class="metric-value">--</div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card shadow="never" class="metric-card"> <!-- 指标卡片：在线设备 -->
                  <div class="metric-title">在线设备</div>
                  <div class="metric-value">--</div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card shadow="never" class="metric-card"> <!-- 指标卡片：数据采集率 -->
                  <div class="metric-title">数据采集率</div>
                  <div class="metric-value">--</div>
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card shadow="never" class="metric-card"> <!-- 指标卡片：昨日排放量 -->
                  <div class="metric-title">昨日排放量</div>
                  <div class="metric-value">--</div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>

      <el-col :span="12" class="card-box">
        <el-card>
          <div slot="header"><span>近期动态</span></div> <!-- 近期动态区块标题 -->
          <div class="placeholder">待接入数据后展示趋势与事件</div> <!-- 占位内容：后续替换为趋势图与事件列表 -->
        </el-card>
      </el-col>

      <el-col :span="12" class="card-box">
        <el-card>
          <div slot="header"><span>快捷入口</span></div> <!-- 快捷入口区块标题 -->
          <div class="quick-links">
            <el-button type="primary" plain>设备管理</el-button> <!-- 路由按钮占位：接入时跳转对应页面 -->
            <el-button type="success" plain>报警记录</el-button>
            <el-button type="warning" plain>排放报表</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  </template>

<script>
export default {
  name: 'WastewaterDashboard'
}
</script>

<style scoped>
.sub-title { color: #606266; margin-bottom: 12px; }
.metric-card { text-align: center; }
.metric-title { font-size: 14px; color: #909399; }
.metric-value { font-size: 22px; font-weight: 600; margin-top: 8px; }
.placeholder { color: #909399; }
.quick-links { display: flex; gap: 12px; flex-wrap: wrap; }
</style>
