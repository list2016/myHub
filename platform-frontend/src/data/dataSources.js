export const dataSources = [
  {
    id: 'policy-news',
    name: '政策新闻数据',
    layer: '数据来源',
    frequency: '实时流',
    granularity: '事件级',
    providers: ['国家部委', '地方政府', '行业协会'],
    interface: 'REST / RSS / WebSocket',
    description: '覆盖政策新闻与舆情信息，支持跨区域自动聚合。'
  },
  {
    id: 'macro-index',
    name: '行业宏观指标',
    layer: '数据来源',
    frequency: '月/季',
    granularity: '指标级',
    providers: ['国家统计局', '行业研究机构'],
    interface: 'SFTP / API',
    description: '内置指标口径映射，保障跨行业可比性。'
  },
  {
    id: 'financial',
    name: '财经市场数据',
    layer: '数据来源',
    frequency: '分钟级',
    granularity: '行情级',
    providers: ['交易所', '第三方数据商'],
    interface: 'FIX / WebSocket',
    description: '包括大宗商品、期货与汇率，支撑价格共识分析。'
  },
  {
    id: 'enterprise-profile',
    name: '企业画像',
    layer: '数据来源',
    frequency: '周',
    granularity: '企业级',
    providers: ['工商注册', '税务', '物联网平台'],
    interface: 'GraphQL / REST',
    description: '统一企业标识，支持跨平台协作。'
  },
  {
    id: 'supply-demand',
    name: '供需撮合信息',
    layer: '数据来源',
    frequency: '小时级',
    granularity: '订单级',
    providers: ['产业联盟', '地方园区'],
    interface: 'MQTT / REST',
    description: '追踪关键物料的供需缺口与协同进展。'
  },
  {
    id: 'production',
    name: '生产执行数据',
    layer: '数据来源',
    frequency: '分钟级',
    granularity: '设备级',
    providers: ['MES', 'SCADA', 'PLC'],
    interface: 'OPC-UA / Modbus / MQTT',
    description: '采集产线参数、能耗与质量指标。'
  },
  {
    id: 'orders',
    name: '订单履约数据',
    layer: '数据来源',
    frequency: '实时流',
    granularity: '订单级',
    providers: ['ERP', 'OMS'],
    interface: 'REST / gRPC',
    description: '监控订单状态与履约风险。'
  },
  {
    id: 'runtime',
    name: '实时运行数据',
    layer: '数据来源',
    frequency: '秒级',
    granularity: '传感器级',
    providers: ['工业互联网平台'],
    interface: 'TimeSeries DB',
    description: '用于供应链预警的高频时间序列。'
  },
  {
    id: 'key-chain',
    name: '重点产业链专题',
    layer: '数据来源',
    frequency: '多粒度',
    granularity: '链路级',
    providers: ['部委专项', '龙头企业'],
    interface: 'REST / FileDrop',
    description: '聚焦重点产业链，提供多层级穿透数据。'
  }
];

export const integrationModules = [
  {
    id: 'policy-ingestor',
    title: '政策舆情接入编排',
    layer: '数据来源',
    adapters: ['RSS Consumer', 'NLP 清洗', '情感评分'],
    coverage: '国家/省级',
    latency: '<5分钟',
    protocols: ['REST', 'WebSocket'],
    status: 'online',
    owner: '数据接入组',
    outputModel: 'PolicySentiment',
    description: '自动聚合政策新闻，输出结构化主题与预警级别。'
  },
  {
    id: 'macro-harmonizer',
    title: '宏观指标口径映射',
    layer: '数据资源',
    adapters: ['指标映射引擎', '异常填补', '时序对齐'],
    coverage: '全国',
    latency: '日批/周批',
    protocols: ['SFTP', 'API'],
    status: 'online',
    owner: '数据建模组',
    outputModel: 'MacroCube',
    description: '解决多来源宏观指标的口径差异，生成统一指标立方体。'
  },
  {
    id: 'pricing-fusion',
    title: '价格共识计算',
    layer: '应用工具',
    adapters: ['行情清洗', '期现套利校验', '波动识别'],
    coverage: '全球市场',
    latency: '分钟级',
    protocols: ['FIX', 'WebSocket'],
    status: 'online',
    owner: '量化分析组',
    outputModel: 'PriceConsensusIndex',
    description: '融合多市场价格，给出供应链敏感原料的共识指数。'
  },
  {
    id: 'iot-edge-sync',
    title: '边缘设备同步',
    layer: '基础设施',
    adapters: ['OPC-UA', 'Modbus', 'Kafka'],
    coverage: '40+园区',
    latency: '亚秒级',
    protocols: ['MQTT', 'gRPC'],
    status: 'online',
    owner: '平台研发组',
    outputModel: 'EdgeTwinStream',
    description: '在本地与云端之间进行设备数据增量同步，支持双活部署。'
  },
  {
    id: 'order-knowledge-graph',
    title: '订单知识图谱',
    layer: '应用工具',
    adapters: ['实体解析', '链路推理', '履约风险识别'],
    coverage: '链路级',
    latency: '实时',
    protocols: ['REST'],
    status: 'online',
    owner: 'AI 应用组',
    outputModel: 'OrderGraph',
    description: '构建从订单到产线的多层次知识图谱，支持协同调度。'
  },
  {
    id: 'role-based-studio',
    title: '角色化工业应用工作室',
    layer: '服务行业',
    adapters: ['低代码编排', '模板中心', '权限治理'],
    coverage: '8 大角色',
    latency: '实时',
    protocols: ['REST', 'GraphQL'],
    status: 'online',
    owner: '解决方案组',
    outputModel: 'RoleAppKit',
    description: '面向政府、龙头企业与金融机构，提供角色化应用快速构建能力。'
  }
];

export const analyticsSnapshots = [
  {
    id: 'price-index',
    title: '关键原料价格指数',
    unit: '点',
    values: [92, 95, 97, 100, 103, 105, 108, 111, 115, 118, 120, 123]
  },
  {
    id: 'order-fulfillment',
    title: '订单履约完成率',
    unit: '%',
    values: [84, 85, 87, 89, 90, 91, 93, 94, 95, 95.5, 96, 96.3]
  },
  {
    id: 'runtime-stability',
    title: '实时运行稳定度',
    unit: '%',
    values: [97, 96.5, 96, 96.8, 97.3, 97.6, 98, 98.2, 98.5, 98.7, 98.9, 99.1]
  }
];
