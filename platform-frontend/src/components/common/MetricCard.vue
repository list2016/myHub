<template>
  <div class="metric-card">
    <header>
      <small>{{ metric.detail }}</small>
      <span class="trend">{{ metric.trend }}</span>
    </header>
    <strong>{{ metric.value }}</strong>
    <p>{{ metric.label }}</p>
  </div>
</template>

<script>
export default {
  name: 'MetricCard',
  props: {
    metric: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.metric-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 120px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-muted);
  font-size: 12px;
}

.trend {
  color: var(--color-secondary);
}

strong {
  font-size: 28px;
}

p {
  margin: 0;
  color: var(--color-muted);
}
</style>
