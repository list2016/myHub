<template>
  <section class="dashboard">
    <metric-bar :metrics="metricList" />

    <div class="grid">
      <trend-card :series="priceTrend" />
      <risk-gauge :score="integrationHealth" />
    </div>

    <div class="card-block alerts">
      <div class="card-title">
        <i class="el-icon-bell" /> 实时预警事件
      </div>
      <el-timeline>
        <el-timeline-item
          v-for="alert in alerts"
          :key="alert.id"
          :type="mapType(alert.level)"
          :timestamp="alert.time"
        >
          <strong>{{ alert.type }}</strong> - {{ alert.message }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import MetricBar from '@/components/dashboard/MetricBar.vue';
import TrendCard from '@/components/dashboard/TrendCard.vue';
import RiskGauge from '@/components/dashboard/RiskGauge.vue';

export default {
  name: 'DashboardView',
  components: {
    MetricBar,
    TrendCard,
    RiskGauge,
  },
  computed: {
    ...mapState(['priceTrend', 'deployments', 'dataResources']),
    ...mapGetters(['integrationHealth', 'activeAlerts']),
    alerts() {
      return this.activeAlerts;
    },
    metricList() {
      const connectorCount = this.$store.state.connectors.length;
      const standardized = this.dataResources.filter((r) => r.standardized).length;
      const nodes = this.deployments.reduce((sum, env) => sum + env.nodes, 0);
      return [
        { label: '已接入数据源', value: connectorCount, unit: '路', trend: 4.5 },
        { label: '标准化资源', value: standardized, unit: '类', trend: 2.1 },
        { label: '部署节点', value: nodes, unit: '台', trend: 6.2 },
        { label: '活跃预警', value: this.alerts.length, unit: '条', trend: -3.5 },
      ];
    },
  },
  methods: {
    mapType(level) {
      if (level === 'danger') return 'danger';
      if (level === 'warning') return 'warning';
      return 'primary';
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.alerts {
  ::v-deep .el-timeline-item__content {
    color: #e8f1ff;
  }
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
