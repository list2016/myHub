<template>
  <div class="trend-card card-block">
    <div class="card-title">
      <i class="el-icon-trend-charts" />价格共识指数走势
    </div>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'TrendCard',
  props: {
    series: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.renderChart();
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
      if (this.chart) {
        this.chart.resize();
      }
    },
    renderChart() {
      if (!this.chart) {
        this.chart = echarts.init(this.$refs.chart);
      }
      this.chart.setOption({
        tooltip: { trigger: 'axis' },
        grid: { left: 24, right: 24, top: 32, bottom: 24 },
        xAxis: {
          type: 'category',
          data: this.series.map((item) => item.date),
          axisLine: { lineStyle: { color: '#314b77' } },
        },
        yAxis: {
          type: 'value',
          axisLine: { lineStyle: { color: '#314b77' } },
          splitLine: { lineStyle: { color: 'rgba(255,255,255,0.06)' } },
        },
        series: [
          {
            type: 'line',
            data: this.series.map((item) => item.price),
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(60, 232, 255, 0.35)' },
                { offset: 1, color: 'rgba(60, 232, 255, 0.02)' },
              ]),
            },
            lineStyle: { color: '#3ce8ff' },
            symbol: 'circle',
            symbolSize: 6,
          },
        ],
      });
    },
  },
  watch: {
    series: {
      deep: true,
      handler() {
        this.renderChart();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 280px;
}
</style>
