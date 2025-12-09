<template>
  <section>
    <div class="card-block intro">
      <div class="card-title">
        <i class="el-icon-coin" /> 数据资源层能力
      </div>
      <p>
        针对政策新闻、宏观指标、财经、企业画像、供需、生产、订单、实时运行等多维数据，
        建立统一的模型设计、指标体系、内容建设与查询服务，支撑产业链系统对各类数据加工、清洗、加工的需求。
      </p>
      <div class="stats">
        <div>
          <span>模型覆盖</span>
          <strong>86%</strong>
        </div>
        <div>
          <span>日指标查询</span>
          <strong>42,000+</strong>
        </div>
        <div>
          <span>质量校验通过率</span>
          <strong>99.3%</strong>
        </div>
      </div>
    </div>

    <data-resource-table
      :resources="dataResources"
      @toggle="toggleResourceStandard"
      @open="openDialog"
    />

    <el-dialog :visible.sync="dialogVisible" :title="activeResource?.name" width="520px">
      <p>数据类型：{{ activeResource?.category }}</p>
      <p>粒度：{{ activeResource?.granularity }} · 时间跨度：{{ activeResource?.timeframe }}</p>
      <p>指标数量：{{ activeResource?.indicators }} · 权责单位：{{ activeResource?.owner }}</p>
      <el-alert
        v-if="activeResource"
        :title="activeResource.standardized ? '已纳入统一数据标准' : '待纳入统一数据标准'"
        :type="activeResource.standardized ? 'success' : 'info'"
        show-icon
      />
      <span slot="footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="dialogVisible = false">导出模型</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DataResourceTable from '@/components/dataResource/DataResourceTable.vue';

export default {
  name: 'DataResourceView',
  components: { DataResourceTable },
  data() {
    return {
      dialogVisible: false,
      activeResource: null,
    };
  },
  computed: {
    ...mapState(['dataResources']),
  },
  methods: {
    ...mapActions(['toggleResourceStandard']),
    openDialog(resource) {
      this.activeResource = resource;
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.intro p {
  margin-top: 0;
  color: rgba(232, 241, 255, 0.85);
}

.stats {
  display: flex;
  gap: 24px;
  margin-top: 12px;

  span {
    display: block;
    font-size: 12px;
    opacity: 0.7;
  }

  strong {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .stats {
    flex-direction: column;
  }
}
</style>
