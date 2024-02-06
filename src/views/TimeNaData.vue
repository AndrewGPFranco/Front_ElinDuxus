<template>
    <header>
        <Navbar />
    </header>
    <main>
        <Resultado />
    </main>
    <footer>
        <Rodape />
    </footer>
</template>

<script>
import Navbar from '../components/Home/Navbar.vue';
import Rodape from '../components/Home/Rodape.vue';
import Resultado from '../components/TimeNaData/Resultado.vue';

export default {
    name: "TimeNaData",
    components: {
        Resultado,
        Navbar,
        Rodape
    }
}
</script>