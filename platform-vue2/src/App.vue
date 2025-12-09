<template>
  <div class="app-shell">
    <base-header @toggle-menu="toggleMenu" />
    <div class="app-body">
      <side-navigation
        :collapsed="menuCollapsed"
        @navigate="handleNavigate"
      />
      <main class="app-content" :class="{ 'is-collapsed': menuCollapsed }">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/layout/BaseHeader.vue';
import SideNavigation from '@/components/layout/SideNavigation.vue';

export default {
  name: 'AppShell',
  components: {
    BaseHeader,
    SideNavigation,
  },
  data() {
    return {
      menuCollapsed: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed;
    },
    handleNavigate(route) {
      if (route && route !== this.$route.path) {
        this.$router.push(route);
      }
    },
  },
};
</script>

<style lang="scss">
.app-shell {
  min-height: 100vh;
  background: #0b1524;
  display: flex;
  flex-direction: column;
}

.app-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.app-content {
  flex: 1;
  padding: 24px 32px 48px;
  background: linear-gradient(135deg, #0f1a2e 0%, #0b1524 100%);
  color: #e8f1ff;
  overflow-y: auto;
  transition: padding 0.2s ease;
}

.app-content.is-collapsed {
  padding-left: 20px;
}
</style>
