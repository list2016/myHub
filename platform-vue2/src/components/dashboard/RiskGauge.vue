<template>
  <div class="risk-gauge card-block">
    <div class="card-title">
      <i class="el-icon-warning-outline" />供应链风险雷达
    </div>
    <div class="gauge" ref="gauge"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'RiskGauge',
  props: {
    score: {
      type: Number,
      default: 50,
    },
  },
  mounted() {
    this.renderGauge();
    window.addEventListener('resize', this.resize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize);
    if (this.chart) {
      this.chart.dispose();
    }
  },
  methods: {
    resize() {
      if (this.chart) this.chart.resize();
    },
    renderGauge() {
      this.chart = echarts.init(this.$refs.gauge);
      this.chart.setOption({
        series: [
          {
            type: 'gauge',
            startAngle: 210,
            endAngle: -30,
            min: 0,
            max: 100,
            axisLine: {
              lineStyle: {
                width: 10,
                color: [
                  [0.4, '#3ce8ff'],
                  [0.7, '#f6c343'],
                  [1, '#ff4f81'],
                ],
              },
            },
            pointer: {
              icon: 'path://M2 0 L-2 0 L0 -50 Z',
              length: '65%',
              width: 6,
              itemStyle: { color: '#fff' },
            },
            detail: {
              offsetCenter: [0, '60%'],
              formatter: '{value}%',
              fontSize: 24,
            },
            data: [{ value: this.score }],
          },
        ],
      });
    },
  },
  watch: {
    score() {
      if (this.chart) {
        this.chart.setOption({ series: [{ data: [{ value: this.score }] }] });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.gauge {
  width: 100%;
  height: 260px;
}
</style>
