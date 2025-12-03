// const express = require("express")
// const movies = require("./movies.json");
// const cors = require("cors")
// const app = express();

// app.use(cors())

// app.get("/", (req, res) => {
//   return res.send("HELLO WORLD")
// })

// app.get("/movies/list", (req, res) => {
//   const offset = parseInt(req.query.offset);
//   const from = offset;
//   const to = from + 12;
//   const moviesSubset = [...movies].slice(from, to);
  
//   return res.json({ movies: moviesSubset, count: movies.length });
// });

// app.get("/movie/:id", async (req, res) => {
//   const id = req.params.id;
//   const movie = movies.find(f=>f.id === id);
//   return res.send(movie);
// })

// app.get("/getprisma", async (req, res) => {
//   const movie = movies.find(f=>f.id === "1");
//   return res.send(movie)
// })


// app.listen(8080, () => {
//   console.log("Now listening on 8080 port")
// })



const cors = require("cors")
const express = require("express");
// const movies = require("./movies.json");

const { PrismaClient } = require("@prisma/client");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");


const adapter = new PrismaMariaDb({
  host:     process.env.MYSQL_HOST || 'localhost',
  port:     process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
  user:     'root',
  password: 'mu66:o::',
  database: 'modern_react',
});

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty',

  adapter: adapter
})

const app = express();

app.use(cors());

// GET: tutti i film
app.get("/movies", async (req, res) => {
  try {
    const movies = await prisma.movie.findMany();
    res.json(movies);
  } catch (err) {
    console.error("Errore Prisma:", err);
    res.status(500).json({ error: "Errore del server" });
  }
});

app.get("/movies/list", async (req, res) => {
  // const offset = parseInt(req.query.offset);
  // const from = offset;
  // const to = from + 12;
  // const moviesSubset = [...movies].slice(from, to);

  let movies = await prisma.movie.findMany();

  console.log(movies);
  
  return res.json({ movies: movies, count: movies.length });
});


// GET: un solo film per ID
app.get("/movie/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await prisma.movie.findUnique({
      where: { id: Number(id) },
    });

    if (!movie) {
      return res.status(404).json({ error: "Film non trovato" });
    }

    res.json(movie);
  } catch (err) {
    console.error("Errore Prisma:", err);
    res.status(500).json({ error: "Errore del server" });
  }
});

// Start server
app.listen(8080, () => console.log("Server avviato sulla porta 8080"));