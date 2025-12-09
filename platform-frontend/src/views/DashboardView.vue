<template>
  <div class="dashboard">
    <section class="hero">
      <div>
        <h2>产业链数据统筹与供应链预警中心</h2>
        <p>
          平台实时接入政策、宏观、财经、企业、供需、生产、订单、运行与重点产业链数据，在统一的数据资源层完成清洗、加工与指标建模，形成价格共识、供需预警与协同决策能力。
        </p>
      </div>
      <ul>
        <li>
          <strong>{{ activeConnectors.length }}</strong>
          <span>运行中的集成模块</span>
        </li>
        <li>
          <strong>{{ dataSources.length }}</strong>
          <span>覆盖的数据源类别</span>
        </li>
        <li>
          <strong>{{ resourceCatalog.length }}</strong>
          <span>统一标准资源包</span>
        </li>
      </ul>
    </section>

    <section class="metrics-grid">
      <MetricCard v-for="metric in metrics" :key="metric.id" :metric="metric" />
    </section>

    <section class="analytics">
      <LineSparkline
        v-for="snapshot in analyticsSnapshots"
        :key="snapshot.id"
        :values="snapshot.values"
        :title="snapshot.title"
        :unit="snapshot.unit"
      />
    </section>

    <section class="data-pipeline">
      <header>
        <h3>多层次数据流转</h3>
        <p>从接入、治理到应用的端到端路径，满足供应链协同与预警场景。</p>
      </header>
      <div class="pipeline-steps">
        <div class="step" v-for="step in pipeline" :key="step.title">
          <span class="index">{{ step.index }}</span>
          <div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="connector-preview">
      <header>
        <div>
          <h3>关键集成模块</h3>
          <p>为不同数据来源提供特定适配器与治理流程。</p>
        </div>
        <router-link to="/integration">查看全部 →</router-link>
      </header>
      <div class="connector-grid">
        <DataConnectorCard v-for="connector in featuredConnectors" :key="connector.id" :connector="connector" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import MetricCard from '@/components/common/MetricCard.vue';
import LineSparkline from '@/components/analytics/LineSparkline.vue';
import DataConnectorCard from '@/components/cards/DataConnectorCard.vue';

export default {
  name: 'DashboardView',
  components: { MetricCard, LineSparkline, DataConnectorCard },
  computed: {
    ...mapState(['metrics', 'analyticsSnapshots', 'integrationModules', 'dataSources', 'resourceCatalog']),
    ...mapGetters(['activeConnectors']),
    featuredConnectors() {
      return this.integrationModules.slice(0, 3);
    },
    pipeline() {
      return [
        { index: '01', title: '多协议接入', description: '标准化适配政策、宏观、生产、订单与实时数据。' },
        { index: '02', title: '统一建模', description: '在数据资源层完成模型/指标/标签构建。' },
        { index: '03', title: '智能分析', description: '基于价格共识、图谱与预测模型形成洞察。' },
        { index: '04', title: '角色分发', description: '面向政府、企业、金融等角色的个性化应用。' }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.hero {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(31, 111, 235, 0.35), rgba(0, 184, 148, 0.2));
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hero h2 {
  margin-top: 0;
}

.hero p {
  color: var(--color-surface);
}

.hero ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero li {
  background: rgba(5, 7, 14, 0.4);
  padding: 14px 18px;
  border-radius: var(--radius-md);
  text-align: right;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.analytics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.data-pipeline {
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  padding: 24px;
  background: rgba(255, 255, 255, 0.01);
}

.pipeline-steps {
  margin-top: 18px;
  display: grid;
  gap: 16px;
}

.step {
  display: flex;
  gap: 16px;
  padding: 14px;
  border-radius: var(--radius-md);
  border: 1px dashed rgba(255, 255, 255, 0.1);
}

.index {
  font-size: 24px;
  color: var(--color-primary);
}

.connector-preview header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.connector-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
</style>
