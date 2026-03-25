<script setup>
import { RouterLink } from 'vue-router'
import { simulations } from '../lib/simulations'
</script>

<template>
  <div class="home">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__inner">
        <h1 id="hero-title" class="hero__title">BioSim Interactive</h1>
        <p class="hero__subtitle">
          Explore biology through interactive simulations designed for learning and classroom discussion.
        </p>
      </div>
    </section>

    <section class="tools" aria-label="Simulation tools">
      <h2 class="tools__title">Choose a simulation</h2>
      <div class="tools__grid">
        <RouterLink
          v-for="tool in simulations"
          :key="tool.id"
          :to="tool.route"
          class="tool-card"
          :aria-label="'Open simulation: ' + tool.name"
        >
          <div class="tool-card__top">
            <div class="tool-card__badge" aria-hidden="true">Sim</div>
            <div class="tool-card__arrow" aria-hidden="true">-></div>
          </div>
          <h3 class="tool-card__title">{{ tool.name }}</h3>
          <p class="tool-card__desc">{{ tool.description }}</p>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
:root {
  --leaf-700: #1b7a3b;
  --leaf-600: #2f855a;
  --leaf-100: #dcfce7;
  --bg: #f8fafc;
  --card: #ffffff;
  --text: #0f172a;
  --muted: #475569;
  --border: rgba(20, 83, 45, 0.16);
  --shadow: 0 10px 26px rgba(2, 6, 23, 0.06);
}

.home {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.hero {
  background: linear-gradient(135deg, rgba(220, 252, 231, 0.9), rgba(255, 255, 255, 0.95));
  border: 1px solid rgba(27, 122, 59, 0.16);
  border-radius: 20px;
  padding: 26px 20px;
  box-shadow: var(--shadow);
}

.hero__inner {
  max-width: 900px;
}

.hero__title {
  margin: 0 0 10px;
  font-size: 40px;
  line-height: 1.1;
  color: var(--leaf-700);
  letter-spacing: -0.3px;
}

.hero__subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.6;
}

.tools {
  background: transparent;
}

.tools__title {
  margin: 0 0 12px;
  font-size: 18px;
  color: var(--text);
}

.tools__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 14px;
}

.tool-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.05);
  min-height: 190px;
  transition: transform 120ms ease, box-shadow 120ms ease;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 26px rgba(2, 6, 23, 0.08);
}

.tool-card:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(47, 133, 90, 0.35), 0 12px 26px rgba(2, 6, 23, 0.08);
}

.tool-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.tool-card__badge {
  background: rgba(220, 252, 231, 0.75);
  border: 1px solid rgba(27, 122, 59, 0.2);
  color: var(--leaf-700);
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
}

.tool-card__arrow {
  color: var(--leaf-600);
  font-weight: 900;
}

.tool-card__title {
  margin: 0;
  font-size: 16px;
  color: var(--text);
  line-height: 1.25;
}

.tool-card__desc {
  margin: 0;
  color: var(--muted);
  line-height: 1.55;
  font-size: 14px;
}

@media (max-width: 1100px) {
  .tools__grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
}

@media (max-width: 560px) {
  .hero__title {
    font-size: 30px;
  }

  .tools__grid {
    grid-template-columns: 1fr;
  }
}
</style>

