<template>
  <header class="base-header">
    <div class="brand">
      <i class="el-icon-data-analysis"></i>
      <div>
        <h1>产业链协同与预警平台</h1>
        <p>多源数据接入 · 统一治理 · 智能预警</p>
      </div>
    </div>

    <div class="actions">
      <el-tag type="success" effect="dark" class="tag">
        数据通道 {{ integrationHealth }}%
      </el-tag>
      <el-tag :type="riskTag" effect="dark" class="tag">
        供应链风险：{{ riskLevel }}
      </el-tag>
      <el-button-group>
        <el-button size="mini" icon="el-icon-refresh" @click="$emit('toggle-menu')">
          菜单
        </el-button>
        <el-button size="mini" type="primary" icon="el-icon-video-play" @click="triggerSync">
          触发全网同步
        </el-button>
        <el-button size="mini" type="warning" icon="el-icon-data-line" @click="exportBlueprint">
          导出数据标准
        </el-button>
      </el-button-group>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'BaseHeader',
  computed: {
    ...mapGetters(['integrationHealth', 'riskLevel']),
    riskTag() {
      if (this.riskLevel === '低') return 'success';
      if (this.riskLevel === '中') return 'warning';
      return 'danger';
    },
  },
  methods: {
    ...mapActions(['runFullSync']),
    triggerSync() {
      this.$message.success('已触发全链路数据同步');
      this.runFullSync();
    },
    exportBlueprint() {
      this.$notify({
        title: '数据标准导出',
        message: '标准数据模型 JSON 已生成，可供个性化实施使用',
        type: 'success',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.base-header {
  height: 72px;
  background: rgba(8, 15, 30, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #d7e2ff;
}

.brand {
  display: flex;
  align-items: center;
  gap: 16px;

  h1 {
    margin: 0;
    font-size: 20px;
  }

  p {
    margin: 0;
    font-size: 12px;
    opacity: 0.66;
  }

  i {
    font-size: 32px;
    color: #3ce8ff;
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.tag {
  font-size: 12px;
}
</style>
