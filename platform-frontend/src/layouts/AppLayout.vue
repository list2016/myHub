<template>
  <div class="app-shell">
    <header class="shell-header">
      <div class="header-left">
        <h1>产业链数据融合与应用平台</h1>
        <p>
          针对底层产业链不同来源的数据，提供标准化接入、模型构建与多端部署能力，支撑产业协同与供应链预警业务。
        </p>
        <div class="badges">
          <span>多源接入</span>
          <span>价格共识</span>
          <span>角色驱动</span>
          <span>本地&云部署</span>
        </div>
      </div>
      <div class="header-right">
        <div class="sync-state">
          <strong>数据接入监控</strong>
          <p>最近同步：{{ lastSynced }}</p>
          <button @click="refreshData">重新拉取</button>
        </div>
      </div>
    </header>

    <div class="shell-body">
      <nav class="side-nav">
        <router-link
          v-for="route in navRoutes"
          :key="route.path"
          :to="route.path"
          class="nav-link"
          exact
        >
          <span>{{ route.meta.title }}</span>
          <small>{{ route.meta.subtitle }}</small>
        </router-link>
      </nav>
      <section class="content-panel">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  computed: {
    navRoutes() {
      return this.$router.options.routes.filter((route) => route.meta?.showInNav);
    },
    lastSynced() {
      return this.$store.getters.lastSyncedLabel;
    }
  },
  methods: {
    refreshData() {
      this.$store.dispatch('loadInitialData');
    }
  },
  created() {
    this.refreshData();
  }
};
</script>

<style scoped lang="scss">
.app-shell {
  padding: 32px 48px 48px;
}

.shell-header {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  padding: 32px;
  background: rgba(15, 17, 29, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.shell-header h1 {
  margin: 0 0 12px;
  font-size: 28px;
}

.shell-header p {
  margin: 0;
  color: var(--color-muted);
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.badges span {
  padding: 6px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 13px;
}

.header-right {
  min-width: 260px;
}

.sync-state {
  background: var(--color-panel);
  padding: 20px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

.sync-state button {
  margin-top: 12px;
  width: 100%;
  border: none;
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: #fff;
  cursor: pointer;
  font-weight: 600;
}

.shell-body {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  margin-top: 32px;
}

.side-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-link {
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  background: rgba(11, 16, 25, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  transition: border-color 0.2s, transform 0.2s;
}

.nav-link.router-link-exact-active {
  border-color: var(--color-primary);
  transform: translateX(4px);
}

.nav-link span {
  font-weight: 600;
}

.nav-link small {
  color: var(--color-muted);
}

.content-panel {
  background: rgba(7, 9, 18, 0.9);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 32px;
  box-shadow: var(--shadow-lg);
  min-height: 70vh;
}

@media (max-width: 1080px) {
  .shell-body {
    grid-template-columns: 1fr;
  }

  .side-nav {
    flex-direction: row;
    overflow-x: auto;
  }

  .nav-link {
    min-width: 180px;
  }
}
</style>
