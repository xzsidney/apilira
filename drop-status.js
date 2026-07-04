const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS=0;');
  await prisma.$executeRawUnsafe('DROP TABLE IF EXISTS lirarpg.characterstatus;');
  await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS=1;');
  console.log("Table dropped successfully");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
