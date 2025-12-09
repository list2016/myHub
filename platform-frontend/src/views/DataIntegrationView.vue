<template>
  <div class="integration">
    <header class="section-head">
      <div>
        <h2>多源数据接入与治理</h2>
        <p>为不同来源的数据提供专属模块与接口，解决产业链系统中数据接入困难的问题。</p>
      </div>
      <div class="controls">
        <label>选择架构层</label>
        <div class="chips">
          <button
            v-for="layer in layers"
            :key="layer"
            :class="{ active: selectedLayer === layer }"
            @click="selectedLayer = layer"
          >
            {{ layer }}
          </button>
        </div>
      </div>
    </header>

    <section class="sources">
      <h3>数据来源能力矩阵</h3>
      <div class="source-grid">
        <article v-for="source in dataSources" :key="source.id">
          <header>
            <h4>{{ source.name }}</h4>
            <small>{{ source.frequency }} · {{ source.granularity }}</small>
          </header>
          <p>{{ source.description }}</p>
          <dl>
            <dt>提供方</dt>
            <dd>{{ source.providers.join('、') }}</dd>
            <dt>接口</dt>
            <dd>{{ source.interface }}</dd>
          </dl>
        </article>
      </div>
    </section>

    <section class="connectors">
      <h3>特定集成模块</h3>
      <div class="connector-grid">
        <DataConnectorCard v-for="connector in filteredConnectors" :key="connector.id" :connector="connector" />
      </div>
      <p class="helper">
        通过多协议采集、治理与安全同步，平台可扩展接入新的数据来源，并自动纳入监控体系。
      </p>
    </section>

    <section class="governance">
      <h3>接入治理策略</h3>
      <ul>
        <li v-for="item in governance" :key="item.title">
          <strong>{{ item.title }}</strong>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DataConnectorCard from '@/components/cards/DataConnectorCard.vue';

export default {
  name: 'DataIntegrationView',
  components: { DataConnectorCard },
  data() {
    return {
      selectedLayer: '全部'
    };
  },
  computed: {
    ...mapState(['dataSources', 'integrationModules']),
    layers() {
      const names = Array.from(new Set(this.integrationModules.map((item) => item.layer)));
      return ['全部', ...names];
    },
    filteredConnectors() {
      if (this.selectedLayer === '全部') {
        return this.integrationModules;
      }
      return this.integrationModules.filter((module) => module.layer === this.selectedLayer);
    },
    governance() {
      return [
        { title: '多协议接入框架', description: '内置 REST、GraphQL、MQTT、OPC-UA、文件直传等接入模板。' },
        { title: '统一数据标准', description: '通过指标口径管理与模型建模工具，保证多来源数据一致性。' },
        { title: '分级安全策略', description: '支持密级划分、脱敏、Token 化与访问审计，覆盖本地到云端。' },
        { title: '扩展式 Adapter 市集', description: '面向第三方开发者的 SDK，快速接入新的产业链数据源。' }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.integration {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.controls {
  min-width: 320px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.chips button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  padding: 6px 12px;
  color: var(--color-text);
  cursor: pointer;
}

.chips button.active {
  border-color: var(--color-primary);
}

.sources article {
  padding: 16px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.source-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.connectors .connector-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.helper {
  color: var(--color-muted);
}

.governance ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.governance li {
  padding: 16px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
</style>
