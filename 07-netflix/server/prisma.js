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

// const router = require("express").Router()

module.exports = prisma;