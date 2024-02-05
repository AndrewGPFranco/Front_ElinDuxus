import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import TimeMaisComum from "../views/TimeMaisComum.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFound,
    },
    {
      path: "/timemaiscomum",
      name: "timemaiscomum",
      component: TimeMaisComum
    }
  ],
});

export default router;
