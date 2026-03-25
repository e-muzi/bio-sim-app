<script setup>
// Named slots:
// - `sidebar`: Controls/Inputs
// - `main`: Visualization/Canvas
</script>

<template>
  <div class="layout">
    <aside class="sidebar" aria-label="Controls and inputs">
      <h2 class="sidebar__title">Controls / Inputs</h2>
      <div class="sidebar__content">
        <slot name="sidebar">
          <p class="sidebar__placeholder">Add controls here for this simulation.</p>
        </slot>
      </div>
    </aside>

    <section class="main" aria-label="Visualization and canvas">
      <div class="main__content">
        <slot name="main">
          <p class="main__placeholder">Visualization content will appear here.</p>
        </slot>
      </div>
    </section>
  </div>
</template>

<style scoped>
:root {
  --leaf-700: #1b7a3b;
  --leaf-600: #2f855a;
  --bg: #f8fafc;
  --card: #ffffff;
  --text: #0f172a;
  --muted: #475569;
  --border: rgba(20, 83, 45, 0.16);
  --ring: rgba(47, 133, 90, 0.35);
}

.layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 16px;
  align-items: start;
}

.sidebar {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(2, 6, 23, 0.05);
  position: sticky;
  top: 90px;
}

.sidebar__title {
  margin: 0 0 12px;
  color: var(--leaf-700);
  font-size: 16px;
  letter-spacing: 0.2px;
}

.sidebar__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sidebar__placeholder,
.main__placeholder {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

.main {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(2, 6, 23, 0.05);
}

.main__content {
  padding: 16px;
}

@media (max-width: 980px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
  }
}
</style>

