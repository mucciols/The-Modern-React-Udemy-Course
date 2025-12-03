
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
const router = require("express").Router();
const { check, validationResult } = require("express-validator");

router.post("/signup", [
    check("email", "Please input a valid email").isEmail(),
    check("password","Please input a password with a min length of 6").isLength({ min: 6 }),
    check("username", "Please input a username with minleght of 6").isLength({ min: 6 })
], async(req, res)=>{
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }

  const user = await prisma.user.findUnique({
    where: {
      email : req.body.email
    }
  })
  
  if(user) {
    return res.status(400).json({
      errors: [{msg: "this user already exists"}],
    })
  }


  
  res.send("VALID");

  const{ email, password, username } = req.body;
});

module.exports = router;