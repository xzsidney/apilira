import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o Seed de Regiões...");

  // Ler o arquivo JSON
  const jsonPath = path.resolve(__dirname, "../../doc/cidadeSP.json");
  if (!fs.existsSync(jsonPath)) {
    console.error(`Arquivo não encontrado em: ${jsonPath}`);
    return;
  }

  const rawData = fs.readFileSync(jsonPath, "utf-8");
  const data = JSON.parse(rawData);

  // 1. Criar Região Principal (Cidade de São Paulo) - Level 3
  let cityRegion = await prisma.region.findFirst({
    where: { name: "São Paulo (SP)", level: 3 },
  });

  if (!cityRegion) {
    cityRegion = await prisma.region.create({
      data: {
        name: "São Paulo (SP)",
        level: 3,
        description: "A metrópole que nunca dorme.",
      },
    });
    console.log("Criada Região Principal (Level 3): São Paulo (SP)");
  } else {
    console.log("Região Principal já existe.");
  }

  // Iterar pelas zonas e bairros
  const spRegion = data["sao_paulo_rpg_regioes"];
  for (const zoneKey in spRegion) {
    const zone = spRegion[zoneKey];
    console.log(`\nProcessando Zona: ${zone.nome}`);

    const narrativeClimate = zone.clima_narrativo;

    for (const bairro of zone.bairros) {
      console.log(` -> Processando Bairro: ${bairro.nome}`);

      let bairroRegion = await prisma.region.findFirst({
        where: { name: bairro.nome, parentRegionId: cityRegion.id },
      });

      if (!bairroRegion) {
        bairroRegion = await prisma.region.create({
          data: {
            name: bairro.nome,
            level: 4, // Bairro
            parentRegionId: cityRegion.id,
            narrativeClimate: narrativeClimate,
            factionDomain: bairro.dominio_faccao,
            dangerLevel: 1
          },
        });
      }

      // --- Populando Riqueza ---
      if (bairro.riqueza) {
        let wealth = await prisma.wealth.findFirst({ where: { wealthType: bairro.riqueza } });
        if (!wealth) {
          wealth = await prisma.wealth.create({ data: { wealthType: bairro.riqueza } });
        }
        await prisma.regionWealth.upsert({
          where: {
            regionId_wealthId: { regionId: bairroRegion.id, wealthId: wealth.id },
          },
          update: { testDifficulty: bairro.dificuldades.teste_riqueza },
          create: {
            regionId: bairroRegion.id,
            wealthId: wealth.id,
            testDifficulty: bairro.dificuldades.teste_riqueza,
          },
        });
      }

      // --- Populando Criminalidade ---
      if (bairro.criminalidade) {
        let crime = await prisma.criminality.findFirst({ where: { crimeType: "Geral", severity: bairro.criminalidade } });
        if (!crime) {
          crime = await prisma.criminality.create({
            data: { crimeType: "Geral", severity: bairro.criminalidade },
          });
        }
        await prisma.regionCriminality.upsert({
          where: { regionId_criminalityId: { regionId: bairroRegion.id, criminalityId: crime.id } },
          update: { testDifficulty: bairro.dificuldades.teste_criminalidade },
          create: {
            regionId: bairroRegion.id,
            criminalityId: crime.id,
            testDifficulty: bairro.dificuldades.teste_criminalidade,
          },
        });
      }

      // --- Populando Visibilidade Midiática ---
      if (bairro.visibilidade_midiatica) {
        let media = await prisma.mediaVisibility.findFirst({ where: { mediaType: "Mídia Local", severity: bairro.visibilidade_midiatica } });
        if (!media) {
          media = await prisma.mediaVisibility.create({
            data: { mediaType: "Mídia Local", severity: bairro.visibilidade_midiatica },
          });
        }
        await prisma.regionMediaVisibility.upsert({
          where: { regionId_mediaVisibilityId: { regionId: bairroRegion.id, mediaVisibilityId: media.id } },
          update: { testDifficulty: bairro.dificuldades.teste_visibilidade },
          create: {
            regionId: bairroRegion.id,
            mediaVisibilityId: media.id,
            testDifficulty: bairro.dificuldades.teste_visibilidade,
          },
        });
      }

      // --- Populando Segurança Pública ---
      if (bairro.seguranca_publica) {
        let sec = await prisma.publicSecurity.findFirst({ where: { securityType: bairro.seguranca_publica } });
        if (!sec) {
          sec = await prisma.publicSecurity.create({
            data: { securityType: bairro.seguranca_publica },
          });
        }
        await prisma.regionPublicSecurity.upsert({
          where: { regionId_publicSecurityId: { regionId: bairroRegion.id, publicSecurityId: sec.id } },
          update: { testDifficulty: bairro.dificuldades.teste_seguranca },
          create: {
            regionId: bairroRegion.id,
            publicSecurityId: sec.id,
            testDifficulty: bairro.dificuldades.teste_seguranca,
          },
        });
      }

      // --- Perfis de População (Demographics) ---
      if (bairro.dominio_faccao) {
        let facProfile = await prisma.demographicProfile.findFirst({
          where: {
            species: "Sobrenatural",
            socialClass: "Média",
            profession: bairro.dominio_faccao,
          },
        });

        if (!facProfile) {
          facProfile = await prisma.demographicProfile.create({
            data: {
              species: "Sobrenatural",
              socialClass: "Média",
              profession: bairro.dominio_faccao,
            },
          });
        }

        await prisma.regionDemographic.upsert({
          where: { regionId_demographicProfileId: { regionId: bairroRegion.id, demographicProfileId: facProfile.id } },
          update: { quantity: 15 }, 
          create: {
            regionId: bairroRegion.id,
            demographicProfileId: facProfile.id,
            quantity: 15, 
          },
        });
      }

      if (bairro.seguranca_publica) {
        let guardProfile = await prisma.demographicProfile.findFirst({
          where: {
            species: "Humano",
            socialClass: "Média",
            profession: "Forças de Segurança",
          },
        });

        if (!guardProfile) {
          guardProfile = await prisma.demographicProfile.create({
            data: {
              species: "Humano",
              socialClass: "Média",
              profession: "Forças de Segurança",
            },
          });
        }

        await prisma.regionDemographic.upsert({
          where: { regionId_demographicProfileId: { regionId: bairroRegion.id, demographicProfileId: guardProfile.id } },
          update: { quantity: 50 }, 
          create: {
            regionId: bairroRegion.id,
            demographicProfileId: guardProfile.id,
            quantity: 50,
          },
        });
      }
    }
  }

  console.log("\nSeed concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
