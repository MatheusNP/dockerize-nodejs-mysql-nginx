const express = require('express')
const axios = require('axios');

const db = require("./db");

const app = express();
const port = 3000;

app.get('/', async (req,res) => {
  // busca um nome aleatório em uma api externa;
  let fullName = '';
  await axios({
    method: "get",
    url: "https://gerador-nomes.herokuapp.com/nome/aleatorio",
    responseType: "json",
  }).then(function (response) {
    fullName = response.data.join(' ');
  });

  // insere a nova pessoa gerada pela api externa/
  await db.insertPeople({name: fullName});

  // retorna a lista de pessoas;
  const list = await db.listPeople();

  // monta html;
  let html = '<h1>Full Cycle Rocks!</h1><ul>';
  list.forEach((person) => {html += `<li>${person.name}</li>`})
  html += '</ul>';

  // monta resultado na tela;
  res.send(html);
})

app.listen(port, ()=> {
  console.log('Rodando na porta ' + port)
})