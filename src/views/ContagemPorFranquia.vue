<template>
  <header>
    <Navbar />
  </header>
  <h1>
    Contagem por franquia 
  </h1>
  <footer>
    <Rodape />
  </footer>
</template>

<script>
import Navbar from '../components/Home/Navbar.vue';
import Rodape from '../components/Home/Rodape.vue';
  export default {
    name: "ContagemPorFranquia",
    components: {
      Navbar,
      Rodape
    }
  }
</script>

<style scoped>
.container {
    padding: 70px;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

form {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
}

.links {
    display: flex;
    flex-direction: column;
}

.links a {
    margin-top: 13px;
}

button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    padding: 10px;
}

.resultado {
    margin-top: 20px;
    text-align: center;
}

.resultado h2 {
    margin-bottom: 15px;
}

    footer {
        bottom: 0;
        position: fixed;
        width: 100vw;
    }
</style>