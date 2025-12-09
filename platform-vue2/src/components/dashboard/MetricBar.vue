<template>
  <div class="metric-bar card-block">
    <div class="metric" v-for="metric in metrics" :key="metric.label">
      <p class="label">{{ metric.label }}</p>
      <div class="value">
        {{ metric.value }}
        <span class="unit">{{ metric.unit }}</span>
      </div>
      <el-tag size="mini" :type="metric.trend > 0 ? 'success' : 'danger'">
        {{ metric.trend > 0 ? '+' : '' }}{{ metric.trend }}%
      </el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MetricBar',
  props: {
    metrics: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.metric-bar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}

.metric {
  background: rgba(16, 28, 50, 0.9);
  border-radius: 12px;
  padding: 12px;
}

.label {
  margin: 0;
  font-size: 12px;
  opacity: 0.7;
}

.value {
  font-size: 26px;
  font-weight: 600;
  margin: 6px 0;
}

.unit {
  font-size: 12px;
  margin-left: 8px;
}
</style>
