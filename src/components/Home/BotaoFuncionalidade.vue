<template>
  <main>
    <button v-for="func in funcionalidades" :key="func.nome">
      <div class="circulo"></div>
        <router-link :to="func.src">{{ func.nome }}</router-link>
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
          src: "timenadata"
        },
        { 
          nome: "Integrante mais usado",
          src: "integrantemaisusado"
        },
        {
          nome: "Time mais comum",
          src: "timemaiscomum"
        },
        {
          nome: "Função mais comum",
          src: "funcaomaiscomum"
        },
        {
          nome: "Franquia mais famosa",
          src: "franquiamaisfamosa"
        },
        {
          nome: "Contagem por franquia",
          src: "contagemporfranquia"
        },
        {
          nome: "Contagem por função",
          src: "contagemporfuncao"
        },
        {
          nome: "Cadastrar time",
          src: "cadastrartime"
        },
        {
          nome: "Cadastrar integrante",
          src: "contagemintegrante"
        },
        {
          nome: "Todos os times",
          src: "todosostimes"
        },
        {
          nome: "Todos os integrantes",
          src: "todososintegrantes"
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
  background-color: black;
  margin-bottom: 5px;
}
</style>