const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const senhas = [];
let numeroSenha = 1;

// API para gerar uma nova senha
app.post('/gerarSenha', (req, res) => {
  const { especialidade, tipoSenha } = req.body;
  const senha = {
    especialidade,
    tipoSenha,
    numero: numeroSenha++,
    impressaEm: moment().format('YYYY-MM-DD HH:mm:ss'),
  };

  senhas.push(senha);
  res.json(senha);
});

// API para obter todas as senhas geradas
app.get('/senhas', (req, res) => {
  res.json(senhas);
});

// API para chamar a próxima senha
app.get('/chamarProximaSenha', (req, res) => {
  if (senhas.length === 0) {
    res.status(404).json({ message: 'Não há senhas disponíveis.' });
  } else {
    const proximaSenha = senhas.shift();
    res.json(proximaSenha);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
