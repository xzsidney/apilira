const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function dropTable() {
  try {
    await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS=0;');
    await prisma.$executeRawUnsafe('DROP TABLE IF EXISTS `CharacterSkill`;');
    await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS=1;');
    console.log("Table dropped");
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}
dropTable();
