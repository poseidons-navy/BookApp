// database.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const connectDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("PostgreSQL connected with Prisma client");
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
  }
};

export default connectDatabase;
