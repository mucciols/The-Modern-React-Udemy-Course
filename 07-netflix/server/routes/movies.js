// const { PrismaClient } = require("@prisma/client");
// const { PrismaMariaDb } = require("@prisma/adapter-mariadb");

// const adapter = new PrismaMariaDb({
//   host:     process.env.MYSQL_HOST || 'localhost',
//   port:     process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
//   user:     'root',
//   password: 'mu66:o::',
//   database: 'modern_react',
// });

// const prisma = new PrismaClient({
//   log: ['query', 'info', 'warn', 'error'],
//   errorFormat: 'pretty',
//   adapter: adapter
// })

const router = require("express").Router()

const prisma = require("../prisma");


router.get("/movies/list", async (req, res) => {
  const offset = parseInt(req.query.offset);
  let movies = await prisma.movie.findMany({
      take: 12,
      skip: offset
  });
  const totalMovies = await prisma.movie.count();
  return res.json({ movies: movies, count: totalMovies });
});

// GET: un solo film per ID
router.get("/movie/:id", async (req, res) => {
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

module.exports = router;