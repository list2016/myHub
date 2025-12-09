export const resourceCatalog = [
  {
    topic: '政策新闻数据',
    indicators: 182,
    freshness: '15min',
    models: ['政策主题模型', '情绪指数', '影响路径'],
    apis: ['GET /policies', 'GET /alerts'],
    quality: 0.97
  },
  {
    topic: '行业宏观指标',
    indicators: 420,
    freshness: 'D+1',
    models: ['供需平衡表', '产业景气指数'],
    apis: ['POST /macro/query'],
    quality: 0.95
  },
  {
    topic: '财经数据',
    indicators: 96,
    freshness: '5min',
    models: ['价格共识指数', '波动性监控'],
    apis: ['GET /pricing/consensus'],
    quality: 0.99
  },
  {
    topic: '企业画像',
    indicators: 230,
    freshness: '48h',
    models: ['信用评分', '供应风险等级'],
    apis: ['GET /enterprise/:id'],
    quality: 0.93
  },
  {
    topic: '供需信息',
    indicators: 150,
    freshness: '1h',
    models: ['缺口预估', '协同策略'],
    apis: ['POST /matching'],
    quality: 0.9
  },
  {
    topic: '生产数据',
    indicators: 560,
    freshness: '1min',
    models: ['设备健康度', '能效指数'],
    apis: ['GET /production/streams'],
    quality: 0.98
  },
  {
    topic: '订单数据',
    indicators: 310,
    freshness: '实时',
    models: ['履约风险', '交期预测'],
    apis: ['GET /orders/risk'],
    quality: 0.94
  },
  {
    topic: '实时运行数据',
    indicators: 890,
    freshness: '秒级',
    models: ['异常检测', '响应曲线'],
    apis: ['WS /runtime'],
    quality: 0.99
  },
  {
    topic: '重点产业链数据',
    indicators: 120,
    freshness: '多粒度',
    models: ['链路穿透', '产能评估'],
    apis: ['GET /chains/:name'],
    quality: 0.96
  }
];
