const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const nomes = [
    "Luis",
    "flavio",
    "Brian",
    "Pedro",
    "fabiano",
    "Andrew",
    "Danilo",
    "will",
    "caio",
    "André",
    "Ander",
    "Rita",
    "Carlos",
    "Cristhian",
    "Leo das Pipocas",
    "Letícia"
  ];

  const random = Math.floor(Math.random() * nomes.length);
  res.status(200).json([random, nomes[random]]);

  console.log([random, nomes[random]])
});

app.listen(3000, console.log("funcionando"));
