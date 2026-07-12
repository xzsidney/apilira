import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

import { initDefinitionBackground, DefinitionBackground } from '../src/models/DefinitionBackground';
initDefinitionBackground(sequelize);

const backgroundsData = [
  { 
    name: 'Aliados', 
    description: 'Aliados são humanos que ajudam você, talvez familiares, amigos mortais ou membros de alguma organização. Ao contrário de Lacaios, Aliados não são controlados diretamente por você (nem por laço de sangue e nem por dominação), eles o ajudam por lealdade ou amizade. Eles costumam ser pessoas comuns, mas podem ter habilidades úteis.\n\nNíveis:\n● Um aliado, de poder e influência moderados\n●● Dois aliados, ambos de poder moderado\n●●● Três aliados, pelo menos um deles bem posicionado\n●●●● Quatro aliados, um deles muito influente\n●●●●● Cinco aliados, um deles extremamente influente', 
    gameStyle: 'TODOS' 
  },
  { 
    name: 'Contatos', 
    description: 'Você conhece pessoas em diversos lugares. Contatos fornecem informações, espalham boatos, ou intermediam negociações. Ao contrário de Aliados, os contatos geralmente não arriscarão suas vidas por você e esperam ser pagos (com dinheiro ou favores) pelos seus serviços.\n\nNíveis:\n● Um contato principal.\n●● Dois contatos principais.\n●●● Três contatos principais.\n●●●● Quatro contatos principais.\n●●●●● Cinco contatos principais.', 
    gameStyle: 'TODOS' 
  },
  { 
    name: 'Fama', 
    description: 'Você é reconhecido na sociedade mortal. Talvez você seja uma estrela do rock, um ator famoso, um político proeminente ou um atleta. A Fama lhe traz privilégios na sociedade mortal, mas torna muito difícil se mover anonimamente ou esconder atividades ilícitas.\n\nNíveis:\n● Reconhecido por um grupo local seleto (Cena underground de uma cidade).\n●● Reconhecimento regional (Todos no estado conhecem o seu nome).\n●●● Fama nacional (As pessoas te param na rua para pedir autógrafos).\n●●●● Fama continental (Sua foto estampa capas de revista de circulação massiva).\n●●●●● Fama internacional (Todo o mundo reconhece seu rosto).', 
    gameStyle: 'TODOS' 
  },
  { 
    name: 'Influência', 
    description: 'O seu alcance no mundo mortal e governamental. Representa a sua capacidade de alterar o curso da política, polícia ou burocracia local. Com isso, você consegue apagar registros, conseguir mandados falsos ou parar construções.\n\nNíveis:\n● Influência moderada (consegue um favor ocasional da prefeitura).\n●● Bem-conectado (conhece vereadores, delegados, etc).\n●●● Posição de destaque (uma força política real na cidade).\n●●●● Grande poder (capaz de afetar as leis do estado).\n●●●●● Vasto e intangível poder (governadores tremem diante de você).', 
    gameStyle: 'TODOS' 
  },
  { 
    name: 'Mentor', 
    description: 'Um ancião, mestre ou figura de autoridade tutela você. O Mentor aconselha, ensina habilidades ou disciplinas raras e protege você contra inimigos poderosos (até certo ponto). Claro, um Mentor sempre vai cobrar em troca os serviços que lhe prestar.\n\nNíveis:\n● O Mentor é um membro jovem, com pouca influência mas muita boa vontade.\n●● O Mentor é um membro experiente e respeitado.\n●●● O Mentor é poderoso dentro de sua facção (ex: Primogênito).\n●●●● O Mentor tem influência regional e vasto poder.\n●●●●● O Mentor é uma figura de poder monumental (ex: Príncipe ou Justicar).', 
    gameStyle: 'TODOS' 
  },
  { 
    name: 'Recursos', 
    description: 'Sua riqueza financeira e posses materiais, seja em dinheiro vivo, investimentos, propriedades ou bens difíceis de rastrear. Este antecedente determina a sua renda mensal regular.\n\nNíveis:\n● Suficiente (Um apartamento pequeno, um carro popular, vive de salário em salário).\n●● Classe Média (Um apartamento ou casa própria, dinheiro sobrando para pequenos luxos).\n●●● Grande riqueza (Dono de várias propriedades, não precisa trabalhar para viver).\n●●●● Riqueza corporativa (Milionário. Dono de grandes empresas ou fundos de investimento).\n●●●●● Riqueza monumental (Multimilionário. Jatos particulares, mansões gigantes, pode comprar o que quiser).', 
    gameStyle: 'TODOS' 
  },
  { 
    name: 'Lacaios', 
    description: 'Servos, guarda-costas ou assistentes fiéis a você. Diferente dos Aliados, Lacaios são submissos a você seja através de grana, chantagem, intimidação ou, no caso dos vampiros, do perverso Laço de Sangue (Carniçais). Um Lacaio pode ser um motorista que dirige de dia ou um mercenário contratado.\n\nNíveis:\n● Um Lacaio.\n●● Dois Lacaios.\n●●● Três Lacaios.\n●●●● Quatro Lacaios.\n●●●●● Cinco Lacaios.', 
    gameStyle: 'TODOS' 
  },
  { 
    name: 'Status', 
    description: 'A sua reputação na sociedade e entre seus pares (A Camarilla no caso de Vampiro, A Nação Garou no caso de Lobisomem). Status reflete o respeito e o poder social que você detém dentro do seu secto.\n\nNíveis:\n● Conhecido: Você é reconhecido no cenário local e seu nome tem um peso pequeno.\n●● Respeitado: Os outros confiam na sua palavra.\n●●● Influente: Uma figura importante na cidade, as pessoas vêm até você por conselhos.\n●●●● Poderoso: Entre a elite. Suas opiniões moldam a política do seu secto local.\n●●●●● Reverenciado: Seu status é lendário. Um dos pilares do seu grupo.', 
    gameStyle: 'TODOS' 
  },
  { 
    name: 'Geração', 
    description: 'Exclusivo para Vampiros. Determina a distância entre o seu vampiro e Caim, o Primeiro Vampiro. Quanto menor a sua geração, maior o seu limite de sangue, sua capacidade de gastar sangue por turno e o máximo absoluto das suas Disciplinas. Todo jogador de Vampiro começa na 13ª Geração gratuitamente.\n\nNíveis:\n● 12ª Geração (Reserva de 11, pode gastar 1 por turno)\n●● 11ª Geração (Reserva de 12, pode gastar 1 por turno)\n●●● 10ª Geração (Reserva de 13, pode gastar 1 por turno)\n●●●● 9ª Geração (Reserva de 14, pode gastar 2 por turno)\n●●●●● 8ª Geração (Reserva de 15, pode gastar 3 por turno)', 
    gameStyle: 'VAMPIRE' 
  },
  { 
    name: 'Rebanho', 
    description: 'Exclusivo para Vampiros. Representa um grupo de mortais dos quais o seu vampiro pode se alimentar com facilidade, segurança e sem causar problemas à Máscara. Pode ser uma seita que te adora, frequentadores do seu clube noturno, ou moradores de rua que não dão falta.\n\nNíveis:\n● 3 recipientes regulares.\n●● 7 recipientes regulares.\n●●● 15 recipientes regulares.\n●●●● 30 recipientes regulares.\n●●●●● 60 recipientes regulares.', 
    gameStyle: 'VAMPIRE' 
  },
  { 
    name: 'Identidade Alternativa', 
    description: 'Exclusivo para Vampiros que precisam fugir de seus passados na sociedade mortal. Você conseguiu criar ou comprar uma identidade "limpa" tão detalhada que pode passar por checagens do governo ou do FBI. Inclui CNH falsa, Passaporte falso, SSN, contas bancárias e histórico escolar.\n\nNíveis:\n● Documentos rasos; enganam a polícia de rua, não o sistema federal.\n●● Documentos bem forjados, mas sem histórico profundo.\n●●● Uma nova identidade convincente, capaz de aguentar escrutínio de rotina.\n●●●● Uma identidade sólida e respeitável.\n●●●●● Uma identidade de alto escalão militar ou governamental, totalmente protegida com registros imaculados.', 
    gameStyle: 'VAMPIRE' 
  }
];

async function seed() {
  try {
    console.log('Sincronizando tabela DefinitionBackground...');
    await sequelize.sync({ alter: true });

    console.log(`Populando ${backgroundsData.length} Antecedentes...`);
    for (const bg of backgroundsData) {
      await DefinitionBackground.findOrCreate({
        where: { name: bg.name },
        defaults: bg as any
      });
    }

    console.log(`✅ Seed de Antecedentes finalizado com sucesso no Hostinger!`);
    process.exit(0);
  } catch(e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

seed();
