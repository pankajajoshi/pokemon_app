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
  res.send(
    "<style>body { display: flex; justify-content: center; align-items: center; height: 100vh; background-color: lightyellow; font-size: 40px; }</style><div><h1>Welcome to the Pokemon App!</h1></div>"
  );
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
