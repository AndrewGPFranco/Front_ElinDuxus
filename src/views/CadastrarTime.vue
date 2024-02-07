<template>
    <header>
        <Navbar />
    </header>
    <div class="container">
        <h1>Cadastrar Time</h1>
        <form @submit.prevent="cadastrarTime">
            <label for="nome">Nome do Time:</label>
            <input type="text" id="nome" v-model="nome" required>
            <label for="data">Data:</label>
            <input type="date" id="data" v-model="data" required>
            <label for="integrantes">Integrantes:</label>
            <select multiple v-model="integrantes" id="integrantes" required>
                <option v-for="integrante in integrantesDisponiveis" :value="integrante.id" :key="integrante.id">{{
                    integrante.nome }}</option>
            </select>
            <button type="submit">Cadastrar</button>
        </form>
    </div>
    <footer>
        <Rodape />
    </footer>
</template>
  
<script>
import axios from 'axios';
import Rodape from '../components/Home/Rodape.vue';
import Navbar from '../components/Home/Navbar.vue';

export default {
    data() {
        return {
            nome: '',
            data: '',
            integrantes: [],
            integrantesDisponiveis: []
        };
    },
    methods: {
        cadastrarTime() {
            const data = {
                data: this.data,
                nome: this.nome,
                integrantesIds: this.integrantes
            };
            axios.post('http://localhost:8080/api/cadastro/times', data)
                .then(response => {
                    console.log('Time cadastrado com sucesso:', response.data);
                    this.nome = '';
                    this.data = '';
                    this.integrantes = [];
                })
                .catch(error => {
                    console.error('Erro ao cadastrar time:', error);
                });
        },
        carregarIntegrantesDisponiveis() {
            axios.get('http://localhost:8080/api/dados/integrantes')
                .then(response => {
                    this.integrantesDisponiveis = response.data;
                })
                .catch(error => {
                    console.error('Erro ao carregar integrantes disponíveis:', error);
                });
        }
    },
    created() {
        this.carregarIntegrantesDisponiveis();
    },
    components: {
        Navbar,
        Rodape
    }
};
</script>
  
<style scoped>
form {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

input[type="text"],
input[type="date"],
select {
    width: calc(100% - 16px);
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

select {
    height: 100px;
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

footer {
    bottom: 0;
    position: fixed;
    width: 100vw;
}

.container {
    text-align: center;
    margin-bottom: 100px;
}

@media (min-width: 1280px) {
    .container {
        margin-bottom: 100px;
        text-align: center;
    }
}
</style>

