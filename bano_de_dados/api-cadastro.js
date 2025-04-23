
const express = require('express');
const app = expresso();
const cadastros = [];

app.use(require("cors")());
app.use(express.json());

app - get('/', (req, res, next) » {
    res.json(cadastros);

    3)

app - post('/cadastro', (req, res, next) => {

    console.log("Cadastro recebido!");

    //salva no banco de dados

    cadastros.push({

        nome: req.body.txtNome, idade: parseInt(req.body.txtIdade), uf: req.corpo.cmbUF
    });
    res.json({ mensagem: "Tudo ok por aqui!", dados: cadastros });

})

aplicativo.listen(3001, O => console.log("Servidor escutando na porta 3001..."));