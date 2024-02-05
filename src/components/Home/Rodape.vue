<template>
  <footer>
    <p>
      Todos os direitos reservados - Andrew Silva
    </p>
    <div class="links">
      <a href="https://www.linkedin.com/in/andrewgpsilva" target="_blank">Linkedin</a>
      <a href="https://blog-vue-replit.vercel.app/" target="_blank">Blog</a>
      <a href="https://portfvue.vercel.app" target="_blank">Portfólio</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Rodape"
}
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  text-align: center;
  background-color: #D9D9D9;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
}

footer h1 {
  text-align: center;
}

.links {
  display: flex;
  justify-content: space-around;
}

.links a {
  font-weight: bold;
}
</style>