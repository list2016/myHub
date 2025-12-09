<template>
  <section>
    <div class="card-block intro">
      <div class="card-title">
        <i class="el-icon-guide" /> 系统部署与迁移能力
      </div>
      <p>
        支持本地、云端、混合等多种部署模式，覆盖系统底层设计、开发、测试、本地部署与云服务器部署全流程，
        并提供部署脚本、监控探针和自动化验收，确保接入扩展时的弹性伸缩与安全隔离。
      </p>
    </div>

    <div class="deploy-grid">
      <el-card v-for="env in deployments" :key="env.id" class="deploy-card" shadow="hover">
        <div class="header">
          <h3>{{ env.name }}</h3>
          <el-tag type="success" effect="dark">{{ env.status }}</el-tag>
        </div>
        <p>{{ env.type }} · {{ env.nodes }} 节点 · 时延 {{ env.latency }}</p>
        <el-tag v-for="item in env.workloads" :key="item" size="mini">{{ item }}</el-tag>
      </el-card>
    </div>

    <div class="card-block">
      <div class="card-title">
        <i class="el-icon-setting" /> 个性化部署策划
      </div>
      <el-form :model="plan" inline label-width="120px" class="plan-form">
        <el-form-item label="部署角色">
          <el-select v-model="plan.role" placeholder="选择角色">
            <el-option label="链主企业" value="chain" />
            <el-option label="生态企业" value="eco" />
            <el-option label="政府监管" value="gov" />
          </el-select>
        </el-form-item>
        <el-form-item label="运行层级">
          <el-checkbox-group v-model="plan.layers">
            <el-checkbox label="数据来源" />
            <el-checkbox label="应用工具" />
            <el-checkbox label="数据资源" />
            <el-checkbox label="服务行业" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="部署区域">
          <el-radio-group v-model="plan.region">
            <el-radio-button label="本地" />
            <el-radio-button label="云端" />
            <el-radio-button label="混合" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="扩展计划">
          <el-slider v-model="plan.scale" :min="10" :max="200" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitPlan">生成部署剧本</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DeploymentView',
  data() {
    return {
      plan: {
        role: 'chain',
        layers: ['数据来源', '应用工具'],
        region: '混合',
        scale: 80,
      },
    };
  },
  computed: {
    ...mapState(['deployments']),
  },
  methods: {
    submitPlan() {
      this.$alert(
        `角色：${this.plan.role} / 层级：${this.plan.layers.join('、')} / 区域：${this.plan.region} / 节点：${this.plan.scale}`,
        '部署剧本已生成'
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.deploy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.deploy-card {
  background: rgba(16, 28, 50, 0.92);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.plan-form {
  ::v-deep .el-form-item__content {
    min-width: 260px;
  }
}

@media (max-width: 768px) {
  .plan-form {
    display: block;

    ::v-deep .el-form-item {
      width: 100%;
    }
  }
}
</style>
