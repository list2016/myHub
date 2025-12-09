<template>
  <aside class="side-navigation" :class="{ collapsed }">
    <el-menu
      :default-active="$route.path"
      background-color="transparent"
      text-color="#9fb4d8"
      active-text-color="#3ce8ff"
      class="menu"
      @select="onSelect"
    >
      <el-menu-item v-for="item in items" :index="item.route" :key="item.route">
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<script>
export default {
  name: 'SideNavigation',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [
        { label: '运行驾驶舱', route: '/', icon: 'el-icon-data-board' },
        { label: '数据接入', route: '/integration', icon: 'el-icon-connection' },
        { label: '数据资源层', route: '/data-resource', icon: 'el-icon-coin' },
        { label: '架构总览', route: '/architecture', icon: 'el-icon-s-management' },
        { label: '部署能力', route: '/deployment', icon: 'el-icon-guide' },
        { label: '角色应用', route: '/roles', icon: 'el-icon-user' },
      ],
    };
  },
  methods: {
    onSelect(route) {
      this.$emit('navigate', route);
    },
  },
};
</script>

<style lang="scss" scoped>
.side-navigation {
  width: 220px;
  background: rgba(9, 15, 25, 0.95);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  transition: width 0.2s ease;
  overflow: hidden;
}

.side-navigation.collapsed {
  width: 100px;

  ::v-deep .el-menu-item {
    justify-content: center;
  }

  ::v-deep .el-menu-item span {
    display: none;
  }
}

.menu {
  border: none;

  .el-menu-item {
    height: 56px;
    line-height: 56px;
    font-size: 14px;

    i {
      margin-right: 12px;
      color: #3ce8ff;
    }
  }
}
</style>
