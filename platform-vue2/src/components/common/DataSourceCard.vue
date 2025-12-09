<template>
  <el-card shadow="always" class="connector-card">
    <div class="header">
      <div>
        <h3>{{ connector.name }}</h3>
        <p>{{ connector.source }} · {{ connector.protocol }}</p>
      </div>
      <el-tag :type="statusType" effect="dark">
        {{ statusLabel }}
      </el-tag>
    </div>
    <el-descriptions :column="2" size="mini" class="desc">
      <el-descriptions-item label="覆盖范围">{{ connector.coverage }}</el-descriptions-item>
      <el-descriptions-item label="新鲜度">{{ connector.freshness }}</el-descriptions-item>
      <el-descriptions-item label="负责单位">{{ connector.owner }}</el-descriptions-item>
      <el-descriptions-item label="最后同步">{{ connector.lastSync }}</el-descriptions-item>
    </el-descriptions>
    <div class="footer">
      <el-button type="primary" size="mini" @click="$emit('refresh', connector.id)">
        立即巡检
      </el-button>
      <el-button size="mini" plain>接口文档</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'DataSourceCard',
  props: {
    connector: {
      type: Object,
      required: true,
    },
  },
  computed: {
    statusType() {
      if (this.connector.status === 'online') return 'success';
      if (this.connector.status === 'warning') return 'warning';
      return 'danger';
    },
    statusLabel() {
      if (this.connector.status === 'online') return '运行正常';
      if (this.connector.status === 'warning') return '波动';
      return '中断';
    },
  },
};
</script>

<style lang="scss" scoped>
.connector-card {
  background: rgba(16, 28, 50, 0.96);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #d7e2ff;

  ::v-deep .el-card__body {
    padding: 16px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  h3 {
    margin: 0;
    font-size: 16px;
  }

  p {
    margin: 4px 0 0;
    opacity: 0.6;
  }
}

.footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
}
</style>
