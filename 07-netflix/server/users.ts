//src/routes/users.ts


import {  PrismaClient } from '@prisma/client';
//let prisma = PrismaClient()

const express = require("express")
const movies = require("./movies.json");
const cors = require("cors")
const app = express();



// Get all users
app.get('/getPrisma', async (req, res) => {
  // const movie = await prisma.movie.findFirst();
  // console.log('lettura utente ', movie)
  // res.json(movie);
});




// Create a new user
// router.post('/', async (req, res) => {
//   const { name, email } = req.body;
//   const newUser = await prisma.movies.findMany({
//     data: { name, email },
//   });
//   res.status(201).json(newUser);
// });

export default router;