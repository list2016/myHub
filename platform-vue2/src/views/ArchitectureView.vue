<template>
  <section>
    <div class="card-block intro">
      <div class="card-title">
        <i class="el-icon-s-management" /> 企业设备与接入系统架构（五层）
      </div>
      <p>
        架构分为服务行业、数据资源、应用工具、数据来源、基础设施五层。通过层层解耦与模块化接口，
        可实现部署环境的灵活迁移与接入数据的快速扩展，为角色化工业应用提供稳定底座。
      </p>
    </div>

    <div class="layer-grid">
      <el-card v-for="layer in architectureLayers" :key="layer.id" shadow="hover">
        <h3>{{ layer.name }}</h3>
        <p>{{ layer.description }}</p>
        <el-tag v-for="cap in layer.capabilities" :key="cap" size="mini" effect="dark">
          {{ cap }}
        </el-tag>
      </el-card>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ArchitectureView',
  computed: {
    ...mapState(['architectureLayers']),
  },
};
</script>

<style lang="scss" scoped>
.layer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.layer-grid h3 {
  margin-top: 0;
}

.layer-grid p {
  min-height: 72px;
}

.layer-grid .el-tag {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
