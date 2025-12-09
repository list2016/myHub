import Vue from 'vue';
import Vuex from 'vuex';
import {
  fetchIntegrationModules,
  fetchResourceCatalog,
  fetchArchitectureLayers,
  fetchRoleApps,
  fetchDeploymentProfiles,
  fetchMetrics
} from '@/services/dataGateway';

Vue.use(Vuex);

const formatter = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
});

export default new Vuex.Store({
  state: {
    loading: false,
    error: null,
    integrationModules: [],
    dataSources: [],
    analyticsSnapshots: [],
    resourceCatalog: [],
    architectureLayers: [],
    roleApps: [],
    deploymentProfiles: [],
    metrics: [],
    lastSynced: null
  },
  getters: {
    connectorsByLayer: (state) => (layer) =>
      state.integrationModules.filter((module) => module.layer === layer || module.layers?.includes(layer)),
    resourceByTopic: (state) => (topic) =>
      state.resourceCatalog.find((item) => item.topic === topic),
    lastSyncedLabel: (state) => (state.lastSynced ? formatter.format(state.lastSynced) : '尚未同步'),
    activeConnectors: (state) => state.integrationModules.filter((module) => module.status === 'online')
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setIntegrationModules(state, payload) {
      state.integrationModules = payload;
    },
    setDataSources(state, payload) {
      state.dataSources = payload;
    },
    setAnalyticsSnapshots(state, payload) {
      state.analyticsSnapshots = payload;
    },
    setResourceCatalog(state, payload) {
      state.resourceCatalog = payload;
    },
    setArchitectureLayers(state, payload) {
      state.architectureLayers = payload;
    },
    setRoleApps(state, payload) {
      state.roleApps = payload;
    },
    setDeploymentProfiles(state, payload) {
      state.deploymentProfiles = payload;
    },
    setMetrics(state, payload) {
      state.metrics = payload;
    },
    setLastSynced(state, payload) {
      state.lastSynced = payload;
    }
  },
  actions: {
    async loadInitialData({ commit }) {
      commit('setLoading', true);
      commit('setError', null);
      try {
        const [integrationPayload, catalog, layers, roles, deployments, metrics] = await Promise.all([
          fetchIntegrationModules(),
          fetchResourceCatalog(),
          fetchArchitectureLayers(),
          fetchRoleApps(),
          fetchDeploymentProfiles(),
          fetchMetrics()
        ]);

        commit('setIntegrationModules', integrationPayload.integrationModules);
        commit('setDataSources', integrationPayload.dataSources);
        commit('setAnalyticsSnapshots', integrationPayload.analyticsSnapshots);
        commit('setResourceCatalog', catalog);
        commit('setArchitectureLayers', layers);
        commit('setRoleApps', roles);
        commit('setDeploymentProfiles', deployments);
        commit('setMetrics', metrics);
        commit('setLastSynced', new Date());
      } catch (error) {
        console.error(error);
        commit('setError', '数据拉取失败，请稍后重试');
      } finally {
        commit('setLoading', false);
      }
    }
  }
});
