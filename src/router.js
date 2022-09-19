import { createRouter, createWebHistory } from 'vue-router';

import SigninRoute from './modules/signin/route';

let allRoutes = []
allRoutes = allRoutes.concat(...SigninRoute, allRoutes)

const routes = allRoutes

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;