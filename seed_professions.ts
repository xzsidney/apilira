import { sequelize, CreationPackage, CreationPackageItem, DefinitionAttribute, DefinitionSkill } from './src/models';
import { v4 as uuidv4 } from 'uuid';

const concepts = [
  // Físico
  { name: 'Lutador Clandestino de Boxe', desc: 'Sobrevive da violência em ringues ilegais na periferia de Nocturna.', attr: 'Força', skill: 'Briga' },
  { name: 'Dublê de Filmes de Ação', desc: 'Especialista em quedas, fugas acrobáticas e reflexos rápidos sob pressão.', attr: 'Destreza', skill: 'Esportes' },
  { name: 'Segurança de Balada / Leão de Chácara', desc: 'Acostumado a conter tumultos e absorver pancadas sem recuar.', attr: 'Vigor', skill: 'Intimidação' },
  { name: 'Soldado da ROTA / Tático de Choque', desc: 'Treinamento de invasão tática, combate armado e disciplina militar.', attr: 'Destreza', skill: 'Armas de Fogo' },
  { name: 'Entregador / Motoboy da Madrugada', desc: 'Corta o trânsito da cidade chuvosa em alta velocidade e conhece cada atalho.', attr: 'Destreza', skill: 'Condução' },
  { name: 'Mecânico de Desmanche Ilegal', desc: 'Força bruta no manuseio de maquinário pesado e ferramentas industriais.', attr: 'Força', skill: 'Ofícios' },
  { name: 'Assaltante / Especialista em Invasão', desc: 'Passos silenciosos para burlar sensores, escalar muros e arrombar trancas.', attr: 'Destreza', skill: 'Furtividade' },
  { name: 'Bombeiro de Resgate Urbano', desc: 'Resistência física extrema a ambientes hostis, fumaça e escombros.', attr: 'Vigor', skill: 'Esportes' },
  { name: 'Guarda-Costas Executivo', desc: 'Prontidão física para agir como escudo humano e desarmar agressores a curta distância.', attr: 'Vigor', skill: 'Armas Brancas' },
  { name: 'Instrutor de Parkour / Explorador Urbano', desc: 'Escala prédios abandonados e salta entre telhados da cidade sem equipamentos.', attr: 'Força', skill: 'Esportes' },

  // Social
  { name: 'Relações Públicas de Alta Sociedade', desc: 'Transita com facilidade em festas exclusivas, moldando a opinião da elite.', attr: 'Carisma', skill: 'Etiqueta' },
  { name: 'Advogado Criminalista de Porta de Cadeia', desc: 'Encontra brechas na lei e convence juízes e policiais com lábia afiada.', attr: 'Manipulação', skill: 'Direito' },
  { name: 'Líder de Culto / Pastor Neopentecostal', desc: 'Oratória magnética capaz de arrebatar multidões e inspirar devoção cega.', attr: 'Carisma', skill: 'Liderança' },
  { name: 'Diplomata / Mediador de Conflitos', desc: 'Mantém a compostura para ler intenções e negociar tréguas entre facções rivais.', attr: 'Autocontrole', skill: 'Empatia' },
  { name: 'Apresentador / Repórter de TV Sensacionalista', desc: 'Explora a histeria coletiva e distorce fatos para gerar comoção pública.', attr: 'Manipulação', skill: 'Lábia' },
  { name: 'Golpista de Luxo / Vigarista', desc: 'Assume falsas identidades e seduz alvos ricos para extrair segredos e patrimônio.', attr: 'Manipulação', skill: 'Lábia' },
  { name: 'Líder Sindical / Ativista Comunitário', desc: 'Organiza protestos, fecha vias públicas e mobiliza a massa trabalhadora.', attr: 'Carisma', skill: 'Liderança' },
  { name: 'Hostess / Promoter de Boate Gótica', desc: 'Filtra quem entra nos eventos VIPs e controla o fluxo de informações da noite.', attr: 'Autocontrole', skill: 'Manha' },
  { name: 'Agente de Atores / Influenciador Digital', desc: 'Vende estilos de vida nas redes sociais e dita tendências de comportamento.', attr: 'Carisma', skill: 'Lábia' },
  { name: 'Negociador de Reféns da Polícia', desc: 'Desarma mentes instáveis pelo tom de voz sob mira direta de armas.', attr: 'Autocontrole', skill: 'Empatia' },

  // Mental
  { name: 'Legista / Médico do IML', desc: 'Analisa cortes, calibres e anomalias biológicas que deveriam ser impossíveis.', attr: 'Inteligência', skill: 'Medicina' },
  { name: 'Hacker / Especialista em Cibersegurança', desc: 'Invade redes de vigilância governamentais e apaga pegadas digitais em segundos.', attr: 'Raciocínio', skill: 'Computador' },
  { name: 'Detetive Particular Obstinado', desc: 'Liga pistas negligenciadas pela polícia e segue rastros na madrugada.', attr: 'Raciocínio', skill: 'Investigação' },
  { name: 'Professor Universitário de Ocultismo', desc: 'Decifra grimórios antigos, símbolos herméticos e lendas urbanas locais.', attr: 'Inteligência', skill: 'Ocultismo' },
  { name: 'Analista de Riscos Financeiros (Faria Lima)', desc: 'Rastreia lavagem de dinheiro, holdings de fachada e rotas de capital obscuro.', attr: 'Inteligência', skill: 'Finanças' },
  { name: 'Jornalista Investigativo de Política', desc: 'Fareja escândalos nos bastidores do poder antes que eles estourem na imprensa.', attr: 'Raciocínio', skill: 'Prontidão' },
  { name: 'Estrategista / Assessor Político', desc: 'Calcula movimentos de bastidores da prefeitura e blinda seus aliados contra traições.', attr: 'Determinação', skill: 'Política' },
  { name: 'Químico / Farmacologista Clandestino', desc: 'Desenvolve substâncias sintéticas, sedativos e analisa compostos de sangue.', attr: 'Inteligência', skill: 'Ciências' },
  { name: 'Perito em Arquivística / Bibliotecário Raro', desc: 'Cruza mapas históricos e documentos coloniais para localizar nós e refúgios esquecidos.', attr: 'Determinação', skill: 'Acadêmicos' },
  { name: 'Operador de Câmeras de Vigilância (COI/Muralha)', desc: 'Monitora telas de segurança da metrópole caçando anomalias visuais em tempo real.', attr: 'Raciocínio', skill: 'Prontidão' }
];

async function run() {
  try {
    await sequelize.authenticate();
    
    // Fetch mappings
    const attrs = await DefinitionAttribute.findAll();
    const skills = await DefinitionSkill.findAll();
    
    const attrMap: Record<string, string> = {};
    attrs.forEach(a => attrMap[a.name] = a.id);
    const skillMap: Record<string, string> = {};
    skills.forEach(s => skillMap[s.name] = s.id);
    
    console.log("Seeding 30 Professions...");
    let count = 0;

    for (const concept of concepts) {
      // Create Package
      const pkg = await CreationPackage.create({
        id: uuidv4(),
        name: concept.name,
        description: concept.desc,
        packageType: 'PROFESSION'
      });
      
      const attrId = attrMap[concept.attr];
      const skillId = skillMap[concept.skill];
      
      if (!attrId) console.warn(`Attribute not found for: ${concept.attr}`);
      if (!skillId) console.warn(`Skill not found for: ${concept.skill}`);
      
      // Give +2 to Principal Attribute
      if (attrId) {
        await CreationPackageItem.create({
          id: uuidv4(),
          packageId: pkg.id,
          itemType: 'ATTRIBUTE',
          referenceId: attrId,
          amount: 2
        });
      }
      
      // Give +3 to Principal Skill
      if (skillId) {
        await CreationPackageItem.create({
          id: uuidv4(),
          packageId: pkg.id,
          itemType: 'SKILL',
          referenceId: skillId,
          amount: 3
        });
      }
      
      // Give +1 to a general skill like Prontidão or Briga for some variety (Optional)
      const secondarySkill = skillId === skillMap['Prontidão'] ? skillMap['Briga'] : skillMap['Prontidão'];
      await CreationPackageItem.create({
        id: uuidv4(),
        packageId: pkg.id,
        itemType: 'SKILL',
        referenceId: secondarySkill,
        amount: 1
      });
      
      count++;
    }
    
    console.log(`Seeded ${count} professions successfully!`);
    
  } catch(e) {
    console.error(e);
  } finally {
    process.exit(0);
  }
}

run();
