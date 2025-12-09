<template>
  <section>
    <div class="card-block filters">
      <div class="card-title">
        <i class="el-icon-connection" /> 底层数据接入与治理
      </div>
      <div class="filter-row">
        <el-select v-model="layer" placeholder="按架构层筛选" clearable>
          <el-option label="全部" value="" />
          <el-option label="服务行业" value="服务行业" />
          <el-option label="数据资源" value="数据资源" />
          <el-option label="应用工具" value="应用工具" />
          <el-option label="数据来源" value="数据来源" />
          <el-option label="基础设施" value="基础设施" />
        </el-select>
        <el-input v-model="keyword" placeholder="搜索数据源/协议/责任单位">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button type="primary" icon="el-icon-video-play" @click="runFullSync">
          全链路测试
        </el-button>
      </div>
    </div>

    <div class="connector-grid">
      <data-source-card
        v-for="connector in filteredConnectors"
        :key="connector.id"
        :connector="connector"
        @refresh="refreshConnector"
      />
    </div>

    <div class="card-block timeline">
      <div class="card-title">
        <i class="el-icon-time" /> 接入与校验日志
      </div>
      <el-timeline>
        <el-timeline-item
          v-for="log in syncLogs"
          :key="log.id"
          :timestamp="log.time"
          type="primary"
        >
          <strong>{{ log.title }}</strong>
          <p>{{ log.detail }}</p>
        </el-timeline-item>
      </el-timeline>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import DataSourceCard from '@/components/common/DataSourceCard.vue';

export default {
  name: 'IntegrationView',
  components: { DataSourceCard },
  data() {
    return {
      layer: '',
      keyword: '',
    };
  },
  computed: {
    ...mapState(['connectors']),
    ...mapGetters(['syncLogs']),
    filteredConnectors() {
      return this.connectors
        .filter((item) => !this.layer || item.layer === this.layer)
        .filter((item) => {
          if (!this.keyword) return true;
          const key = this.keyword.toLowerCase();
          return (
            item.name.toLowerCase().includes(key) ||
            item.source.toLowerCase().includes(key) ||
            item.owner.toLowerCase().includes(key)
          );
        });
    },
  },
  methods: {
    ...mapActions(['runFullSync', 'refreshConnector']),
  },
};
</script>

<style lang="scss" scoped>
.filters {
  margin-bottom: 24px;
}

.filter-row {
  display: flex;
  gap: 16px;
  align-items: center;

  .el-select,
  .el-input {
    min-width: 220px;
  }
}

.connector-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
}

.timeline {
  margin-top: 24px;
}

@media (max-width: 768px) {
  .filter-row {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
