<template>
  <main>
    <button v-for="func in funcionalidades" :key="func.nome">
      <div class="circulo"></div>
      {{ func.nome }}
    </button>
  </main>
</template>

<script>
export default {
  name: "BotaoFuncionalidade",
  data() {
    return {
      funcionalidades: [
        { nome: "Time na Data" },
        { nome: "Integrante mais usado" },
        {
          nome: "Time mais comum"
        },
        {
          nome: "Função mais comum"
        },
        {
          nome: "Franquia mais famosa"
        },
        {
          nome: "Contagem por franquia"
        },
        {
          nome: "Contagem por função"
        },
        {
          nome: "Cadastrar time"
        },
        {
          nome: "Cadastrar integrante"
        },
        {
          nome: "Todos os times"
        },
        {
          nome: "Todos os integrantes"
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
    background-color: green;
    margin-bottom: 5px;
  }
</style>