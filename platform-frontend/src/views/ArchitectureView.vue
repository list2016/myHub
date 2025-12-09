<template>
  <div class="architecture">
    <header>
      <div>
        <h2>五层架构全景</h2>
        <p>企业设备和接入系统整体架构分为服务行业、数据资源、应用工具、数据来源、基础设施五层，可迁移部署并支持扩展数据接入。</p>
      </div>
    </header>

    <section class="layer-stack">
      <LayerCard v-for="layer in architectureLayers" :key="layer.id" :layer="layer" />
    </section>

    <section class="flow">
      <h3>跨层能力矩阵</h3>
      <table>
        <thead>
          <tr>
            <th>来源→目标</th>
            <th>数据能力</th>
            <th>平台服务</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in matrix" :key="row.from + row.to">
            <td>{{ row.from }} → {{ row.to }}</td>
            <td>{{ row.data }}</td>
            <td>{{ row.service }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LayerCard from '@/components/layers/LayerCard.vue';

export default {
  name: 'ArchitectureView',
  components: { LayerCard },
  computed: {
    ...mapState(['architectureLayers']),
    matrix() {
      return [
        { from: '基础设施', to: '数据来源', data: '边缘采集/网络安全', service: '设备管理、网络切片、零信任访问' },
        { from: '数据来源', to: '数据资源', data: '多协议数据流', service: '接入治理、脱敏、指标对齐' },
        { from: '数据资源', to: '应用工具', data: '标准化指标/模型', service: 'API Gateway、指标工厂、标签服务' },
        { from: '应用工具', to: '服务行业', data: '分析结果/应用', service: '角色化应用、预警推送、工作台' },
        { from: '应用工具', to: '基础设施', data: '算力需求/运维指标', service: 'DevOps 流水线、自动扩缩容' }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.architecture {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.layer-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.flow table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 12px;
}

th {
  background: rgba(255, 255, 255, 0.05);
}
</style>
