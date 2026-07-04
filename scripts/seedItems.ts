import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o Seed de Equipamentos (Items)...');

  const itemsData = [
    // 1. Armas de Fogo
    { name: 'Pistola 9mm (Glock/Imbel)', damageOrEffect: '+2', concealment: 'Bolso / Velado', value: 2, availability: 4, description: 'Padrão para Caçadores e PMs.' },
    { name: 'Revólver .38 (Canela Seca)', damageOrEffect: '+2', concealment: 'Bolso', value: 1, availability: 3, description: 'Confiável, não deixa estojos de bala na cena.' },
    { name: 'Fuzil de Assalto (T4 / 5.56)', damageOrEffect: '+4', concealment: 'Impossível', value: 4, availability: 7, description: 'Dano massivo. Disparos geram Visibilidade imediata.' },
    { name: 'Espingarda Calibre .12', damageOrEffect: '+3', concealment: 'Casaco Largo', value: 2, availability: 5, description: 'Dano devastador a queima-roupa; espalha chumbo.' },

    // 2. Armas Brancas e Equipamento de Confronto
    { name: 'Faca Tática / Canivete', damageOrEffect: 'Força +1', concealment: 'Bolso', value: 1, availability: 2, description: 'Silenciosa. Perfeita para Furtividade.' },
    { name: 'Machadinha de Incêndio', damageOrEffect: 'Força +2', concealment: 'Casaco Largo', value: 1, availability: 3, description: 'Usada por Caçadores do Credo Vingador.' },
    { name: 'Katana / Espada Longa', damageOrEffect: 'Força +3', concealment: 'Impossível', value: 3, availability: 6, description: 'Exige a Habilidade Armas Brancas para não se cortar.' },
    { name: 'Soco Inglês', damageOrEffect: 'Força +1', concealment: 'Bolso', value: 1, availability: 2, description: 'Transforma dano de Briga em contundente pesado.' },

    // 3. Itens e Equipamentos de Caçador (H5 / Arsenal)
    { name: 'Munição de Fósforo Branco', damageOrEffect: '+2 Agravado (Fogo)', concealment: 'Bolso', value: 3, availability: 7, description: 'Causa dano agravado direto em Vampiros (V5).' },
    { name: 'Drone de Vigilância Térmica', damageOrEffect: 'Permite rastrear calor', concealment: 'Mochila', value: 3, availability: 5, description: 'Ignora efeitos básicos de Ofuscação nível 1.' },
    { name: 'Colete de Kevlar Pesado', damageOrEffect: 'Absorve 2 de Dano', concealment: 'Casaco Largo', value: 3, availability: 6, description: 'Reduz o dano de armas de fogo e impactos físicos.' },
    { name: 'Injetor de Adrenalina Pura', damageOrEffect: 'Ignora penalidades por ferimento por 3 turnos', concealment: 'Bolso', value: 2, availability: 4, description: 'Se usado em excesso, causa o estado de Aflição.' },

    // 4. Itens Arcanos e Focos de Mago (M20)
    { name: 'Notebook Tecnomante Customizado', damageOrEffect: 'Foco para Adeptos da Virtualidade', concealment: 'Mochila', value: 4, availability: 0, description: 'Reduz em -1 a dif. para magias de Correspondência/Forças. Dif. de Ativação (Arete): Base da Esfera' },
    { name: 'Adaga Ritualística de Prata', damageOrEffect: 'Força +2 (Dano Agravado em Lobisomens)', concealment: 'Casaco Largo', value: 3, availability: 0, description: 'Feita de prata pura; quebra a regeneração Garou. Dif. de Ativação (Arete): Física normal' },
    { name: 'Grimório Antigo (Texto Hermético)', damageOrEffect: 'Permite estudar rituais', concealment: 'Impossível', value: 4, availability: 7, description: 'Contém rotinas mágicas prontas para diminuir Paradoxo. Dif. de Ativação (Arete): Teste de Ocultismo' },
    { name: 'Pedra de Sangue (Período/Matéria)', damageOrEffect: 'Armazena 5 pontos de Quintessência', concealment: 'Bolso', value: 3, availability: 0, description: 'Funciona como uma bateria mágica para descarregar feitiços. Dif. de Ativação (Arete): Não exige teste para extrair' },

    // 5. Runas e Fetiches de Lobisomem (W5)
    { name: 'Runa da Casca de Árvore', damageOrEffect: '+2 dados em testes de Vigor', concealment: 'Bolso', value: 2, availability: 5, description: 'Geralmente entalhada em madeira da Cantareira.' },
    { name: 'Pedra do Uivo (Fetiche)', damageOrEffect: 'Ativa o Dom Chamado Além da Névoa sem gastar Fúria', concealment: 'Bolso', value: 3, availability: 6, description: 'Espírito de um lobo ancestral aprisionado na pedra.' },
    { name: 'Runa do Rastreador Urbano', damageOrEffect: 'Reduz em -2 a dificuldade de caça na Zona Sul', concealment: 'No corpo (Tatuagem/Cicatriz)', value: 1, availability: 4, description: 'Abençoada por espíritos do asfalto.' },
  ];

  for (const item of itemsData) {
    await prisma.itemDefinition.upsert({
      where: { name: item.name },
      update: {
        damageOrEffect: item.damageOrEffect,
        concealment: item.concealment,
        value: item.value,
        availability: item.availability,
        description: item.description
      },
      create: {
        name: item.name,
        damageOrEffect: item.damageOrEffect,
        concealment: item.concealment,
        value: item.value,
        availability: item.availability,
        description: item.description
      },
    });
  }

  console.log(`✔ Foram inseridos ${itemsData.length} equipamentos e artefatos no banco!`);
  console.log('Seed de Itens concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
