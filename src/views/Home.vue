<template>
  <header>
    <Navbar/>
  </header>
  <main>
    <Slogan />
  </main>
  <footer>
    <Rodape />
  </footer>
</template>

<script setup>
  import Navbar from "../components/Home/Navbar.vue";
  import Slogan from "../components/Home/Slogan.vue";
  import Rodape from "../components/Home/Rodape.vue";
</script>