<template>
  <nav>
    <router-link to="/">
      <h1>
        Elin <br> Duxus
      </h1>
    </router-link>
    <button>
      <img src="../../assets/Home/menu.png" alt="Icone de um menu Hambúrguer" />
    </button>
  </nav>
</template>

<script>
  export default {
    name: "Navbar"
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
</style>