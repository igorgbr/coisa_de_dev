const express = require('express');
const cors = require('cors');

const app = express();
const router = require('express').Router();

const getUserAdmin = require('./UserData');

// Config da API
let corsOptions = { origin: 'http://localhost:8080' };

app.use(express.json(), router, cors(corsOptions), express.urlencoded({ extended: true }));

// ROTAS
router.get('/', (_req, res) => { res.status(200).send({ message: 'Hello World' }) });

router.post('/:password', (req, res) => {

    UserPass = req.params.password

    if (UserPass === getUserAdmin().pass) { return res.status(200).send({ message: `Bem vindo ${getUserAdmin().nome}.` }) };

    return res.status(404).send({ message: 'Cliente não encontrado' });

});

// config Conexão
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { console.log(`Rodando na porta ${PORT}`) });
