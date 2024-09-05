const express = require('express');
const cors = require('cors');

const app = express();
const router = require('express').Router();

// Config da API
let corsOptions = { origin: 'http://localhost:8080' };

app.use(express.json(), router, cors(corsOptions), express.urlencoded({ extended: true }));

// ROTAS
router.get('/', (_req, res) => { res.status(200).send({ message: 'Hello World' }) });

// config Conexão
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { console.log(`Rodando na porta ${PORT}`) });
