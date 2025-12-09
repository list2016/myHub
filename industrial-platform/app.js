const connectorData = [
  {
    name: "政策新闻数据接入器",
    industry: "service",
    protocols: ["RSS", "REST API"],
    coverage: "国家/地方政策、监管通告",
    latency: "15 分钟",
    safeguards: ["自动标签", "政策热度指数", "版本追溯"],
  },
  {
    name: "行业宏观指标网关",
    industry: "service",
    protocols: ["REST", "GraphQL"],
    coverage: "PMI、原材料价格、进出口指数",
    latency: "5 分钟",
    safeguards: ["多时间尺度", "季调算法", "异常值修复"],
  },
  {
    name: "企业画像/工商数据适配器",
    industry: "manufacturing",
    protocols: ["SFTP", "REST"],
    coverage: "工商注册、舆情、供应商评级",
    latency: "日更",
    safeguards: ["权重评分", "信用雷达", "黑白名单"],
  },
  {
    name: "供需与订单协同总线",
    industry: "logistics",
    protocols: ["MQTT", "WebSocket", "REST"],
    coverage: "订单、采购、库存、物流状态",
    latency: "实时",
    safeguards: ["加密通道", "多租户隔离", "延迟监控"],
  },
  {
    name: "生产与实时运行数据代理",
    industry: "manufacturing",
    protocols: ["OPC-UA", "Modbus", "Kafka"],
    coverage: "MES、SCADA、设备运行状态",
    latency: "秒级",
    safeguards: ["边缘缓存", "时序对齐", "多粒度汇聚"],
  },
  {
    name: "重点产业链专题库",
    industry: "service",
    protocols: ["REST", "Batch"],
    coverage: "关键节点企业、供需关系、价格共振",
    latency: "30 分钟",
    safeguards: ["指标联动", "预警触发", "可视化图谱"],
  },
];

const dataResourceCatalog = [
  {
    type: "政策新闻数据",
    description: "聚合国家、地方、园区政策及行业要闻，匹配标签体系形成政策时效矩阵。",
    indicators: ["政策热度", "支持强度", "影响产业链环节", "执行窗口"],
    qualityScore: 92,
  },
  {
    type: "行业宏观指标数据",
    description: "覆盖 PMI、产能利用率、进出口、价格指数等，支持多时间跨度分析。",
    indicators: ["环比增速", "同比增速", "价格共振指数", "景气度指数"],
    qualityScore: 95,
  },
  {
    type: "财经与价格数据",
    description: "关联期货、现货、汇率与大宗商品价格，支撑价格联动与预警。",
    indicators: ["期现价差", "联动系数", "风险暴露", "波动区间"],
    qualityScore: 90,
  },
  {
    type: "企业单位画像数据",
    description: "构建企业基础信息、产能、信用、供应关系，支持角色化应用。",
    indicators: ["信用得分", "产能区间", "供需匹配度", "合作风险"],
    qualityScore: 94,
  },
  {
    type: "供需信息数据",
    description: "实时跟踪采购、订单、库存、交付信息，实现供需平衡监控。",
    indicators: ["库存周转", "订单满足率", "缺料预警", "协同效率"],
    qualityScore: 91,
  },
  {
    type: "生产与实时运行数据",
    description: "对接 MES/SCADA/PLC，形成多层级生产数据湖，支持本地与云端。",
    indicators: ["设备稼动率", "能耗单耗", "良率趋势", "异常停机"],
    qualityScore: 96,
  },
  {
    type: "重点产业链数据",
    description: "沉淀关键领域上下游结构、节点企业和运力资源，支撑专项研判。",
    indicators: ["节点依赖度", "链路冗余", "价格传导滞后", "预警等级"],
    qualityScore: 93,
  },
];

const architectureLayers = [
  {
    name: "服务行业层",
    focus: "面向政府、园区、龙头企业提供供应链预警决策驾驶舱。",
    capabilities: ["协同门户", "多角色看板", "预警通知", "专题洞察"],
  },
  {
    name: "数据资源层",
    focus: "统一标准数据与指标资源，支撑多场景加工。",
    capabilities: ["模型设计", "内容建设", "指标查询", "加工清洗"],
  },
  {
    name: "应用工具层",
    focus: "低代码配置、分析组件、接口市场，支持个性化开发。",
    capabilities: ["指标工厂", "价格分析组件", "API 网关", "可视化编排"],
  },
  {
    name: "数据来源层",
    focus: "政策新闻、宏观指标、财经、企业画像、供需、生产、订单、实时运行。",
    capabilities: ["标准接入器", "协议转换", "数据合规", "多模态采集"],
  },
  {
    name: "基础设施层",
    focus: "本地与云端统一资源池，兼顾安全与扩展。",
    capabilities: ["容器集群", "消息总线", "边云协同", "安全审计"],
  },
];

const roleApps = [
  {
    role: "产业链运营",
    needs: "监控供需平衡、重点企业运行态势",
    outputs: "供应链预警、协同工单",
  },
  {
    role: "采购/供应",
    needs: "掌握价格联动、库存与订单",
    outputs: "采购策略、订单分发",
  },
  {
    role: "金融机构",
    needs: "评估企业信用、风险敞口",
    outputs: "融资决策、保理方案",
  },
  {
    role: "政府/园区",
    needs: "掌握政策落实、产业链韧性",
    outputs: "调度指令、扶持政策",
  },
];

const analysisStats = [
  { label: "价格联动准确率", value: "94.6%" },
  { label: "指标刷新时延", value: "2.4s" },
  { label: "多源数据覆盖", value: "18 类" },
  { label: "预警命中率", value: "82%" },
];

const chartDataset = [
  { month: "1", value: 68 },
  { month: "2", value: 71 },
  { month: "3", value: 75 },
  { month: "4", value: 73 },
  { month: "5", value: 79 },
  { month: "6", value: 83 },
  { month: "7", value: 81 },
  { month: "8", value: 85 },
  { month: "9", value: 88 },
  { month: "10", value: 92 },
];

const connectorContainer = document.getElementById("connectorCards");
const resourceList = document.getElementById("resourceList");
const resourceDetail = document.getElementById("resourceDetail");
const architectureGrid = document.getElementById("architectureGrid");
const roleGrid = document.getElementById("roleGrid");
const analysisStatsList = document.getElementById("analysisStats");
const industryFilter = document.getElementById("industryFilter");
const priceChart = document.getElementById("priceChart");

function renderConnectors(filter = "all") {
  connectorContainer.innerHTML = "";
  const filtered = connectorData.filter((item) =>
    filter === "all" ? true : item.industry === filter
  );
  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <small>${item.coverage}</small>
      <p><strong>协议：</strong> ${item.protocols.join(" / ")}</p>
      <p><strong>延迟：</strong> ${item.latency}</p>
      <span class="badge">可插拔</span>
      <ul>${item.safeguards.map((g) => `<li>${g}</li>`).join("")}</ul>
    `;
    connectorContainer.appendChild(card);
  });
}

function renderResources() {
  resourceList.innerHTML = "";
  dataResourceCatalog.forEach((resource, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `resource-item${index === 0 ? " active" : ""}`;
    item.textContent = resource.type;
    item.addEventListener("click", () => {
      document
        .querySelectorAll(".resource-item")
        .forEach((node) => node.classList.remove("active"));
      item.classList.add("active");
      updateResourceDetail(resource);
    });
    resourceList.appendChild(item);
    if (index === 0) updateResourceDetail(resource);
  });
}

function updateResourceDetail(resource) {
  resourceDetail.innerHTML = `
    <h3>${resource.type}</h3>
    <p>${resource.description}</p>
    <div class="indicator-list">
      ${resource.indicators
        .map((indicator) => `<span>${indicator}</span>`)
        .join("")}
    </div>
    <p><strong>数据质量评分：</strong> ${resource.qualityScore} / 100</p>
    <p>支持多层级、多粒度、多时间跨度的数据建模与指标查询，自动生成统一标准的数据资产包。</p>
  `;
}

function renderArchitecture() {
  architectureGrid.innerHTML = "";
  architectureLayers.forEach((layer) => {
    const block = document.createElement("article");
    block.className = "arch-card";
    block.innerHTML = `
      <strong>${layer.name}</strong>
      <p>${layer.focus}</p>
      <ul>${layer.capabilities.map((c) => `<li>${c}</li>`).join("")}</ul>
    `;
    architectureGrid.appendChild(block);
  });
}

function renderRoles() {
  roleGrid.innerHTML = "";
  roleApps.forEach((role) => {
    const card = document.createElement("article");
    card.className = "role-card";
    card.innerHTML = `
      <h4>${role.role}</h4>
      <p><strong>核心需求：</strong>${role.needs}</p>
      <p><strong>输出：</strong>${role.outputs}</p>
    `;
    roleGrid.appendChild(card);
  });
}

function renderAnalysisStats() {
  analysisStatsList.innerHTML = analysisStats
    .map((stat) => `<li><span>${stat.label}</span><span>${stat.value}</span></li>`)
    .join("");
}

function drawPriceChart(dataset) {
  const ctx = priceChart.getContext("2d");
  const width = priceChart.width;
  const height = priceChart.height;
  ctx.clearRect(0, 0, width, height);
  const padding = 40;
  const min = Math.min(...dataset.map((d) => d.value)) - 5;
  const max = Math.max(...dataset.map((d) => d.value)) + 5;

  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    const y = padding + ((height - padding * 2) / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  ctx.beginPath();
  dataset.forEach((point, index) => {
    const x = padding + ((width - padding * 2) / (dataset.length - 1)) * index;
    const y =
      height -
      padding -
      ((point.value - min) / (max - min)) * (height - padding * 2);
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.strokeStyle = "#4bc8ff";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "rgba(75, 200, 255, 0.25)";
  ctx.lineTo(width - padding, height - padding);
  ctx.lineTo(padding, height - padding);
  ctx.closePath();
  ctx.fill();
}

function downloadPlan() {
  const plan = {
    generatedAt: new Date().toISOString(),
    connectors: connectorData.length,
    resources: dataResourceCatalog.map((r) => r.type),
    architecture: architectureLayers.map((l) => l.name),
  };
  const blob = new Blob([JSON.stringify(plan, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "integration-plan.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function runSimulation() {
  const updated = analysisStats.map((stat) => {
    if (stat.label === "价格联动准确率") {
      return { ...stat, value: "+0.8%" };
    }
    if (stat.label === "预警命中率") {
      return { ...stat, value: "+1.5%" };
    }
    return stat;
  });
  analysisStatsList.innerHTML = updated
    .map((stat) => `<li><span>${stat.label}</span><span>${stat.value}</span></li>`)
    .join("");
}

function refreshMetrics() {
  renderAnalysisStats();
}

industryFilter.addEventListener("change", (event) => {
  renderConnectors(event.target.value);
});

document.getElementById("exportPlan").addEventListener("click", downloadPlan);
document.getElementById("runSimulation").addEventListener("click", runSimulation);
document.getElementById("refreshMetrics").addEventListener("click", refreshMetrics);

renderConnectors();
renderResources();
renderArchitecture();
renderRoles();
renderAnalysisStats();
drawPriceChart(chartDataset);
