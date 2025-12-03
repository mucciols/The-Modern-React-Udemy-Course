// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Global per evitare la creazione di nuove istanze in sviluppo (hot reload)
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: ["query"], // Opzionale: per vedere le query eseguite
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;