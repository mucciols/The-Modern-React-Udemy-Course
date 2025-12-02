const express = require("express")
const movies = require("./movies.json");
const cors = require("cors")
const app = express();

app.use(cors())

app.get("/", (req, res) => {
  return res.send("HELLO WORLD")
})

app.get("/movies/list", (req, res) => {
  console.log('lettura dei parametri da movies/list 1 lunghezza', movies.length);
  return res.send(movies);
})

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find(f=>f.id === id);
  return res.send(movie);
})

app.listen(8080, () => {
  console.log("Now listening on 8080 port")
})