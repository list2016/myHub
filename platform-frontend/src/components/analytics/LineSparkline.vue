<template>
  <div class="sparkline">
    <svg :viewBox="viewBox">
      <polyline :points="points" />
    </svg>
    <div class="labels">
      <strong>{{ latestValue }}{{ unit }}</strong>
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineSparkline',
  props: {
    values: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      default: ''
    }
  },
  computed: {
    viewBox() {
      return '0 0 100 40';
    },
    normalized() {
      const min = Math.min(...this.values);
      const max = Math.max(...this.values);
      const range = max - min || 1;
      return this.values.map((val) => ((val - min) / range) * 30 + 5);
    },
    points() {
      const step = 100 / (this.values.length - 1);
      return this.normalized.map((y, index) => `${index * step},${40 - y}`).join(' ');
    },
    latestValue() {
      return this.values[this.values.length - 1];
    }
  }
};
</script>

<style scoped lang="scss">
.sparkline {
  padding: 18px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

svg {
  width: 100%;
  height: 90px;
}

polyline {
  fill: none;
  stroke: var(--color-primary);
  stroke-width: 2;
}

.labels {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

strong {
  font-size: 24px;
}

span {
  color: var(--color-muted);
}
</style>
