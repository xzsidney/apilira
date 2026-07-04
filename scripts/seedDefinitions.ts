import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o Seed de Definições...');

  // 1. ATRIBUTOS
  const attributes = [
    { name: 'Força', type: 'UNIVERSAL', description: 'Atributo Físico' },
    { name: 'Destreza', type: 'UNIVERSAL', description: 'Atributo Físico' },
    { name: 'Vigor', type: 'UNIVERSAL', description: 'Atributo Físico' },
    { name: 'Carisma', type: 'UNIVERSAL', description: 'Atributo Social' },
    { name: 'Manipulação', type: 'UNIVERSAL', description: 'Atributo Social' },
    { name: 'Autocontrole', type: 'UNIVERSAL', description: 'Atributo Social (V5/W5)' },
    { name: 'Aparência', type: 'UNIVERSAL', description: 'Atributo Social (V20/M20)' },
    { name: 'Inteligência', type: 'UNIVERSAL', description: 'Atributo Mental' },
    { name: 'Raciocínio', type: 'UNIVERSAL', description: 'Atributo Mental' },
    { name: 'Determinação', type: 'UNIVERSAL', description: 'Atributo Mental (V5/W5)' },
    { name: 'Percepção', type: 'UNIVERSAL', description: 'Atributo Mental (V20/M20)' },
  ];

  for (const attr of attributes) {
    await prisma.attributeDefinition.upsert({
      where: { name_type: { name: attr.name, type: attr.type } },
      update: {},
      create: attr,
    });
  }
  console.log('✔ Atributos inseridos!');

  // 2. HABILIDADES
  const vampireSkills = [
    'Armas Brancas', 'Armas de Fogo', 'Atletismo', 'Briga', 'Condução', 'Furtividade', 'Ladroagem', 'Ofícios', 'Sobrevivência',
    'Empatia com Animais', 'Etiqueta', 'Intimidação', 'Liderança', 'Manha', 'Performance', 'Persuasão', 'Sagacidade', 'Subterfúgio',
    'Ciência', 'Erudição', 'Finanças', 'Investigação', 'Medicina', 'Ocultismo', 'Percepção', 'Política', 'Tecnologia'
  ];

  const mageSkills = [
    'Prontidão', 'Artes', 'Esportes', 'Consciência', 'Briga', 'Empatia', 'Expressão', 'Intimidação', 'Liderança', 'Manha', 'Lábia',
    'Ofícios', 'Condução', 'Etiqueta', 'Armas de Fogo', 'Artes Marciais', 'Meditação', 'Armas Brancas', 'Pesquisa', 'Furtividade', 'Sobrevivência', 'Tecnologia',
    'Acadêmicos', 'Computação', 'Cosmologia', 'Enigmas', 'Esoterismo', 'Investigação', 'Direito', 'Medicina', 'Ocultismo', 'Política', 'Ciência'
  ];

  // Inserindo Vampire Skills
  for (const skill of vampireSkills) {
    await prisma.skillDefinition.upsert({
      where: { name_type: { name: skill, type: 'VAMPIRE' } },
      update: {},
      create: { name: skill, type: 'VAMPIRE' },
    });
  }
  
  // Inserindo Mage Skills
  for (const skill of mageSkills) {
    await prisma.skillDefinition.upsert({
      where: { name_type: { name: skill, type: 'MAGE' } },
      update: {},
      create: { name: skill, type: 'MAGE' },
    });
  }
  console.log('✔ Habilidades inseridas!');

  // 3. STATUS
  const statuses = [
    { name: 'Vitalidade', gameStyle: 'UNIVERSAL', maxValue: 10, defaultInitialValue: 5 },
    { name: 'Força de Vontade', gameStyle: 'UNIVERSAL', maxValue: 10, defaultInitialValue: 5 },
    { name: 'Humanidade', gameStyle: 'VAMPIRE', maxValue: 10, defaultInitialValue: 7 },
    { name: 'Fome', gameStyle: 'VAMPIRE', maxValue: 5, defaultInitialValue: 1 },
    { name: 'Potência de Sangue', gameStyle: 'VAMPIRE', maxValue: 10, defaultInitialValue: 1 },
    { name: 'Arete', gameStyle: 'MAGE', maxValue: 10, defaultInitialValue: 1 },
    { name: 'Quintessência', gameStyle: 'MAGE', maxValue: 20, defaultInitialValue: 5 },
    { name: 'Paradoxo', gameStyle: 'MAGE', maxValue: 20, defaultInitialValue: 0 },
    { name: 'Fúria', gameStyle: 'WEREWOLF', maxValue: 10, defaultInitialValue: 1 },
    { name: 'Gnose', gameStyle: 'WEREWOLF', maxValue: 10, defaultInitialValue: 1 },
    { name: 'Glória', gameStyle: 'WEREWOLF', maxValue: 10, defaultInitialValue: 0 },
    { name: 'Honra', gameStyle: 'WEREWOLF', maxValue: 10, defaultInitialValue: 0 },
    { name: 'Sabedoria', gameStyle: 'WEREWOLF', maxValue: 10, defaultInitialValue: 0 },
  ];

  for (const status of statuses) {
    await prisma.statusDefinition.upsert({
      where: { name_gameStyle: { name: status.name, gameStyle: status.gameStyle } },
      update: {},
      create: status,
    });
  }
  console.log('✔ Status inseridos!');

  // 4. PODERES (Categorias)
  const powerTypes = [
    { name: 'Animalismo', gameStyle: 'VAMPIRE', type: 'DISCIPLINE' },
    { name: 'Auspícios', gameStyle: 'VAMPIRE', type: 'DISCIPLINE' },
    { name: 'Dominação', gameStyle: 'VAMPIRE', type: 'DISCIPLINE' },
    { name: 'Correspondência', gameStyle: 'MAGE', type: 'SPHERE' },
    { name: 'Entropia', gameStyle: 'MAGE', type: 'SPHERE' },
    { name: 'Forças', gameStyle: 'MAGE', type: 'SPHERE' },
    { name: 'Vida', gameStyle: 'MAGE', type: 'SPHERE' },
    { name: 'Mente', gameStyle: 'MAGE', type: 'SPHERE' },
    { name: 'Matéria', gameStyle: 'MAGE', type: 'SPHERE' },
    { name: 'Primórdio', gameStyle: 'MAGE', type: 'SPHERE' },
    { name: 'Espírito', gameStyle: 'MAGE', type: 'SPHERE' },
    { name: 'Tempo', gameStyle: 'MAGE', type: 'SPHERE' },
  ];

  for (const power of powerTypes) {
    // Cannot use upsert cleanly with enum types if TS types are strict without casting, but let's try raw or basic upsert
    // Cast type to any if necessary, or just rely on Prisma types
    await prisma.powerDefinition.upsert({
      where: { name_gameStyle: { name: power.name, gameStyle: power.gameStyle } },
      update: {},
      create: {
        name: power.name,
        gameStyle: power.gameStyle,
        type: power.type as any
      },
    });
  }
  console.log('✔ Categorias de Poderes inseridas!');

  console.log('Seed de Definições concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
