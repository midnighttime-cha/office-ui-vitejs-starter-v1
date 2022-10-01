import { createRouter, createWebHistory } from 'vue-router';

const defaultRoute = [
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () => import('./components/PageNotFound.vue'),
  },
]
import SigninRoute from './modules/signin/route';

let allRoutes = []
allRoutes = allRoutes.concat(
  ...defaultRoute,
  SigninRoute,
  allRoutes);

const routes = allRoutes

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;