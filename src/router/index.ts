import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { h } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/projects/:id',
      name: 'single-project',
      component: () => import('@/views/SingleProject.vue'),
    },
    {
      path: '/:notFound(.*)*',
      name: 'not-found',
      // component: () => import('@/views/NotFound.vue'),
      component: h('h1', { style: 'color: red;' }, '404 Not Found'),
    },
  ],
});

export default router;
