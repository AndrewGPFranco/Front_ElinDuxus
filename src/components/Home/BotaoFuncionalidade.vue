<template>
  <main>
    <button v-for="func in funcionalidades" :key="func.nome">
      <router-link :to="func.src">
        <div class="circulo">
          <i :class="'pi pi-' + func.icon" style="font-size: 2rem"></i>
        </div>
        <span>{{ func.nome }}</span>
      </router-link>
    </button>
  </main>
</template>

<script>
export default {
  name: "BotaoFuncionalidade",
  data() {
    return {
      funcionalidades: [
  {
    nome: "Time na Data",
    src: "timenadata",
    icon: "calendar"
  },
  {
    nome: "Integrante mais usado",
    src: "integrantemaisusado",
    icon: "user"
  },
  {
    nome: "Time mais comum",
    src: "timemaiscomum",
    icon: "chart-bar"
  },
  {
    nome: "Função mais comum",
    src: "funcaomaiscomum",
    icon: "briefcase"
  },
  {
    nome: "Franquia mais famosa",
    src: "franquiamaisfamosa",
    icon: "flag"
  },
  {
    nome: "Contagem por franquia",
    src: "contagemporfranquia",
    icon: "chart-line"
  },
  {
    nome: "Contagem por função",
    src: "contagemporfuncao",
    icon: "chart-pie"
  },
  {
    nome: "Cadastrar time",
    src: "cadastrartime",
    icon: "plus-circle"
  },
  {
    nome: "Cadastrar integrante",
    src: "cadastrarintegrante",
    icon: "user-plus"
  },
  {
    nome: "Todos os times",
    src: "todosostimes",
    icon: "list"
  },
  {
    nome: "Todos os integrantes",
    src: "todososintegrantes",
    icon: "users"
  }
]
    };
  }
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
}

button {
  width: 70px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.circulo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  span {
    color: blue;
  }

@media (min-width: 1280px) {
  main {
    padding: 110px;
  }
}

</style>