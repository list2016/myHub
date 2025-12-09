<template>
  <div class="card-block">
    <div class="card-title">
      <i class="el-icon-coin" /> 数据资源资产
    </div>
    <el-table :data="resources" stripe border size="small">
      <el-table-column prop="name" label="资源名称" min-width="160" />
      <el-table-column prop="category" label="数据类型" width="160" />
      <el-table-column prop="granularity" label="粒度" width="100" />
      <el-table-column prop="timeframe" label="时间跨度" width="120" />
      <el-table-column prop="indicators" label="指标量" width="100" />
      <el-table-column prop="owner" label="责任主体" width="140" />
      <el-table-column label="标准化" width="120">
        <template slot-scope="scope">
          <el-tag :type="scope.row.standardized ? 'success' : 'info'">
            {{ scope.row.standardized ? '已建模' : '待建设' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column width="180" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="$emit('toggle', scope.row.id)">
            {{ scope.row.standardized ? '撤销标准' : '纳入标准' }}
          </el-button>
          <el-button size="mini" @click="$emit('open', scope.row)">
            查看模型
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DataResourceTable',
  props: {
    resources: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
