<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { simulations } from './lib/simulations'
</script>

<template>
  <div class="app">
    <header class="topbar">
      <div class="brand" aria-label="BioSim home">
        <RouterLink class="brand__link" to="/">
          <span class="brand__mark" aria-hidden="true">B</span>
          <span class="brand__text">BioSim</span>
        </RouterLink>
      </div>

      <nav class="nav" aria-label="Primary">
        <ul class="nav__list">
          <li class="nav__item">
            <RouterLink class="nav__link" to="/">Home</RouterLink>
          </li>
          <li class="nav__item">
            <details class="dropdown">
              <summary class="nav__link nav__summary">Simulations</summary>
              <ul class="dropdown__menu" role="menu" aria-label="Simulation tools">
                <li v-for="tool in simulations" :key="tool.id" role="none">
                  <RouterLink
                    class="dropdown__link"
                    role="menuitem"
                    :to="tool.route"
                    :aria-label="'Open ' + tool.name"
                  >
                    {{ tool.name }}
                  </RouterLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </header>

    <main class="content" role="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
:root {
  --leaf-900: #14532d;
  --leaf-700: #1b7a3b;
  --leaf-600: #2f855a;
  --leaf-100: #dcfce7;
  --bg: #f8fafc;
  --card: #ffffff;
  --text: #0f172a;
  --muted: #475569;
  --ring: rgba(47, 133, 90, 0.35);
}

.app {
  min-height: 100vh;
  background: radial-gradient(1200px 600px at 20% -10%, var(--leaf-100), transparent 60%), var(--bg);
  color: var(--text);
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  background: rgba(248, 250, 252, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(20, 83, 45, 0.12);
}

.brand__link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--leaf-900);
  font-weight: 800;
  letter-spacing: 0.2px;
}

.brand__mark {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, var(--leaf-100), #ffffff);
  border: 1px solid rgba(27, 122, 59, 0.25);
  border-radius: 10px;
  color: var(--leaf-700);
  font-size: 14px;
}

.brand__text {
  font-size: 16px;
}

.nav__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav__item {
  display: flex;
  align-items: center;
}

.nav__link {
  display: inline-flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 12px;
  text-decoration: none;
  color: var(--leaf-900);
  font-weight: 650;
  background: transparent;
  cursor: pointer;
  user-select: none;
  outline: none;
}

.nav__link:focus-visible {
  box-shadow: 0 0 0 4px var(--ring);
}

.dropdown {
  position: relative;
}

.nav__summary {
  list-style: none;
}

.nav__summary::-webkit-details-marker {
  display: none;
}

.dropdown__menu {
  position: absolute;
  right: 0;
  top: calc(100% + 10px);
  background: var(--card);
  border: 1px solid rgba(20, 83, 45, 0.18);
  border-radius: 14px;
  padding: 8px;
  min-width: 220px;
  box-shadow: 0 14px 28px rgba(2, 6, 23, 0.08);
}

.dropdown[open] .dropdown__menu {
  animation: pop 160ms ease-out;
}

@keyframes pop {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown__link {
  display: block;
  padding: 10px 12px;
  border-radius: 12px;
  text-decoration: none;
  color: var(--text);
  font-weight: 600;
}

.dropdown__link:focus-visible {
  box-shadow: 0 0 0 4px var(--ring);
}

.dropdown__link:hover {
  background: rgba(220, 252, 231, 0.75);
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 22px 18px 60px;
}
</style>
