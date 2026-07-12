import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

import { initDefinitionEquipment, DefinitionEquipment } from '../src/models/DefinitionEquipment';
initDefinitionEquipment(sequelize);

const equipmentsData = [
  // ARMAS DE FOGO - REVÓLVERES
  { name: 'Smith & Wesson M640', description: 'Calibre: .38', type: 'ARMA_FOGO', damage: '4', concealment: 'B', range: 12, rateOfFire: 3, clip: '5' },
  { name: 'Smith & Wesson M686', description: 'Calibre: .357M', type: 'ARMA_FOGO', damage: '5', concealment: 'J', range: 30, rateOfFire: 2, clip: '6' },
  { name: 'Colt Anaconda', description: 'Calibre: .44', type: 'ARMA_FOGO', damage: '6', concealment: 'J', range: 30, rateOfFire: 2, clip: '6' },
  { name: 'Colt Python', description: 'Calibre: .357M', type: 'ARMA_FOGO', damage: '5', concealment: 'J', range: 30, rateOfFire: 2, clip: '6' },
  { name: 'Ruger Redhawk', description: 'Calibre: .44', type: 'ARMA_FOGO', damage: '6', concealment: 'S', range: 50, rateOfFire: 2, clip: '6' },
  { name: 'Voss BC', description: 'Calibre: .22M', type: 'ARMA_FOGO', damage: '4', concealment: 'J', range: 20, rateOfFire: 3, clip: '8' },

  // ARMAS DE FOGO - PISTOLAS LEVES
  { name: 'Glock 17', description: 'Calibre: 9mm', type: 'ARMA_FOGO', damage: '4', concealment: 'J', range: 20, rateOfFire: 4, clip: '17' },
  { name: 'Walther PPK', description: 'Calibre: .380ACP', type: 'ARMA_FOGO', damage: '4', concealment: 'B', range: 15, rateOfFire: 3, clip: '7' },
  { name: 'Heckler & Koch P7M13', description: 'Calibre: 9mm', type: 'ARMA_FOGO', damage: '4', concealment: 'B', range: 20, rateOfFire: 4, clip: '13' },
  { name: 'Heckler & Koch USP', description: 'Calibre: 9mm', type: 'ARMA_FOGO', damage: '4', concealment: 'J', range: 30, rateOfFire: 4, clip: '15' },
  { name: 'SigSauer P226', description: 'Calibre: 9mm', type: 'ARMA_FOGO', damage: '4', concealment: 'J', range: 25, rateOfFire: 4, clip: '15' },
  { name: 'Hammerli M280 Target', description: 'Calibre: .22LR', type: 'ARMA_FOGO', damage: '2', concealment: 'J', range: 30, rateOfFire: 5, clip: '5' },

  // ARMAS DE FOGO - PISTOLAS PESADAS
  { name: 'M1911', description: 'Calibre: .45ACP', type: 'ARMA_FOGO', damage: '5', concealment: 'J', range: 25, rateOfFire: 3, clip: '7' },
  { name: 'Glock 22', description: 'Calibre: .40S&W', type: 'ARMA_FOGO', damage: '5', concealment: 'J', range: 25, rateOfFire: 3, clip: '15' },
  { name: 'SigSauer P220', description: 'Calibre: .45ACP', type: 'ARMA_FOGO', damage: '5', concealment: 'J', range: 30, rateOfFire: 3, clip: '7' },
  { name: 'Glock 20', description: 'Calibre: 10mm', type: 'ARMA_FOGO', damage: '3', concealment: 'J', range: 25, rateOfFire: 4, clip: '15' },
  { name: 'Heckler & Koch P7M10', description: 'Calibre: .40S&W', type: 'ARMA_FOGO', damage: '5', concealment: 'B', range: 20, rateOfFire: 3, clip: '10' },

  // ARMAS DE FOGO - BARRA PESADA
  { name: 'Magnum Desert Eagle', description: 'Calibre: .50AE', type: 'ARMA_FOGO', damage: '7', concealment: 'J', range: 30, rateOfFire: 1, clip: '7' },
  { name: 'Cassull', description: 'Calibre: .454', type: 'ARMA_FOGO', damage: '7', concealment: 'J', range: 40, rateOfFire: 1, clip: '6' },
  { name: 'Linebaugh', description: 'Calibre: .475', type: 'ARMA_FOGO', damage: '7', concealment: 'J', range: 40, rateOfFire: 1, clip: '6' },

  // ARMAS DE FOGO - SUBMETRALHADORAS LEVES E PISTOLAS AUTOMÁTICAS
  { name: 'Ingram MAC-10', description: 'Calibre: 9mm. Rajada de 3 tiros.', type: 'ARMA_FOGO', damage: '4', concealment: 'J', range: 25, rateOfFire: 18, clip: '30' },
  { name: 'Mini-Uzi', description: 'Calibre: 9mm. Rajada de 3 tiros.', type: 'ARMA_FOGO', damage: '4', concealment: 'S', range: 25, rateOfFire: 21, clip: '20/30' },
  { name: 'Heckler & Koch MP-5 (9mm)', description: 'Calibre: 9mm. Rajada de 3 tiros.', type: 'ARMA_FOGO', damage: '4', concealment: 'S', range: 40, rateOfFire: 21, clip: '30' },
  { name: 'Skorpion', description: 'Calibre: .32ACP', type: 'ARMA_FOGO', damage: '3', concealment: 'J', range: 20, rateOfFire: 15, clip: '15/20' },
  { name: 'TEC9', description: 'Calibre: 9mm', type: 'ARMA_FOGO', damage: '4', concealment: 'S', range: 25, rateOfFire: 18, clip: '20/32' },
  { name: 'Spectre', description: 'Calibre: 9mm. Rajada de 3 tiros.', type: 'ARMA_FOGO', damage: '4', concealment: 'S', range: 25, rateOfFire: 18, clip: '30/50' },
  { name: 'Calico 950', description: 'Calibre: 9mm. Rajada de 3 tiros.', type: 'ARMA_FOGO', damage: '4', concealment: 'S', range: 25, rateOfFire: 21, clip: '50/100' },
  { name: 'Uzi', description: 'Calibre: 9mm. Rajada de 3 tiros.', type: 'ARMA_FOGO', damage: '4', concealment: 'S', range: 50, rateOfFire: 21, clip: '25/32' },
  { name: 'Heckler & Koch MP-5 (10mm)', description: 'Calibre: 10mm. Rajada de 3 tiros.', type: 'ARMA_FOGO', damage: '5', concealment: 'S', range: 45, rateOfFire: 15, clip: '30' },
  { name: 'Glock 18', description: 'Calibre: 9mm. Rajada de 3 tiros.', type: 'ARMA_FOGO', damage: '4', concealment: 'J', range: 20, rateOfFire: 19, clip: '17/19' },

  // ARMAS DE FOGO - FUZIS E ASSALTO
  { name: 'Remington M700', description: 'Calibre: .30-06', type: 'ARMA_FOGO', damage: '8', concealment: 'N', range: 300, rateOfFire: 1, clip: '5' },
  { name: 'Ruger 10/22', description: 'Calibre: .22LR', type: 'ARMA_FOGO', damage: '4', concealment: 'N', range: 100, rateOfFire: 4, clip: '10/50' },
  { name: 'Browning BAR', description: 'Calibre: .30-06', type: 'ARMA_FOGO', damage: '8', concealment: 'N', range: 275, rateOfFire: 2, clip: '4' },
  { name: 'Steyr AUG', description: 'Calibre: .223. Rajada de 3 tiros.', type: 'ARMA_FOGO', damage: '7', concealment: 'S', range: 200, rateOfFire: 21, clip: '30/42' },
  { name: 'M16', description: 'Calibre: .223. Rajada de 3 tiros.', type: 'ARMA_FOGO', damage: '7', concealment: 'N', range: 200, rateOfFire: 20, clip: '20/30' },
  { name: 'AK-47', description: 'Calibre: 7.62mmX39mm', type: 'ARMA_FOGO', damage: '8', concealment: 'N', range: 250, rateOfFire: 10, clip: '30' },

  // ARMAS DE FOGO - ESCOPETAS
  { name: 'Remington 870', description: 'Calibre 12', type: 'ARMA_FOGO', damage: '8', concealment: 'S', range: 20, rateOfFire: 1, clip: '8' },
  { name: 'Mossberg M500', description: 'Calibre 12', type: 'ARMA_FOGO', damage: '8', concealment: 'N', range: 20, rateOfFire: 1, clip: '5' },
  { name: 'SPAS 12', description: 'Calibre 12. Automática', type: 'ARMA_FOGO', damage: '8', concealment: 'N', range: 20, rateOfFire: 3, clip: '8' },

  // ARCOS E BALESTRAS
  { name: 'Arco Pequeno', description: '15Kg de tração.', type: 'ARMA_ARREMESSO', damage: '2', concealment: 'N', range: 60, minimumStrength: 2 },
  { name: 'Arco Grande', description: '30Kg de tração.', type: 'ARMA_ARREMESSO', damage: '3', concealment: 'N', range: 90, minimumStrength: 3 },
  { name: 'Arco Composto', description: 'Reduz tração em 50%.', type: 'ARMA_ARREMESSO', damage: '3', concealment: 'N', range: 180, minimumStrength: 3 },
  { name: 'Balestra', description: 'Dardos ou setas.', type: 'ARMA_ARREMESSO', damage: '3', concealment: 'N', range: 100, minimumStrength: 4 },

  // ARMAS DE ARREMESSO
  { name: 'Dardos e Shuriken', description: 'Pequenas demais, podem ser envenenadas.', type: 'ARMA_ARREMESSO', damage: 'Força -1', concealment: 'B', minimumStrength: 1 },
  { name: 'Facas de Arremesso', description: 'Facas e machadinhas aerodinâmicas.', type: 'ARMA_ARREMESSO', damage: 'Força +1', concealment: 'B', minimumStrength: 1 },
  { name: 'Lança', description: 'Pode acertar o coração.', type: 'ARMA_ARREMESSO', damage: 'Força +2', concealment: 'N', minimumStrength: 2 },

  // ARMAS BRANCAS (MELEE)
  { name: 'Bastão / Porrete', description: 'Cassetetes, canos, pedaços de pau.', type: 'ARMA_BRANCA', damage: 'Força +1', concealment: 'S' },
  { name: 'Bastão de Beisebol', description: 'Madeira ou alumínio.', type: 'ARMA_BRANCA', damage: 'Força +2', concealment: 'N' },
  { name: 'Faca de Combate', description: 'Lâmina de 15 a 60cm.', type: 'ARMA_BRANCA', damage: 'Força +1', concealment: 'J' },
  { name: 'Florete e Espadim', description: 'Para estocar.', type: 'ARMA_BRANCA', damage: 'Força +2', concealment: 'S', minimumStrength: 1 },
  { name: 'Katana / Sabre', description: 'Lâmina curva e letal.', type: 'ARMA_BRANCA', damage: 'Força +2', concealment: 'S', minimumStrength: 2 },
  { name: 'Espada Larga e Longa', description: '90cm ou mais. Larga.', type: 'ARMA_BRANCA', damage: 'Força +3', concealment: 'S', minimumStrength: 2 },
  { name: 'Espada de Duas Mãos', description: 'Massiva. Requer duas mãos.', type: 'ARMA_BRANCA', damage: 'Força +5', concealment: 'N', minimumStrength: 4 },
  { name: 'Soco Inglês', description: 'Aumenta dano do soco.', type: 'ARMA_BRANCA', damage: 'Força +1', concealment: 'B', minimumStrength: 1 },

  // EXPLOSIVOS
  { name: 'Granada de Fragmentação', description: 'Dano de estilhaços e explosão.', type: 'EXPLOSIVO', damage: '12', concealment: 'B' },
  { name: 'Granada de Concussão', description: 'Teoricamente não-letal.', type: 'EXPLOSIVO', damage: '8', concealment: 'B' },
  { name: 'Granada de Fósforo Branco', description: 'Fogo químico. Dano Agravado que continua queimando.', type: 'EXPLOSIVO', damage: '12', concealment: 'B' },

  // ARMADURAS
  { name: 'Roupa Reforçada (Classe 1)', description: 'Roupas pesadas, couro grosso.', type: 'ARMADURA', armorLevel: 1, armorPenalty: 0 },
  { name: 'Camisa Armadura (Classe 2)', description: 'Kevlar por baixo da roupa.', type: 'ARMADURA', armorLevel: 2, armorPenalty: 1 },
  { name: 'Colete a Prova de Balas (Classe 3)', description: 'Colete tático padrão.', type: 'ARMADURA', armorLevel: 3, armorPenalty: 1 },
  { name: 'Equipamento de Choque (Classe 4)', description: 'Armadura da SWAT anti-motim.', type: 'ARMADURA', armorLevel: 4, armorPenalty: 2 },
  { name: 'Armadura Completa (Classe 5)', description: 'Proteção pesada militar/esquadrão antibomba.', type: 'ARMADURA', armorLevel: 5, armorPenalty: 3 },

  // OUTROS
  { name: 'Taser', description: 'Atordoadores de choque elétrico.', type: 'OUTROS', damage: '4', concealment: 'B', range: 10 },
].map(item => ({ ...item, gameStyle: 'TODOS' }));

async function seed() {
  try {
    console.log('Sincronizando tabela DefinitionEquipment...');
    await sequelize.sync({ alter: true });

    console.log(`Populando ${equipmentsData.length} Equipamentos...`);
    for (const eq of equipmentsData) {
      await DefinitionEquipment.findOrCreate({
        where: { name: eq.name },
        defaults: eq as any
      });
    }

    console.log(`✅ Seed de Equipamentos finalizado com sucesso no Hostinger!`);
    process.exit(0);
  } catch(e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

seed();
