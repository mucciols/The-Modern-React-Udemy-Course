
const { PrismaClient } = require("@prisma/client");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");
const bcrypt = require("bcrypt")
const router = require("express").Router();
const { check, validationResult } = require("express-validator");

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


router.post("/signup", [
    check("email", "Please input a valid email").isEmail(),
    check("password","Please input a password with a min length of 6").isLength({ min: 6 }),
    check("username", "Please input a username with minleght of 6").isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req, res);

  if(!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }

  const{ email, password, username } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email : email
    }
  })
  
  if(user) {
    return res.status(400).json({
      errors: [{msg: "this user already exists"}],
    })
  }
  
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      email,
      username,
      password: hashPassword,
    },
  });

  res.json({
    user: newUser
  });
});

module.exports = router;