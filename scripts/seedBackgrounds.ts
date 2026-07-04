import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o Seed de Antecedentes (Backgrounds)...');

  // Antecedentes (Backgrounds) em PT-BR baseados nas regras oficiais do World of Darkness
  const backgrounds = [
    // UNIVERSAL (Comuns a todos)
    { name: 'Aliados', gameStyle: 'UNIVERSAL', description: 'Amigos ou associados que podem ajudar o personagem com favores ou força física.' },
    { name: 'Contatos', gameStyle: 'UNIVERSAL', description: 'Fontes de informação em diversos setores da sociedade (polícia, submundo, mídia).' },
    { name: 'Fama', gameStyle: 'UNIVERSAL', description: 'O quão conhecido o personagem é na sociedade mortal.' },
    { name: 'Influência', gameStyle: 'UNIVERSAL', description: 'Poder político ou social dentro da comunidade mortal.' },
    { name: 'Mentor', gameStyle: 'UNIVERSAL', description: 'Um protetor, guia ou professor que auxilia o personagem.' },
    { name: 'Recursos', gameStyle: 'UNIVERSAL', description: 'Riqueza, bens materiais e renda mensal disponível.' },
    { name: 'Refúgio', gameStyle: 'UNIVERSAL', description: 'Um local seguro para morar, se esconder ou operar.' },
    { name: 'Lacaios', gameStyle: 'UNIVERSAL', description: 'Servos leais e seguidores que obedecem ao personagem (Carniais, funcionários, etc).' },
    { name: 'Identidade Alternativa', gameStyle: 'UNIVERSAL', description: 'Documentação e histórico falsos e bem construídos (Máscara).' },

    // VAMPIRO (Vampire: The Masquerade)
    { name: 'Rebanho', gameStyle: 'VAMPIRE', description: 'Um grupo de mortais dos quais o vampiro pode se alimentar de forma segura e regular.' },
    { name: 'Geração', gameStyle: 'VAMPIRE', description: 'A distância que o vampiro tem de Caim. Quanto menor, mais poderoso o sangue.' },
    { name: 'Status', gameStyle: 'VAMPIRE', description: 'A reputação e a posição do vampiro dentro da sociedade e seita dos Membros.' },

    // MAGO (Mage: The Ascension)
    { name: 'Avatar', gameStyle: 'MAGE', description: 'A força da essência mágica da alma do mago, que permite manipular a realidade.' },
    { name: 'Biblioteca', gameStyle: 'MAGE', description: 'Uma coleção de livros raros, tomos mágicos e dados de pesquisa oculta.' },
    { name: 'Destino', gameStyle: 'MAGE', description: 'Um propósito cósmico que protege e guia o mago rumo à grandeza.' },
    { name: 'Nodo', gameStyle: 'MAGE', description: 'Um local de poder místico de onde o mago pode extrair Quintessência.' },
    { name: 'Maravilha', gameStyle: 'MAGE', description: 'Um item mágico criado ou descoberto (Talismãs, Fetiches Místicos).' },
    { name: 'Sonho', gameStyle: 'MAGE', description: 'Conexão intuitiva com o inconsciente coletivo para obter inspiração ou respostas.' },

    // LOBISOMEM (Werewolf: The Apocalypse)
    { name: 'Ancestrais', gameStyle: 'WEREWOLF', description: 'A capacidade de canalizar conhecimentos e habilidades de encarnações passadas da matilha.' },
    { name: 'Fetiche', gameStyle: 'WEREWOLF', description: 'Um objeto físico que possui um espírito aprisionado dentro dele, concedendo poderes.' },
    { name: 'Raça Pura', gameStyle: 'WEREWOLF', description: 'Linhagem lendária e prestígio hereditário perante a Nação Garou.' },
    { name: 'Totem', gameStyle: 'WEREWOLF', description: 'O espírito patrono da matilha do personagem, que concede bênçãos coletivas.' },
    { name: 'Parentes', gameStyle: 'WEREWOLF', description: 'Humanos ou lobos que carregam o sangue Garou, imunes ao delírio e que auxiliam a matilha.' },
    { name: 'Ritos', gameStyle: 'WEREWOLF', description: 'Conhecimento de rituais místicos espirituais aprendidos pela tribo.' },
  ];

  for (const bg of backgrounds) {
    await prisma.backgroundDefinition.upsert({
      where: { name_gameStyle: { name: bg.name, gameStyle: bg.gameStyle } },
      update: { description: bg.description },
      create: bg,
    });
  }

  console.log(`✔ Foram inseridos ${backgrounds.length} Antecedentes Oficiais!`);
  console.log('Seed de Backgrounds concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
