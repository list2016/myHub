<template>
  <section>
    <div class="card-block intro">
      <div class="card-title">
        <i class="el-icon-user" /> 角色化工业应用
      </div>
      <p>
        基于平台能力进行个性化开发与实施，面向产业运营官、供应链计划员、企业 IT 集成师、金融风控分析师等角色提供差异化应用组合。
      </p>
    </div>

    <div class="role-grid">
      <el-card v-for="item in roleApps" :key="item.role" shadow="hover">
        <h3>{{ item.role }}</h3>
        <h4>职责</h4>
        <ul>
          <li v-for="res in item.responsibilities" :key="res">{{ res }}</li>
        </ul>
        <h4>应用组合</h4>
        <el-tag v-for="app in item.apps" :key="app" size="mini">{{ app }}</el-tag>
      </el-card>
    </div>
  </section>
</template>

<script>
import roleApps from '@/data/roleApps';

export default {
  name: 'RoleCenterView',
  data() {
    return {
      roleApps,
    };
  },
};
</script>

<style lang="scss" scoped>
.role-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

ul {
  padding-left: 18px;
  margin-top: 0;
}

h4 {
  margin-bottom: 4px;
}

.el-tag {
  margin-right: 6px;
  margin-bottom: 6px;
}
</style>
