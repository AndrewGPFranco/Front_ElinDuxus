<template>
    <main>
        <div class="container">
            <form @submit.prevent="ativarFuncao">
                <label for="dataInicial">Data:</label>
                <input type="date" v-model="data" required>
                <div class="links">
                    <button type="submit">Resultado</button>
                    <router-link to="/">Voltar</router-link>
                </div>
            </form>
            <div class="resultado" v-if="resposta">
                <h2>Time Mais Comuns:</h2>
                <ul>
                    <li v-for="(wrestler, index) in resposta['integrantes']" :key="index">
                        {{ wrestler }}
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'Resultado',
    data() {
        return {
            resposta: null,
            data: ''
        };
    },
    methods: {
        timeMaisComum() {
            const url = `http://localhost:8080/api/times/timenadata?data=${this.data}`;
            axios.get(url)
                .then((response) => {
                    this.resposta = response.data;
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        ativarFuncao() {
            this.timeMaisComum();
        },
    }
};
</script>
  
<style scoped>
.container {
    padding: 120px;
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
</style>
