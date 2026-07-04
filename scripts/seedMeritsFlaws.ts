import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o Seed de Qualidades e Defeitos...');

  // Caminho absoluto para o JSON
  const jsonPath = path.resolve(__dirname, '../../doc/qualidade_defeito.json');
  
  if (!fs.existsSync(jsonPath)) {
    throw new Error(`Arquivo não encontrado em: ${jsonPath}`);
  }

  const rawData = fs.readFileSync(jsonPath, 'utf8');
  const jsonData = JSON.parse(rawData);

  const root = jsonData.qualidades_e_defeitos_mundo_das_trevas;
  
  // Mapear as chaves do JSON para o GameStyle do banco de dados
  const mappings = [
    { key: 'vampiro_v5', gameStyle: 'VAMPIRE' },
    { key: 'lobisomem_w5', gameStyle: 'WEREWOLF' },
    { key: 'mago_m20', gameStyle: 'MAGE' },
    { key: 'cacador_h5', gameStyle: 'HUNTER' },
  ];

  let insertedCount = 0;

  for (const map of mappings) {
    if (root[map.key] && root[map.key].lista) {
      const lista = root[map.key].lista;

      for (const item of lista) {
        // Converte o tipo do JSON ("Qualidade" / "Defeito") para o Enum (MERIT / FLAW)
        const typeEnum = item.tipo === 'Qualidade' ? 'MERIT' : 'FLAW';

        await prisma.meritFlawDefinition.upsert({
          where: {
            name_gameStyle_type: {
              name: item.nome,
              gameStyle: map.gameStyle,
              type: typeEnum
            }
          },
          update: {
            points: item.pontos,
            category: item.categoria,
            description: item.nota_narrativa,
            apiEffect: item.efeito_api
          },
          create: {
            name: item.nome,
            type: typeEnum,
            gameStyle: map.gameStyle,
            points: item.pontos,
            category: item.categoria,
            description: item.nota_narrativa,
            apiEffect: item.efeito_api
          },
        });
        insertedCount++;
      }
    }
  }

  console.log(`✔ Foram inseridas/atualizadas ${insertedCount} Qualidades e Defeitos Inteligentes no banco!`);
  console.log('Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
