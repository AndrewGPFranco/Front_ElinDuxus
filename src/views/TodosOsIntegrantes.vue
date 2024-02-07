<template>
    <header>
        <Navbar />
    </header>
    <main>
        <h1 class="titulo">Integrantes já cadastrados:</h1>
        <div class="integrantes-container">
            <div v-for="integrante in resposta" :key="integrante.id" class="integrante-card">
                <h2 class="integrante-nome">{{ integrante.nome }}</h2>
            </div>
        </div>
    </main>
    <footer>
        <Rodape />
    </footer>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Home/Navbar.vue';
import Rodape from '../components/Home/Rodape.vue';

export default {
    name: "TodosOsIntegrantes",
    data() {
        return {
            resposta: []
        }
    },
    methods: {
        exibir() {
            axios.get("http://localhost:8080/api/dados/integrantes")
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
.titulo {
    text-align: center;
    margin-top: 20px;
}

.integrantes-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.integrante-card {
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 250px;
    text-align: center;
}

.integrante-nome {
    margin-top: 0;
    font-size: 20px;
}

main {
    padding: 30px;
    margin-bottom: 100px;
}

footer {
    bottom: 0;
    position: fixed;
    width: 100vw;
}
</style>
