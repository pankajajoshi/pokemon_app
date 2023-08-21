const express = require("express");
const app = express();
const port = 3000;

const pokemon = require("./models/pokemon.js");
//const pokemon = require("./models/pokemon.js");

require("@babel/register")({
  presets: ["@babel/preset-react"],
});

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  //res.send(pokemon);
  res.render("Index", {
    pokemon: pokemon,
  });
});

app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  const selectedPokemon = pokemon[id];
  selectedPokemon.img = `${selectedPokemon.img}.jpg`; // Adding .jpg extension to the image URL
  res.render("show", { pokemon: selectedPokemon });
});

// app.get("/pokemon/:id", (req, res) => {
//   const id = req.params.id;
//   res.send(id);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
