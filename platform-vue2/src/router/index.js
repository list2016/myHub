import Vue from 'vue';
import Router from 'vue-router';

const DashboardView = () => import('@/views/DashboardView.vue');
const IntegrationView = () => import('@/views/IntegrationView.vue');
const DataResourceView = () => import('@/views/DataResourceView.vue');
const ArchitectureView = () => import('@/views/ArchitectureView.vue');
const DeploymentView = () => import('@/views/DeploymentView.vue');
const RoleCenterView = () => import('@/views/RoleCenterView.vue');

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', name: 'dashboard', component: DashboardView },
    { path: '/integration', name: 'integration', component: IntegrationView },
    { path: '/data-resource', name: 'data-resource', component: DataResourceView },
    { path: '/architecture', name: 'architecture', component: ArchitectureView },
    { path: '/deployment', name: 'deployment', component: DeploymentView },
    { path: '/roles', name: 'roles', component: RoleCenterView },
  ],
});
