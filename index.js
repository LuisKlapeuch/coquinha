const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

app.listen(port, console.log(`working on port: ${port}`));

app.use(cors());

app.get("/sortudo", (req, res) => {
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
    "Letícia",
  ];

  const random = Math.floor(Math.random() * nomes.length);
  res.status(200).json({ sortudo: nomes[random] });
});
