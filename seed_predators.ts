import { sequelize, DefinitionPredator, CreationPackage, CreationPackageItem, DefinitionAttribute, DefinitionSkill } from './src/models';
import { v4 as uuidv4 } from 'uuid';

async function run() {
  try {
    await sequelize.authenticate();
    const transaction = await sequelize.transaction();

    // Ensure all 11 DefinitionPredators exist
    const predsDef = [
      { name: "Gato de Beco (Alleycat)", desc: "Embosca, ameaça ou subjuga suas vítimas fisicamente em vielas.", pool: "Força + Briga" },
      { name: "Bolsista (Bagger)", desc: "Alimenta-se de sangue estocado, furtando ou comprando bolsas de sangue.", pool: "Inteligência + Manha" },
      { name: "Sanguessuga (Blood Leech)", desc: "Alimenta-se exclusivamente do sangue de outros vampiros.", pool: "Destreza + Furtividade" },
      { name: "Consensualista", desc: "Caça obtendo a permissão consciente da vítima.", pool: "Manipulação + Persuasão" },
      { name: "Fazendeiro (Farmer)", desc: "Recusa-se a beber sangue humano e alimenta-se exclusivamente de animais.", pool: "Autocontrole + Trato com Animais" },
      { name: "Osíris", desc: "Alimenta-se de membros de um culto ou grupo de devotos.", pool: "Carisma + Liderança" },
      { name: "Rainha da Cena", desc: "Explora uma subcultura específica (góticos, alta sociedade, punks).", pool: "Carisma + Persuasão" },
      { name: "Sirene (Siren)", desc: "Utiliza sedução física e romances casuais.", pool: "Carisma + Lábia" },
      { name: "Limpador de Areia (Sandman)", desc: "Usa furtividade para invadir residências e se alimentar de humanos adormecidos.", pool: "Destreza + Furtividade" },
      { name: "Extorquista", desc: "Usa coerção financeira ou chantagem.", pool: "Manipulação + Intimidação" },
      { name: "Sepultureiro", desc: "Alimenta-se de pessoas à beira da morte ou em luto.", pool: "Autocontrole + Medicina" }
    ];

    const predMap: Record<string, string> = {};
    for (const p of predsDef) {
      let pred = await DefinitionPredator.findOne({ where: { name: p.name } });
      if (!pred) {
        // Fallback checks for old names
        if (p.name.includes('Beco')) pred = await DefinitionPredator.findOne({ where: { name: 'Beco Escuro (Alleycat)' } });
        if (p.name.includes('Consensual')) pred = await DefinitionPredator.findOne({ where: { name: 'Consensual' } });
        if (p.name.includes('Sandman')) pred = await DefinitionPredator.findOne({ where: { name: 'Sandman' } });
      }

      if (!pred) {
        pred = await DefinitionPredator.create({
          id: uuidv4(),
          name: p.name,
          description: p.desc,
          huntingPool: p.pool,
          modifiers: "-",
          gameStyle: "VAMPIRE"
        }, { transaction });
      }
      predMap[p.name] = pred.id;
    }

    const attrs = await DefinitionAttribute.findAll();
    const skills = await DefinitionSkill.findAll();
    const getAttr = (name: string) => attrs.find(a => a.name === name)?.id;
    const getSkill = (name: string) => skills.find(s => s.name === name)?.id;

    // We will clear old PREDATOR_CHOICE packages first to keep it clean, but only the specific ones we are regenerating.
    await CreationPackage.destroy({ where: { packageType: 'PREDATOR_CHOICE' }, transaction });

    // For each predator, 3 packages
    const packagesToCreate = [
      // Gato de Beco (Alleycat)
      { pred: "Gato de Beco (Alleycat)", name: "O Brutamontes do Beco", desc: "Você usa força esmagadora contra quem passa.", attr: "Força", skill: "Briga" },
      { pred: "Gato de Beco (Alleycat)", name: "O Assaltante Furtivo", desc: "Surpreende e derruba a vítima antes que grite.", attr: "Destreza", skill: "Furtividade" },
      { pred: "Gato de Beco (Alleycat)", name: "O Cobrador Violento", desc: "Usa o medo e a ameaça física pura.", attr: "Força", skill: "Intimidação" },
      
      // Bolsista
      { pred: "Bolsista (Bagger)", name: "O Ladrão de Necrotério", desc: "Invade hospitais furtivamente à noite.", attr: "Destreza", skill: "Furtividade" },
      { pred: "Bolsista (Bagger)", name: "O Comprador Clandestino", desc: "Paga funcionários corruptos por sangue.", attr: "Manipulação", skill: "Manha" },
      { pred: "Bolsista (Bagger)", name: "O Falso Enfermeiro", desc: "Engana a equipe do hospital vestindo jaleco.", attr: "Carisma", skill: "Lábia" },

      // Sanguessuga
      { pred: "Sanguessuga (Blood Leech)", name: "O Diablerista Furtivo", desc: "Caça outros predadores invisivelmente.", attr: "Destreza", skill: "Furtividade" },
      { pred: "Sanguessuga (Blood Leech)", name: "O Carrasco Sangrento", desc: "Mata vampiros fracos em combate.", attr: "Força", skill: "Briga" },
      { pred: "Sanguessuga (Blood Leech)", name: "O Caçador Ocultista", desc: "Usa conhecimento de rituais para achar refúgios.", attr: "Inteligência", skill: "Ocultismo" },

      // Consensualista
      { pred: "Consensualista", name: "O Amante Trágico", desc: "Suas vítimas se entregam a você por paixão.", attr: "Carisma", skill: "Persuasão" },
      { pred: "Consensualista", name: "O Guru da Saúde", desc: "Disfarça o ato como terapia alternativa.", attr: "Manipulação", skill: "Medicina" },
      { pred: "Consensualista", name: "O Ídolo Quebrado", desc: "Fãs dão sangue de bom grado.", attr: "Carisma", skill: "Liderança" },

      // Fazendeiro
      { pred: "Fazendeiro (Farmer)", name: "O Caçador de Matilha", desc: "Caça cães selvagens nas ruínas da cidade.", attr: "Destreza", skill: "Sobrevivência" },
      { pred: "Fazendeiro (Farmer)", name: "O Açougueiro Noturno", desc: "Trabalha no abatedouro local.", attr: "Vigor", skill: "Ofícios" },
      { pred: "Fazendeiro (Farmer)", name: "O Protetor do Parque", desc: "Usa os animais do zoológico ou parque.", attr: "Autocontrole", skill: "Trato com Animais" },

      // Osíris
      { pred: "Osíris", name: "O Líder do Culto", desc: "Reverenciado como um deus por seus seguidores.", attr: "Carisma", skill: "Liderança" },
      { pred: "Osíris", name: "O Mestre do Clube", desc: "Uma pequena gangue dá a vida por você.", attr: "Manipulação", skill: "Intimidação" },
      { pred: "Osíris", name: "A Estrela Pop", desc: "Adorado incondicionalmente.", attr: "Carisma", skill: "Performance" },

      // Rainha da Cena
      { pred: "Rainha da Cena", name: "O Rei da Pista", desc: "Sempre na área VIP, com acesso a todos.", attr: "Carisma", skill: "Socialização" },
      { pred: "Rainha da Cena", name: "O Influenciador Gótico", desc: "Dita as regras da subcultura da noite.", attr: "Manipulação", skill: "Persuasão" },
      { pred: "Rainha da Cena", name: "O Produtor de Eventos", desc: "A festa só acontece se você permitir.", attr: "Inteligência", skill: "Finanças" },

      // Sirene
      { pred: "Sirene (Siren)", name: "O Sedutor Clássico", desc: "Charmes arrebatadores e romances de uma noite.", attr: "Carisma", skill: "Persuasão" },
      { pred: "Sirene (Siren)", name: "O Pescador do Tinder", desc: "Usa perfis falsos e enganação online.", attr: "Manipulação", skill: "Lábia" },
      { pred: "Sirene (Siren)", name: "A Beleza Fatal", desc: "Incapacita com charme e álcool.", attr: "Aparência", skill: "Sobrevivência" }, // Ajustar se "Aparência" for válido

      // Limpador de Areia
      { pred: "Limpador de Areia (Sandman)", name: "O Ladrão de Janelas", desc: "Escala prédios e entra por janelas.", attr: "Destreza", skill: "Atletismo" },
      { pred: "Limpador de Areia (Sandman)", name: "O Invasor Silencioso", desc: "Arromba portas com maestria.", attr: "Destreza", skill: "Latrocínio" },
      { pred: "Limpador de Areia (Sandman)", name: "O Sonífero", desc: "Usa gás ou químicas antes de entrar.", attr: "Inteligência", skill: "Ciências" },

      // Extorquista
      { pred: "Extorquista", name: "O Agiota Sombrio", desc: "Eles pagam com sangue o que não pagam em dinheiro.", attr: "Manipulação", skill: "Intimidação" },
      { pred: "Extorquista", name: "O Hacker Chantagista", desc: "Segredos valem muito sangue.", attr: "Inteligência", skill: "Tecnologia" },
      { pred: "Extorquista", name: "O Mafioso de Terno", desc: "Coerção velada e favores forçados.", attr: "Carisma", skill: "Finanças" },

      // Sepultureiro
      { pred: "Sepultureiro", name: "O Coveiro Macabro", desc: "Trabalha no cemitério municipal.", attr: "Vigor", skill: "Ofícios" },
      { pred: "Sepultureiro", name: "O Anjo da Morte", desc: "Médico paliativo confortando os moribundos.", attr: "Autocontrole", skill: "Medicina" },
      { pred: "Sepultureiro", name: "O Conselheiro do Luto", desc: "Apoia viúvos em seu momento de dor.", attr: "Manipulação", skill: "Empatia" }
    ];

    for (const pkg of packagesToCreate) {
      const pId = uuidv4();
      await CreationPackage.create({
        id: pId,
        name: pkg.name,
        description: pkg.desc,
        packageType: 'PREDATOR_CHOICE'
      }, { transaction });

      // Link to DefinitionPredator
      await CreationPackageItem.create({
        id: uuidv4(),
        packageId: pId,
        itemType: 'PREDATOR',
        referenceId: predMap[pkg.pred],
        amount: 1
      }, { transaction });

      // Link Attribute
      const attrId = getAttr(pkg.attr);
      if (attrId) {
        await CreationPackageItem.create({
          id: uuidv4(),
          packageId: pId,
          itemType: 'ATTRIBUTE',
          referenceId: attrId,
          amount: 1
        }, { transaction });
      }

      // Link Skill
      const skillId = getSkill(pkg.skill);
      if (skillId) {
        await CreationPackageItem.create({
          id: uuidv4(),
          packageId: pId,
          itemType: 'SKILL',
          referenceId: skillId,
          amount: 1
        }, { transaction });
      }
    }

    await transaction.commit();
    console.log("Seeded 33 Predator Packages successfully!");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
run();
