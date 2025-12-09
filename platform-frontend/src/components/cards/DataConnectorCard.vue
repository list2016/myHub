<template>
  <article class="connector-card">
    <header>
      <h3>{{ connector.title }}</h3>
      <span :class="['status', connector.status]">{{ statusLabel }}</span>
    </header>
    <p>{{ connector.description }}</p>
    <dl>
      <div>
        <dt>输出模型</dt>
        <dd>{{ connector.outputModel }}</dd>
      </div>
      <div>
        <dt>覆盖范围</dt>
        <dd>{{ connector.coverage }}</dd>
      </div>
      <div>
        <dt>协议</dt>
        <dd>{{ connector.protocols.join(' / ') }}</dd>
      </div>
      <div>
        <dt>适配能力</dt>
        <dd>{{ connector.adapters.join('，') }}</dd>
      </div>
    </dl>
    <footer>
      <span>负责团队：{{ connector.owner }}</span>
      <span>延迟：{{ connector.latency }}</span>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'DataConnectorCard',
  props: {
    connector: {
      type: Object,
      required: true
    }
  },
  computed: {
    statusLabel() {
      return this.connector.status === 'online' ? '运行中' : '维护中';
    }
  }
};
</script>

<style scoped lang="scss">
.connector-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  margin: 0;
}

.status {
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  font-size: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.status.online {
  border-color: var(--color-secondary);
  color: var(--color-secondary);
}

p {
  margin: 0;
  color: var(--color-muted);
}

dl {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin: 0;
}

dt {
  font-size: 12px;
  color: var(--color-muted);
}

dd {
  margin: 4px 0 0;
  font-weight: 600;
}

footer {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: var(--color-muted);
}
</style>
