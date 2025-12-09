export const architectureLayers = [
  {
    id: 'industry-service',
    name: '服务行业层',
    color: '#9b59b6',
    focus: '面向政府、龙头企业、金融机构的协同工作台',
    capabilities: ['角色化应用模板', '预警指挥大屏', '协同指挥手册'],
    outputs: ['策略编排', '决策报告', '共享工单']
  },
  {
    id: 'data-resource',
    name: '数据资源层',
    color: '#1f6feb',
    focus: '统一指标、模型与标签的标准数据资产',
    capabilities: ['模型设计', '指标口径管理', '标签加工', '数据调用 API'],
    outputs: ['指标服务', '标签服务', '多维立方']
  },
  {
    id: 'application-tools',
    name: '应用工具层',
    color: '#00b894',
    focus: '算法、分析与低代码应用工具集',
    capabilities: ['预测模型', '图谱引擎', '流程编排', '价格共识分析'],
    outputs: ['智能分析', '自动化流程']
  },
  {
    id: 'data-source',
    name: '数据来源层',
    color: '#f39c12',
    focus: '政策、宏观、企业、生产、订单、实时运行等数据接入',
    capabilities: ['多协议接入', '数据脱敏', '接入监控', '边缘同步'],
    outputs: ['原始数据湖', '实时流通道']
  },
  {
    id: 'infrastructure',
    name: '基础设施层',
    color: '#0984e3',
    focus: '异构算力、网络与安全能力，覆盖本地与云部署',
    capabilities: ['混合云部署', '容器编排', '零信任安全', 'DevOps 流水线'],
    outputs: ['统一运行环境', '可观测性数据']
  }
];
