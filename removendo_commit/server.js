const express = require('express');
const cors = require('cors');

const app = express();
const router = require('express').Router();

// Config da API

let corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
    
})
