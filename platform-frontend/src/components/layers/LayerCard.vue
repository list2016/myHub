<template>
  <div class="layer-card" :style="{ borderColor: layer.color }">
    <header>
      <div>
        <h3>{{ layer.name }}</h3>
        <p>{{ layer.focus }}</p>
      </div>
      <span class="color-dot" :style="{ background: layer.color }"></span>
    </header>
    <section>
      <h4>关键能力</h4>
      <ul>
        <li v-for="cap in layer.capabilities" :key="cap">{{ cap }}</li>
      </ul>
    </section>
    <section>
      <h4>输出</h4>
      <div class="outputs">
        <span v-for="output in layer.outputs" :key="output">{{ output }}</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LayerCard',
  props: {
    layer: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.layer-card {
  border: 1px solid;
  border-radius: var(--radius-md);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: rgba(255, 255, 255, 0.02);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

h3 {
  margin: 0 0 4px;
}

p {
  margin: 0;
  color: var(--color-muted);
}

section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

h4 {
  margin: 0;
  font-size: 13px;
  color: var(--color-muted);
}

ul {
  margin: 0;
  padding-left: 18px;
  color: var(--color-text);
  display: grid;
  gap: 4px;
}

.outputs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.outputs span {
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.08);
  font-size: 12px;
}

.color-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
}
</style>
