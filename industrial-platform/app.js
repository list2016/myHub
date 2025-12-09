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

const ecosystemMatrix = [
  {
    name: "园区/政府服务",
    focus: "项目调度与政策协同",
    services: ["政策匹配", "重点项目跟踪", "产业热力"],
  },
  {
    name: "龙头制造企业",
    focus: "供应链韧性与产能监控",
    services: ["供需平衡", "设备稼动", "异常追踪"],
  },
  {
    name: "物流与仓储",
    focus: "运力、库存与交付保障",
    services: ["运力图谱", "库存预估", "订单跟踪"],
  },
  {
    name: "金融与保险",
    focus: "信用画像与风险评估",
    services: ["授信评分", "风险敞口", "保理方案"],
  },
  {
    name: "能源与原材料",
    focus: "价格共振与供应预警",
    services: ["价格预测", "资源调度", "预警推送"],
  },
];

const ecosystemFocus = {
  service:
    "面向园区与服务行业，强调政策执行监测、项目协同以及预警联动，帮助管理者掌握链上运行态势。",
  manufacturing:
    "聚焦生产、订单与设备运行数据，实现跨工厂产能可视化、缺料预警与价格联动分析。",
  logistics:
    "以物流与供应链为核心，提供运力匹配、交付状态以及供应保障数据，支持多节点协同。",
  finance:
    "赋能金融与保险机构，结合企业画像、宏观与实时运行数据打造多维风控模型。",
};

const alertEvents = [
  {
    severity: "high",
    title: "上游铜材价格 48 小时内上涨 7.2%",
    impact: "影响新能源线束企业成本和交付周期",
    signal: "期货与现货价差同时扩大",
    action: [
      "触发价格联动指数重新计算",
      "向重点企业推送采购策略",
      "建议金融机构调整授信额度",
    ],
  },
  {
    severity: "medium",
    title: "华东某港口集装箱滞留 2800 TEU",
    impact: "区域出口订单交付预计延迟 3-5 天",
    signal: "物流 IoT 设备反馈滞留",
    action: [
      "协同物流伙伴重安排舱位",
      "同步订单系统更新承诺交期",
    ],
  },
  {
    severity: "low",
    title: "园区新增政策补贴窗口开启",
    impact: "企业可申请数字化改造补贴",
    signal: "政策资讯自动聚合",
    action: ["推送政策匹配报告", "生成申报材料清单"],
  },
  {
    severity: "medium",
    title: "关键供应商 OEE 连续三天低于 70%",
    impact: "下游组装企业存在断供风险",
    signal: "MES+SCADA 数据触发",
    action: [
      "安排现场巡检",
      "建议启动备用供应商对接",
      "记录风险筹码进入协同工单",
    ],
  },
];

const caseStudies = [
  {
    name: "政策执行与产业画像指挥舱",
    result: "实现 30+ 项政策与企业诉求双向匹配",
    highlights: ["多源政策聚合", "企业画像评分", "项目调度台账"],
  },
  {
    name: "新能源电池供应链预警平台",
    result: "材料价格预警提前 15 天触发",
    highlights: ["价格共振模型", "供需平衡沙盘", "跨企业协同工单"],
  },
  {
    name: "跨园区物流与能耗协同",
    result: "平均运力利用率提升 12%",
    highlights: ["IoT 数据接入", "运力图谱", "边云调度"],
  },
  {
    name: "产业金融联动风险控制",
    result: "授信审批周期缩短 40%",
    highlights: ["企业信用雷达", "应收账款监控", "智能风控评分"],
  },
];

const lifecycleSteps = [
  {
    stage: "系统设计",
    detail: "产业链梳理、数据模型定义、预警策略配置。",
    toolkit: "价值流建模、数据资产蓝图、零代码指标工厂。",
  },
  {
    stage: "开发集成",
    detail: "接入器配置、API/消息总线映射、定制组件开发。",
    toolkit: "接入向导、SDK、API Gateway、可视化编排器。",
  },
  {
    stage: "测试验证",
    detail: "数据沙箱回放、性能压测、预警规则 A/B。",
    toolkit: "合成数据引擎、指标对账、回归脚本库。",
  },
  {
    stage: "部署运维",
    detail: "本地/云端/混合部署，指标监控与安全审计。",
    toolkit: "容器编排、自动扩缩容、角色权限中心。",
  },
];

const roadmapMilestones = [
  {
    quarter: "Q1",
    focus: "基础数据接入",
    items: ["打通关键生产/订单/价格接口", "完成政策与企业画像聚合"],
  },
  {
    quarter: "Q2",
    focus: "治理与指标",
    items: ["指标工厂上线", "预警模型迭代", "统一标签体系"],
  },
  {
    quarter: "Q3",
    focus: "场景化应用",
    items: ["交付协同驾驶舱", "上线金融风控接口", "部署移动端"],
  },
  {
    quarter: "Q4",
    focus: "生态共建",
    items: ["开放 API 市场", "建设生态伙伴应用", "扩展跨区域节点"],
  },
];

const connectorContainer = document.getElementById("connectorCards");
const resourceList = document.getElementById("resourceList");
const resourceDetail = document.getElementById("resourceDetail");
const architectureGrid = document.getElementById("architectureGrid");
const roleGrid = document.getElementById("roleGrid");
const analysisStatsList = document.getElementById("analysisStats");
const industryFilter = document.getElementById("industryFilter");
const priceChart = document.getElementById("priceChart");
const ecosystemGrid = document.getElementById("ecosystemGrid");
const ecosystemFilters = document.getElementById("ecosystemFilters");
const ecosystemSummary = document.getElementById("ecosystemSummary");
const alertsTable = document.getElementById("alertsTable");
const alertInsights = document.getElementById("alertInsights");
const alertFilter = document.getElementById("alertFilter");
const caseGrid = document.getElementById("caseGrid");
const lifecycleGrid = document.getElementById("lifecycleGrid");
const roadmap = document.getElementById("roadmap");

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

function renderEcosystem() {
  ecosystemGrid.innerHTML = ecosystemMatrix
    .map(
      (entry) => `
      <article class="ecosystem-card">
        <strong>${entry.name}</strong>
        <p>${entry.focus}</p>
        <ul>${entry.services.map((s) => `<li>${s}</li>`).join("")}</ul>
      </article>
    `
    )
    .join("");

  const filterConfig = [
    { key: "service", label: "服务行业" },
    { key: "manufacturing", label: "制造业" },
    { key: "logistics", label: "物流供应链" },
    { key: "finance", label: "金融机构" },
  ];

  ecosystemFilters.innerHTML = filterConfig
    .map(
      (filter, index) =>
        `<button type="button" class="chip${index === 0 ? " active" : ""}" data-key="${filter.key}">${filter.label}</button>`
    )
    .join("");

  ecosystemFilters
    .querySelectorAll(".chip")
    .forEach((chip) =>
      chip.addEventListener("click", () => {
        ecosystemFilters
          .querySelectorAll(".chip")
          .forEach((node) => node.classList.remove("active"));
        chip.classList.add("active");
        updateEcosystemSummary(chip.dataset.key);
      })
    );

  updateEcosystemSummary(filterConfig[0].key);
}

function updateEcosystemSummary(key) {
  ecosystemSummary.innerHTML = `
    <h3>协同指引</h3>
    <p>${ecosystemFocus[key]}</p>
    <p>结合角色化仪表板、供需沙盘与政策/价格数据，平台支持跨层级协同和个性化开发。</p>
  `;
}

function renderAlerts(filter = "all") {
  const filtered = alertEvents.filter((event) =>
    filter === "all" ? true : event.severity === filter
  );

  if (!filtered.length) {
    alertsTable.innerHTML =
      "<p style=\"padding:1.5rem;\">当前过滤条件暂无事件。</p>";
    alertInsights.innerHTML = "<p>选择事件后显示处置建议。</p>";
    return;
  }

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>事件</th>
        <th>影响</th>
        <th>信号</th>
        <th>级别</th>
      </tr>
    </thead>
    <tbody>
      ${filtered
        .map(
          (event, index) => `
        <tr data-index="${index}">
          <td>${event.title}</td>
          <td>${event.impact}</td>
          <td>${event.signal}</td>
          <td><span class="badge-level ${event.severity}">${event.severity}</span></td>
        </tr>
      `
        )
        .join("")}
    </tbody>
  `;

  alertsTable.innerHTML = "";
  alertsTable.appendChild(table);

  table.querySelectorAll("tbody tr").forEach((row, rowIndex) => {
    row.addEventListener("click", () => {
      updateAlertInsights(filtered[rowIndex]);
    });
  });
  updateAlertInsights(filtered[0]);
}

function updateAlertInsights(event) {
  if (!event) {
    alertInsights.innerHTML = "<p>选择事件后显示处置建议。</p>";
    return;
  }
  alertInsights.innerHTML = `
    <h3>${event.title}</h3>
    <p>${event.impact}</p>
    <p><strong>触发信号：</strong>${event.signal}</p>
    <ul>
      ${event.action.map((a) => `<li>${a}</li>`).join("")}
    </ul>
  `;
}

function renderCases() {
  caseGrid.innerHTML = caseStudies
    .map(
      (item) => `
      <article class="case-card">
        <h3>${item.name}</h3>
        <p><strong>结果：</strong>${item.result}</p>
        <ul>${item.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
      </article>
    `
    )
    .join("");
}

function renderLifecycle() {
  lifecycleGrid.innerHTML = lifecycleSteps
    .map(
      (step) => `
      <article class="lifecycle-step">
        <h3>${step.stage}</h3>
        <p>${step.detail}</p>
        <p><strong>工具：</strong>${step.toolkit}</p>
      </article>
    `
    )
    .join("");

  roadmap.innerHTML = roadmapMilestones
    .map(
      (item) => `
      <div class="roadmap-item">
        <div>
          <strong>${item.quarter}</strong>
          <p>${item.focus}</p>
        </div>
        <ul>
          ${item.items.map((entry) => `<li>${entry}</li>`).join("")}
        </ul>
      </div>
    `
    )
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

if (alertFilter) {
  alertFilter.addEventListener("change", (event) => {
    renderAlerts(event.target.value);
  });
}

document.getElementById("exportPlan").addEventListener("click", downloadPlan);
document.getElementById("runSimulation").addEventListener("click", runSimulation);
document.getElementById("refreshMetrics").addEventListener("click", refreshMetrics);

renderConnectors();
renderResources();
renderArchitecture();
renderRoles();
renderAnalysisStats();
drawPriceChart(chartDataset);
renderEcosystem();
renderAlerts();
renderCases();
renderLifecycle();
