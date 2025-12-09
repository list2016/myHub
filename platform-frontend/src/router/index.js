import Vue from 'vue';
import Router from 'vue-router';

import DashboardView from '@/views/DashboardView.vue';
import DataIntegrationView from '@/views/DataIntegrationView.vue';
import DataResourceView from '@/views/DataResourceView.vue';
import ArchitectureView from '@/views/ArchitectureView.vue';
import OperationsView from '@/views/OperationsView.vue';
import RoleCenterView from '@/views/RoleCenterView.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: { title: '全域态势', subtitle: '多源监控', showInNav: true }
    },
    {
      path: '/integration',
      name: 'integration',
      component: DataIntegrationView,
      meta: { title: '接入与治理', subtitle: '异构数据', showInNav: true }
    },
    {
      path: '/resources',
      name: 'resources',
      component: DataResourceView,
      meta: { title: '数据资源层', subtitle: '模型与指标', showInNav: true }
    },
    {
      path: '/architecture',
      name: 'architecture',
      component: ArchitectureView,
      meta: { title: '体系结构', subtitle: '五层架构', showInNav: true }
    },
    {
      path: '/operations',
      name: 'operations',
      component: OperationsView,
      meta: { title: '部署与运维', subtitle: '本地/云', showInNav: true }
    },
    {
      path: '/roles',
      name: 'roles',
      component: RoleCenterView,
      meta: { title: '角色应用', subtitle: '工业场景', showInNav: true }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior: () => ({ x: 0, y: 0 })
});
