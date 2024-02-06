<template>
  <div class="not-found-container">
    <h1>404</h1>
    <p>Desculpe, a página que você está procurando não foi encontrada.</p>
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
