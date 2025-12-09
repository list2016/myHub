export default [
  {
    id: 'local-lab',
    name: '本地一体机环境',
    type: '本地部署',
    nodes: 12,
    status: '运行中',
    latency: '8ms',
    workloads: ['数据接入', '模型开发', '自动化测试'],
  },
  {
    id: 'private-cloud',
    name: '政务私有云',
    type: '云部署',
    nodes: 46,
    status: '弹性扩容中',
    latency: '25ms',
    workloads: ['供需协同', '链主驾驶舱', '预警服务'],
  },
  {
    id: 'public-edge',
    name: '边缘混合云',
    type: '混合部署',
    nodes: 28,
    status: '稳定',
    latency: '15ms',
    workloads: ['物联网采集', '订单回传', '北向接口'],
  },
];
