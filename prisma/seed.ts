import { prisma } from "../lib/prisma";

async function seed() {
  await prisma.$executeRaw`TRUNCATE TABLE products;`;
  await prisma.$executeRaw`TRUNCATE TABLE inventories;`;
  await prisma.$executeRaw`TRUNCATE TABLE allocated_histories;`;

  await prisma.$executeRaw`ALTER TABLE products AUTO_INCREMENT = 1;`;
  await prisma.$executeRaw`ALTER TABLE inventories AUTO_INCREMENT = 1;`;
  await prisma.$executeRaw`ALTER TABLE allocated_histories AUTO_INCREMENT = 1;`;

  await prisma.product.create({
    data: {
      id: 1,
      name: "テスト製品",
      inventory: {
        create: {
          id: 1,
          quantity: 100,
        },
      },
    },
  });
}

seed();
