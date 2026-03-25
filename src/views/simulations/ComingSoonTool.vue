<script setup>
import SimulationLayout from '../../components/SimulationLayout.vue'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <SimulationLayout>
    <template #sidebar>
      <p class="lead">
        <strong>Controls/inputs</strong> for <span class="em">{{ title }}</span> will be added soon.
      </p>
      <p class="muted">{{ description }}</p>
    </template>

    <template #main>
      <div class="placeholder" role="status" aria-live="polite">
        <h2 class="placeholder__title">{{ title }}</h2>
        <p class="placeholder__text">
          This simulation is under construction. Check back for interactive controls and a visualization.
        </p>
      </div>
    </template>
  </SimulationLayout>
</template>

<style scoped>
:root {
  --leaf-700: #1b7a3b;
  --muted: #475569;
  --card: #ffffff;
  --text: #0f172a;
  --border: rgba(20, 83, 45, 0.16);
}

.lead {
  margin: 0 0 10px;
  line-height: 1.6;
  color: var(--text);
}

.em {
  color: var(--leaf-700);
  font-weight: 750;
}

.muted {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.placeholder {
  padding: 18px;
  background: var(--card);
  border: 1px dashed var(--border);
  border-radius: 14px;
}

.placeholder__title {
  margin: 0 0 10px;
  color: var(--leaf-700);
  font-size: 22px;
}

.placeholder__text {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}
</style>

