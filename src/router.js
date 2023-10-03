import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./pages/Page1.vue"),
  },
  {
    path: "/page2",
    component: () => import("./pages/Page2.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
