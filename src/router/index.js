import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import TimeMaisComum from "../views/TimeMaisComum.vue";
import TimeNaData from "../views/TimeNaData.vue";
import IntegranteMaisUsado from "../views/IntegranteMaisUsado.vue";
import FuncaoMaisComum from "../views/FuncaoMaisComum.vue";
import FranquiaMaisFamosa from "../views/FranquiaMaisFamosa.vue";
import ContagemPorFranquia from "../views/ContagemPorFranquia.vue";
import ContagemPorFuncao from "../views/ContagemPorFuncao.vue";
import TodosOsTimes from "../views/TodosOsTimes.vue";
import TodosOsIntegrantes from "../views/TodosOsIntegrantes.vue";
import CadastrarTime from "../views/CadastrarTime.vue";
import CadastrarIntegrante from "../views/CadastrarIntegrante.vue";

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
      component: TimeMaisComum,
    },
    {
      path: "/timenadata",
      name: "timenadata",
      component: TimeNaData,
    },
    {
      path: "/integrantemaisusado",
      name: "integrantemaisusado",
      component: IntegranteMaisUsado,
    },
    {
      path: "/funcaomaiscomum",
      name: "funcaomaiscomum",
      component: FuncaoMaisComum,
    },
    {
      path: "/franquiamaisfamosa",
      name: "franquiamaisfamosa",
      component: FranquiaMaisFamosa,
    },
    {
      path: "/contagemporfranquia",
      name: "contagemporfranquia",
      component: ContagemPorFranquia,
    },
    {
      path: "/contagemporfuncao",
      name: "contagemporfuncao",
      component: ContagemPorFuncao,
    },
    {
      path: "/todosostimes",
      name: "todosostimes",
      component: TodosOsTimes,
    },
    {
      path: "/todososintegrantes",
      name: "todososintegrantes",
      component: TodosOsIntegrantes,
    },
    {
      path: "/cadastrartime",
      name: "cadastrartime",
      component: CadastrarTime
    },
    {
      path: "/cadastrarintegrante",
      name: "cadastrarintegrante",
      component: CadastrarIntegrante
    }
  ],
});

export default router;
