import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient
}

// Every time Next.js hot reload happens a new Prisma client gets initialized and that causes problem you would see a warning in your terminal about that.  (globalForPrisma.prisma) they store prisma in global window object which is not affected by hot reload
export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
