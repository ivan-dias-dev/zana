import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/fritos",
    name: "fritos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Fritos.vue"),
  },
  {
    path: "/congelados",
    name: "congelados",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Congelados.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
