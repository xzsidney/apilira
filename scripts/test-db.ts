import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const se = await prisma.region.findFirst({
    where: { name: "Sé / Centro Velho" },
    include: {
      demographics: {
        include: {
          demographicProfile: true
        }
      },
      criminalities: {
        include: { criminality: true }
      }
    }
  });
  
  console.log(JSON.stringify(se, null, 2));
}

main().finally(() => prisma.$disconnect());
