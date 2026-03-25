<script setup>
import SimulationLayout from '../../components/SimulationLayout.vue'
import bloodSimHtml from '../../tools/html/capillary-blood-flow.html?raw'

// Render the existing plain HTML tool inside an iframe.
// `sandbox` prevents the tool from reaching the parent page.
</script>

<template>
  <SimulationLayout>
    <template #sidebar>
      <h3 class="side-title">Capillary Network Simulation!</h3>

      <section class="box" aria-label="Learning goal">
        <p class="box__text">
          <strong>The Goal:</strong><br />
          Demonstrate why blood slows down in the capillary beds despite the heart pumping at a constant
          rate.
        </p>
      </section>

      <section class="formula" aria-label="Velocity formula">
        <div class="formula__math" aria-label="v equals Q divided by A">
          <span class="formula__var"><em>v</em></span>
          <span class="formula__eq">=</span>
          <span class="fraction" aria-hidden="true">
            <span class="numerator">Q</span>
            <span class="denominator">A</span>
          </span>
        </div>
        <p class="formula__legend">
          <strong>v</strong> = Velocity · <strong>Q</strong> = Flow Rate · <strong>A</strong> = Total
          Area
        </p>
      </section>

      <section class="box box--prompt" aria-label="Class discussion prompt">
        <p class="box__text">
          <strong>Class Discussion Prompt:</strong><br />
          <em>"If one capillary is smaller than the aorta, why does blood slow down?"</em><br /><br />
          <strong>Answer:</strong> It's not about the size of <em>one</em> capillary, but the
          <strong>total cross-sectional area</strong> of millions of them combined. This slow speed
          allows time for nutrient and gas exchange.
        </p>
      </section>
    </template>

    <template #main>
      <iframe
        class="tool-frame"
        title="Capillary Blood Flow simulation"
        :srcdoc="bloodSimHtml"
        sandbox="allow-scripts"
      />
    </template>
  </SimulationLayout>
</template>

<style scoped>
:root {
  --muted: #475569;
  --text: #0f172a;
  --leaf-700: #1b7a3b;
  --leaf-100: #dcfce7;
  --border: rgba(20, 83, 45, 0.16);
}

.side-title {
  margin: 0 0 10px;
  color: var(--leaf-700);
  font-size: 18px;
  letter-spacing: 0.2px;
}

.box {
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px 12px;
}

.box--prompt {
  background: #fffbeb;
  border-color: rgba(245, 158, 11, 0.45);
}

.box__text {
  margin: 0;
  color: var(--text);
  line-height: 1.55;
}

.formula {
  background: rgba(220, 252, 231, 0.55);
  border: 1px solid rgba(27, 122, 59, 0.22);
  border-radius: 14px;
  padding: 12px 12px;
  text-align: center;
}

.formula__math {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  color: var(--text);
}

.fraction {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
}

.numerator {
  display: block;
  border-bottom: 2px solid rgba(15, 23, 42, 0.8);
  padding: 0 6px 3px;
}

.denominator {
  display: block;
  padding: 3px 6px 0;
}

.formula__legend {
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.5;
  font-size: 13px;
}

.tool-frame {
  width: 100%;
  height: 720px;
  border: 0;
  background: #ffffff;
  display: block;
  border-radius: 12px;
  outline: 1px solid var(--border);
  outline-offset: -1px;
}

@media (max-width: 980px) {
  .tool-frame {
    height: 640px;
  }
}
</style>

