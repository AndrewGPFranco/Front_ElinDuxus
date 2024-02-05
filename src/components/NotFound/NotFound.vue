<template>
  <div class="not-found-container">
    <h1>404 Not Found</h1>
    <p>Desculpe, <br> a página que você está procurando <br> não foi encontrada.</p>
    <router-link to="/">Ir para a página inicial</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found-container {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 2em;
  color: #e74c3c;
}

p {
  color: #7f8c8d;
}

router-link {
  color: #3498db;
  text-decoration: underline;
  cursor: pointer;
}
</style>
