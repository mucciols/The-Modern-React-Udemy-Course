// C:\...\server\db\index.js

const { PrismaClient } = require("@prisma/client");

let prisma;

if (process.env.NODE_ENV === "production") {
  // 1. In produzione, crea semplicemente una nuova istanza
  prisma = new PrismaClient();
} else {
  // 2. In sviluppo (dove c'è l'hot-reloading), usa la variabile globale
  // per assicurarti che venga creata solo UNA SINGOLA istanza.
  
  // @ts-ignore
  if (!global.prisma) {
    // @ts-ignore
    global.prisma = new PrismaClient();
  }
  // @ts-ignore
  prisma = global.prisma;
}

// 3. Esporta l'unica istanza
module.exports = prisma; 
// NOTA: Esporta solo 'prisma', non come oggetto { prisma }