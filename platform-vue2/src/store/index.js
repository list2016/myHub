import Vue from 'vue';
import Vuex from 'vuex';
import dayjs from 'dayjs';
import connectorsData from '@/data/connectors';
import resourcesData from '@/data/dataResources';
import architectureLayers from '@/data/architectureLayers';
import deployments from '@/data/deployments';

Vue.use(Vuex);

const priceTrend = [
  { date: '11-25', price: 103.2 },
  { date: '11-26', price: 102.4 },
  { date: '11-27', price: 101.9 },
  { date: '11-28', price: 102.7 },
  { date: '11-29', price: 104.1 },
  { date: '11-30', price: 103.8 },
  { date: '12-01', price: 104.6 },
  { date: '12-02', price: 105.2 },
  { date: '12-03', price: 106.4 },
  { date: '12-04', price: 105.1 },
  { date: '12-05', price: 104.8 },
  { date: '12-06', price: 105.6 },
  { date: '12-07', price: 106.1 },
  { date: '12-08', price: 107.0 },
  { date: '12-09', price: 107.5 },
];

const alerts = [
  {
    id: 'alert-1',
    type: '预警',
    message: '锂电产业链订单环比下降 8%，需启动价格共识跟踪',
    level: 'warning',
    time: '11:35',
  },
  {
    id: 'alert-2',
    type: '风险',
    message: '某重点供应商实时产能跌破 72%，建议切换备选产线',
    level: 'danger',
    time: '10:58',
  },
  {
    id: 'alert-3',
    type: '提醒',
    message: '企业画像新增 12 家拟入驻企业，需审批数据授权',
    level: 'info',
    time: '09:40',
  },
];

const initialLogs = [
  {
    id: 1,
    title: '政策新闻聚合同步完成',
    detail: '政策新闻聚合 / 行业宏观指标 / 财经行情监听',
    time: '09:10:33',
  },
  {
    id: 2,
    title: '生产物联网总线巡检',
    detail: '重置采集通道 #A7，完成延迟校准',
    time: '08:55:12',
  },
  {
    id: 3,
    title: '订单协同中台增量入湖',
    detail: '新增订单 2.3 万条，清洗成功率 99.2%',
    time: '08:12:01',
  },
];

export default new Vuex.Store({
  state: {
    connectors: connectorsData,
    dataResources: resourcesData,
    architectureLayers,
    deployments,
    priceTrend,
    alerts,
    riskLevel: '中',
    syncLogs: initialLogs,
  },
  getters: {
    integrationHealth: (state) => {
      const total = state.connectors.length;
      const score = state.connectors.reduce((sum, c) => {
        if (c.status === 'online') return sum + 1;
        if (c.status === 'warning') return sum + 0.5;
        return sum;
      }, 0);
      return Math.round((score / total) * 100);
    },
    riskLevel: (state) => state.riskLevel,
    activeAlerts: (state) => state.alerts,
    connectorsByLayer: (state) => (layer) =>
      layer ? state.connectors.filter((c) => c.layer === layer) : state.connectors,
    standardizedResources: (state) => state.dataResources.filter((r) => r.standardized),
    syncLogs: (state) => state.syncLogs,
  },
  mutations: {
    UPDATE_CONNECTOR_STATUS(state, { id, status }) {
      const target = state.connectors.find((c) => c.id === id);
      if (target) {
        target.status = status;
        target.lastSync = dayjs().format('YYYY-MM-DD HH:mm');
      }
    },
    MARK_RESOURCE_STANDARD(state, id) {
      const target = state.dataResources.find((r) => r.id === id);
      if (target) {
        target.standardized = !target.standardized;
      }
    },
    SET_RISK_LEVEL(state, level) {
      state.riskLevel = level;
    },
    PUSH_SYNC_LOG(state, payload) {
      state.syncLogs.unshift({ ...payload, id: Date.now() });
      state.syncLogs = state.syncLogs.slice(0, 6);
    },
  },
  actions: {
    runFullSync({ commit, state }) {
      const snapshot = state.connectors.map((connector) => {
        let status = connector.status;
        if (connector.status !== 'online') {
          status = 'online';
        } else if (Math.random() > 0.85) {
          status = 'warning';
        }
        commit('UPDATE_CONNECTOR_STATUS', { id: connector.id, status });
        return `${connector.name}：${status}`;
      });

      const warnings = state.connectors.filter((c) => c.status !== 'online').length;
      const riskLevel = warnings === 0 ? '低' : warnings > 2 ? '高' : '中';
      commit('SET_RISK_LEVEL', riskLevel);
      commit('PUSH_SYNC_LOG', {
        title: '全链路同步完成',
        detail: snapshot.join(' / '),
        time: dayjs().format('HH:mm:ss'),
      });
    },
    refreshConnector({ commit }, id) {
      const chance = Math.random();
      let status = 'online';
      if (chance > 0.8) status = 'warning';
      if (chance > 0.95) status = 'critical';
      commit('UPDATE_CONNECTOR_STATUS', { id, status });
      commit('PUSH_SYNC_LOG', {
        title: '连接器巡检',
        detail: `${id} 状态更新为 ${status}`,
        time: dayjs().format('HH:mm:ss'),
      });
    },
    toggleResourceStandard({ commit }, id) {
      commit('MARK_RESOURCE_STANDARD', id);
    },
  },
});
