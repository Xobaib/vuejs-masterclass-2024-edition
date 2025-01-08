import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const authStore = useAuthStore();

  if (to.name === '/login' || to.name === '/register') {
    return true;
  }

  if (!authStore.user) {
    return { name: '/login' };
  }

  return true;
});

export default router;
