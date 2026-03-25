import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CapillaryBloodFlowTool from '../views/simulations/CapillaryBloodFlowTool.vue'
import ComingSoonTool from '../views/simulations/ComingSoonTool.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Tools (first tool: the existing plain HTML simulation)
    {
      path: '/simulations/capillary-blood-flow',
      name: 'capillaryBloodFlow',
      component: CapillaryBloodFlowTool,
      meta: { label: 'Capillary Blood Flow' },
    },
    {
      path: '/simulations/cell-division',
      name: 'cellDivision',
      component: ComingSoonTool,
      props: () => ({
        title: 'Cell Division',
        description: 'Mitosis and cell-cycle concepts with interactive controls.',
      }),
      meta: { label: 'Cell Division' },
    },
    {
      path: '/simulations/genetic-drift',
      name: 'geneticDrift',
      component: ComingSoonTool,
      props: () => ({
        title: 'Genetic Drift',
        description: 'Random sampling and allele-frequency shifts over generations.',
      }),
      meta: { label: 'Genetic Drift' },
    },
    {
      path: '/simulations/photosynthesis',
      name: 'photosynthesis',
      component: ComingSoonTool,
      props: () => ({
        title: 'Photosynthesis',
        description: 'Explore how light and CO2 affect production.',
      }),
      meta: { label: 'Photosynthesis' },
    },
    {
      path: '/simulations',
      redirect: '/',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
