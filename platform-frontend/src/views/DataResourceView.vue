<template>
  <div class="resources">
    <header>
      <div>
        <h2>数据资源层：统一模型与指标服务</h2>
        <p>
          支持工业互联网产业链供应链相关数据的模型设计、内容建设、指标查询，输出统一标准数据资源，为上层应用提供一致的数据能力。
        </p>
      </div>
      <div class="search">
        <input v-model="keyword" placeholder="按主题或指标搜索" />
      </div>
    </header>

    <section class="catalog">
      <article v-for="resource in filteredResources" :key="resource.topic">
        <header>
          <h3>{{ resource.topic }}</h3>
          <span>{{ resource.indicators }} 指标</span>
        </header>
        <p>刷新频率：{{ resource.freshness }} ｜ 数据质量：{{ (resource.quality * 100).toFixed(1) }}%</p>
        <dl>
          <dt>模型</dt>
          <dd>{{ resource.models.join('、') }}</dd>
          <dt>API</dt>
          <dd>{{ resource.apis.join('、') }}</dd>
        </dl>
      </article>
    </section>

    <section class="workflow">
      <h3>数据治理工艺</h3>
      <ol>
        <li v-for="phase in workflow" :key="phase.title">
          <strong>{{ phase.title }}</strong>
          <p>{{ phase.description }}</p>
        </li>
      </ol>
    </section>

    <section class="tools">
      <h3>平台工具能力</h3>
      <ul>
        <li v-for="tool in tools" :key="tool.title">
          <strong>{{ tool.title }}</strong>
          <p>{{ tool.description }}</p>
          <span>{{ tool.output }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DataResourceView',
  data() {
    return {
      keyword: ''
    };
  },
  computed: {
    ...mapState(['resourceCatalog']),
    filteredResources() {
      if (!this.keyword) return this.resourceCatalog;
      return this.resourceCatalog.filter((item) => item.topic.includes(this.keyword));
    },
    workflow() {
      return [
        { title: '模型模型设计', description: '构建统一指标模型、价格指数和标签体系。' },
        { title: '内容建设', description: '梳理多层次、多粒度、多时间跨度的数据内容。' },
        { title: '统一接入', description: '通过 API、SDK、数据服务市场形式对外提供。' },
        { title: '质量治理', description: '指标规则检测、异常校准、血缘追踪保障稳定。' }
      ];
    },
    tools() {
      return [
        { title: '指标自助建模', description: '拖拽式建模器快速生成新指标口径。', output: '指标工厂' },
        { title: '价格共识分析沙盘', description: '联通财经与供需数据，计算统一价格基准。', output: 'Price Cube' },
        { title: '数据调用监控', description: '针对 API 请求提供实时监控与资源配额。', output: 'Call Insight' },
        { title: '多租户标签管理', description: '为不同角色生成专属标签空间并控制权限。', output: 'Tag Center' }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.resources {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

header {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.search input {
  width: 280px;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  color: var(--color-text);
}

.catalog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.catalog article {
  padding: 18px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.catalog header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

dl {
  margin: 12px 0 0;
}

dl dt {
  font-size: 12px;
  color: var(--color-muted);
}

dl dd {
  margin: 4px 0 12px;
}

.workflow ol {
  counter-reset: flow;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  list-style: none;
  padding: 0;
}

.workflow li {
  border: 1px dashed rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: 16px;
}

.tools ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.tools li {
  padding: 16px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.tools span {
  font-size: 12px;
  color: var(--color-secondary);
}
</style>
