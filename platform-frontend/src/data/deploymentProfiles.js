export const deploymentProfiles = [
  {
    id: 'local',
    name: '本地一体化部署',
    description: '用于园区或保密环境，通过边缘网关与云端异步同步。',
    highlights: ['单机/集群', '离线缓存', '内网 API 网关'],
    ciCd: ['私有 GitLab', '国产化容器'],
    observability: ['本地日志湖', '可视化巡检'],
    compliance: ['等级保护 2.0', '数据脱敏策略']
  },
  {
    id: 'hybrid',
    name: '混合云协同部署',
    description: '核心数据落地本地，计算弹性扩展云端，支持跨区域协同。',
    highlights: ['边缘同步', '跨云网络', '弹性算力池'],
    ciCd: ['GitHub Actions', 'ArgoCD'],
    observability: ['统一指标', '日志聚合', '链路追踪'],
    compliance: ['多租户隔离', '零信任访问']
  },
  {
    id: 'cloud',
    name: '全云原生部署',
    description: '快速交付 SaaS 服务，面向多租户和角色化应用。',
    highlights: ['Serverless 作业', '自动扩缩容', '全球加速'],
    ciCd: ['云效流水线', 'Terraform'],
    observability: ['全链路指标', '异常基线告警'],
    compliance: ['国密算法', '多活容灾']
  }
];
