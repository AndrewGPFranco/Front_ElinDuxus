<template>
    <header>
        <Navbar />
    </header>
    <div>
        <div v-if="showSuccessMessage" class="success-message">
            Integrante cadastrado com sucesso!
        </div>
        <h1>Cadastrar Integrante</h1>
        <form @submit.prevent="cadastrarIntegrante">
            <label for="nome">Nome do Integrante:</label>
            <input type="text" id="nome" v-model="nome" required>
            <label for="franquia">Franquia:</label>
            <input type="text" id="franquia" v-model="franquia" required>
            <label for="funcao">Função:</label>
            <input type="text" id="funcao" v-model="funcao" required>
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
            franquia: '',
            funcao: '',
            showSuccessMessage: false
        };
    },
    methods: {
        cadastrarIntegrante() {
            const data = {
                nome: this.nome,
                franquia: this.franquia,
                funcao: this.funcao
            };
            axios.post('http://localhost:8080/api/cadastro/integrantes', data)
                .then(response => {
                    console.log('Integrante cadastrado com sucesso:', response.data);
                    this.nome = '';
                    this.franquia = '';
                    this.funcao = '';
                    this.showSuccessMessage = true;
                    setTimeout(() => {
                        this.showSuccessMessage = false;
                    }, 5000); // 5 segundos
                })
                .catch(error => {
                    console.error('Erro ao cadastrar integrante:', error);
                });
        }
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

input[type="text"] {
    width: calc(100% - 16px);
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
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

div {
    text-align: center;
}

.success-message {
    background-color: #4caf50;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 4px;
    margin-top: 10px;
}
</style>
