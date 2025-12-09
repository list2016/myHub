export default [
  {
    id: 'service',
    name: '服务行业层',
    description: '面向供应链协作、预警指挥、企业服务等行业场景提供标准化服务组件',
    capabilities: ['协作编排', '事件联动', '风险预警', '行业应用商店'],
  },
  {
    id: 'resource',
    name: '数据资源层',
    description: '对多源异构数据进行模型设计、指标体系建设与标准输出，形成统一数据底座',
    capabilities: ['数据地图', '指标资产', '质量监测', '数据沙箱'],
  },
  {
    id: 'tool',
    name: '应用工具层',
    description: '提供可视化建模、数据接入、流程自动化、API 网关等通用工具',
    capabilities: ['低代码编排', 'API 管理', '接入向导', '价格共识分析'],
  },
  {
    id: 'source',
    name: '数据来源层',
    description: '覆盖政策新闻、宏观指标、财经、企业画像、供需、生产、订单、实时运行等来源',
    capabilities: ['多协议采集', '边缘计算', '数据脱敏', '传感网络'],
  },
  {
    id: 'infra',
    name: '基础设施层',
    description: '提供本地与云端统一的计算、存储、网络、安全与调度能力，支撑弹性部署',
    capabilities: ['混合云调度', '容器云', '微服务治理', 'DevSecOps'],
  },
];
