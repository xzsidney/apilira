import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Criando personagem de teste (Logan) e pegando IDs para a Aventura...');

  // Cria usuário teste se não existir
  let user = await prisma.user.findFirst({ where: { email: 'test@logan.com' } });
  if (!user) {
    user = await prisma.user.create({
      data: {
        name: 'Jogador Teste',
        email: 'test@logan.com',
        password: '123',
        role: 'JOGADOR'
      }
    });
  }

  // Cria Personagem
  const char = await prisma.character.create({
    data: {
      name: 'Logan',
      gameStyle: 'VAMPIRE',
      userId: user.id,
      experienceTotal: 0,
      experienceSpent: 0
    }
  });

  // Dá 10 de sangue e 6 de humanidade (precisa da definition)
  let bloodDef = await prisma.statusDefinition.findFirst({ where: { name: 'Fome' } });
  if (!bloodDef) {
    bloodDef = await prisma.statusDefinition.create({
      data: { name: 'Fome', maxValue: 5, defaultInitialValue: 1, gameStyle: 'VAMPIRE' }
    });
  }
  
  // Vamos abstrair os status direto pro payload do front-end por enquanto
  // Ou criar as definitions de atributo para que a API funcione perfeitamente.
  
  // Vamos pegar a primeira aventura criada
  const adv = await prisma.adventure.findFirst();

  console.log('====================================');
  console.log(`Personagem ID: ${char.id}`);
  console.log(`Aventura ID: ${adv?.id}`);
  console.log('====================================');
  console.log(`Use a URL: http://localhost:5173/jogador/aventura/${adv?.id}/personagem/${char.id}`);
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
