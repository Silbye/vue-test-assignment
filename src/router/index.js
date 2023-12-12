import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ItemDetails from "../components/ItemDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/items/:id",
    name: "itemDetails",
    component: ItemDetails,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "ErrorView",
    component: () => import("../components/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
