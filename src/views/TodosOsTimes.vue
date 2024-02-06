<template>
    <header>
        <Navbar />
    </header>
    <div v-for="time in resposta" :key="time.id">
        <div v-if="time.nome !== null">
            <h1>
                Time: {{ time.nome }}
            </h1>
            <h2 v-if="time.composicaoTime.length > 0">
                Integrantes:
                <ul>
                    <li v-for="integrante in time.composicaoTime" :key="integrante.id">
                        {{ integrante }}
                    </li>
                </ul>
            </h2>
            <h2 v-else>
                Não há integrantes neste time.
            </h2>
        </div>
        <div v-else>
            <h1>
                Nome do Time Indisponível
            </h1>
            <h2>
                Não há informações disponíveis para este time.
            </h2>
        </div>
    </div>
    <footer>
        <Rodape />
    </footer>
</template>


<script>
import axios from 'axios'
import Navbar from '../components/Home/Navbar.vue';
import Rodape from '../components/Home/Rodape.vue';

export default {
    name: "TodosOsTimes",
    data() {
        return {
            resposta: null
        }
    },
    methods: {
        exibir() {
            axios.get("http://localhost:8080/api/dados/times")
                .then((response) => {
                    this.resposta = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.exibir()
    },
    components: {
        Navbar,
        Rodape
    }
}
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

div {
    margin: 20px auto;
    width: 80%;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
}

h1,
h2 {
    margin: 10px 0;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    list-style-type: none;
}
</style>