<template>
  <div class="roles">
    <header>
      <h2>角色驱动的工业应用开发</h2>
      <p>基于统一平台能力，按角色进行个性化开发与实施，快速交付政府、企业、金融等工业应用。</p>
    </header>

    <section class="role-grid">
      <article v-for="role in roleApps" :key="role.role">
        <header>
          <h3>{{ role.role }}</h3>
          <p>{{ role.goals.join('、') }}</p>
        </header>
        <dl>
          <dt>工具套件</dt>
          <dd>{{ role.toolkits.join('、') }}</dd>
          <dt>数据重点</dt>
          <dd>{{ role.dataFocus.join('、') }}</dd>
          <dt>交付方式</dt>
          <dd>{{ role.delivery }}</dd>
        </dl>
      </article>
    </section>

    <section class="dev-kit">
      <h3>角色化开发工具链</h3>
      <ul>
        <li v-for="kit in devKit" :key="kit.title">
          <strong>{{ kit.title }}</strong>
          <p>{{ kit.description }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'RoleCenterView',
  computed: {
    ...mapState(['roleApps']),
    devKit() {
      return [
        { title: '低代码编排 Studio', description: '通过组件拖拽快速组合指标、图表、预警流程。' },
        { title: '角色权限治理', description: '基于 RBAC 和数据域授权，确保跨主体协作安全。' },
        { title: '工业应用模板库', description: '提供供应链预警、协同排产、融资风控等模板。' },
        { title: '能力开放接口', description: '统一 API、消息与 Webhook，方便角色化扩展。' }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.roles {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.role-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.role-grid article {
  padding: 18px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.dev-kit ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.dev-kit li {
  padding: 16px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
</style>
