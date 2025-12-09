<template>
  <div class="operations">
    <header>
      <h2>系统设计、测试与多环境部署</h2>
      <p>平台支持本地部署、云部署与混合架构，覆盖设计、开发、测试、实施全流程，同时考虑环境迁移与数据扩展需求。</p>
    </header>

    <section class="pipeline">
      <h3>研发交付流程</h3>
      <div class="steps">
        <article v-for="step in steps" :key="step.title">
          <span class="index">{{ step.index }}</span>
          <h4>{{ step.title }}</h4>
          <p>{{ step.description }}</p>
        </article>
      </div>
    </section>

    <section class="deployments">
      <h3>部署形态</h3>
      <div class="profile-grid">
        <article v-for="profile in deploymentProfiles" :key="profile.id">
          <header>
            <h4>{{ profile.name }}</h4>
            <p>{{ profile.description }}</p>
          </header>
          <dl>
            <dt>能力亮点</dt>
            <dd>{{ profile.highlights.join('、') }}</dd>
            <dt>CI/CD</dt>
            <dd>{{ profile.ciCd.join('、') }}</dd>
            <dt>可观测性</dt>
            <dd>{{ profile.observability.join('、') }}</dd>
            <dt>合规</dt>
            <dd>{{ profile.compliance.join('、') }}</dd>
          </dl>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'OperationsView',
  computed: {
    ...mapState(['deploymentProfiles']),
    steps() {
      return [
        { index: '01', title: '系统底层设计', description: '基于统一架构与安全规范完成多层设计。' },
        { index: '02', title: '模块开发', description: '接入、治理、分析模块在低代码与代码混合模式下开发。' },
        { index: '03', title: '自动化测试', description: '集成模拟多数据源、仿真价格计算与性能测试。' },
        { index: '04', title: '本地部署', description: '在园区或企业内网部署基础能力与数据服务。' },
        { index: '05', title: '云服务器部署', description: '通过 IaC 脚本在云端弹性环境部署并与本地互联。' }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.operations {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.steps article {
  padding: 16px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.index {
  font-size: 24px;
  color: var(--color-primary);
}

.profile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.profile-grid article {
  padding: 18px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

header p {
  color: var(--color-muted);
}

dl dt {
  font-size: 12px;
  color: var(--color-muted);
}

dl dd {
  margin: 4px 0 12px;
}
</style>
