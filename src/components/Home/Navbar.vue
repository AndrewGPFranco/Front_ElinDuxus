<template>
  <nav>
    <router-link to="/">
      <h1>
        Elin <br> Duxus
      </h1>
    </router-link>
    <button @click="show">
      <img v-if="!exibir" src="../../assets/Home/menu.png" alt="Icone de um menu Hambúrguer" />
      <img v-if="exibir" src="../../assets/Home/close.png" alt="Icone de um menu Hambúrguer" />
    </button>
  </nav>
  <TransitionGroup name="aparicao">
  <div class="menu" v-if="exibir">
    <a href="https://github.com/AndrewGPSilva/apiElinDuxus" target="_blank">
      Repositório API
    </a>
    <a href="https://github.com/AndrewGPSilva/Front_ElinDuxus" target="_blank">
      Repositório FRONT-END
    </a>
  </div>
  </TransitionGroup>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
        exibir: false
      }
    },
    methods: {
      show() {
        this.exibir = !this.exibir;
      }
    }
  }
</script>

<style scoped>
  nav {
    display: flex;
    padding: 40px;
    justify-content: space-between;
  }
  
  nav img {
    width: 30px;
    height: 30px;
  }

  nav h1 {
    font-family: 'Anton', sans-serif;
    font-size: 1.3rem;
    text-align: center;
  }

  .menu {
    text-align: right;
    padding: 0 30px;
    gap: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }

  .aparicao-enter-active {
  transition: all 1s ease-out;
}

.aparicao-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.aparicao-enter-from,
.aparicao-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>