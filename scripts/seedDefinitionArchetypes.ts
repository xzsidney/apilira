import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

import { initDefinitionArchetype, DefinitionArchetype } from '../src/models/DefinitionArchetype';
initDefinitionArchetype(sequelize);

const archetypesData = [
  { name: 'Arquiteto', description: 'O Arquiteto tem um senso de propósito ainda maior do que ele mesmo. Ele só é verdadeiramente feliz ao criar algo de valor permanente para os outros.\\nRecupere 1 PdV sempre que estabelecer algo de importância ou de valor duradouro.', gameStyle: 'TODOS' },
  { name: 'Autocrata', description: 'O Autocrata quer ser o chefe. Ele busca proeminência para si mesmo, almejando poder e controle sobre grupos.\\nRecupere 1 PdV quando assumir o controle sobre um grupo ou organização que envolva outras pessoas.', gameStyle: 'TODOS' },
  { name: 'Bon Vivant', description: 'O Bon Vivant decide aproveitar seu tempo na Terra, estando simplesmente predisposto a se divertir e entregando-se facilmente aos excessos.\\nRecupere 1 PdV sempre que você realmente se divertir e conseguir expressar toda a sua exultação.', gameStyle: 'TODOS' },
  { name: 'Caçador de Emoções', description: 'O Caçador de Emoções vive pela excitação trazida pelo perigo, buscando ativamente por situações arriscadas.\\nRecupere 1 PdV toda vez que você realizar uma tarefa perigosa a qual você se entregou deliberadamente.', gameStyle: 'TODOS' },
  { name: 'Celebrante', description: 'O Celebrante encontra alegria em sua causa. Seja sua paixão a batalha, fervor religioso ou um bom livro, isso lhe dá força.\\nRecupere 1 PdV sempre que você buscar sua causa ou converter um personagem à sua paixão.', gameStyle: 'TODOS' },
  { name: 'Competidor', description: 'O Competidor sente grande excitação em sua busca pela vitória. Para ele, toda tarefa é um novo desafio encontrado e uma nova competição a vencer.\\nRecupere 1 PdV sempre que você obtiver sucesso em um teste ou desafio difícil.', gameStyle: 'TODOS' },
  { name: 'Conformista', description: 'O Conformista é o seguidor, submetendo-se à liderança de outros e encontrando segurança nas decisões alheias.\\nRecupere 1 PdV sempre que o grupo conquistar um objetivo devido ao seu apoio.', gameStyle: 'TODOS' },
  { name: 'Criança', description: 'A Criança continua imatura em personalidade e temperamento. Ela prefere ter alguém para cuidar dos seus desejos.\\nRecupere 1 PdV sempre que você convencer alguém a cuidar de você ou a ajudá-lo sem receber nada em troca.', gameStyle: 'TODOS' },
  { name: 'Diretor', description: 'Para o Diretor, nada é pior do que a desordem e o caos. O Diretor busca ser o chefe, adotando a atitude "à minha maneira ou de nenhuma maneira".\\nRecupere 1 PdV quando você influenciar um grupo na conclusão de uma tarefa.', gameStyle: 'TODOS' },
  { name: 'Esperto', description: 'O Esperto sempre tenta encontrar a maneira mais fácil, o caminho mais rápido para o sucesso e riqueza, fazendo os outros trabalharem por ele.\\nRecupere 1 PdV sempre que você induzir uma pessoa a fazer aquilo que você quer.', gameStyle: 'TODOS' },
  { name: 'Excêntrico', description: 'O Excêntrico é um banido da sociedade devido aos seus hábitos peculiares, freqüentemente rejeitando a moralidade tradicional.\\nRecupere 1 PdV toda vez que você for capaz de desconsiderar morais sociais sem sofrer retaliação.', gameStyle: 'TODOS' },
  { name: 'Fanático', description: 'O Fanático tem um propósito e esse propósito consome sua existência. Para o Fanático, o fim justifica os meios.\\nRecupere 1 PdV sempre que você realizar alguma tarefa diretamente relacionada com a causa.', gameStyle: 'TODOS' },
  { name: 'Filantropo', description: 'O Filantropo sente conforto em consolar os outros, nutrir e proteger.\\nRecupere 1 PdV sempre que nutrir ou proteger alguma pessoa.', gameStyle: 'TODOS' },
  { name: 'Galante', description: 'Os Galantes são almas extravagantes, sempre em busca de atenção e da chance de serem a estrela mais brilhante.\\nRecupere 1 PdV sempre que você impressionar com sucesso uma outra pessoa.', gameStyle: 'TODOS' },
  { name: 'Gozador', description: 'O Gozador acha tudo ridículo. Ele não agüenta a tristeza e a dor e por isso se esforça para aliviar o espírito daqueles que o cercam.\\nRecupere 1 PdV toda vez que você conseguir levantar o espírito dos outros.', gameStyle: 'TODOS' },
  { name: 'Juiz', description: 'O Juiz procura sempre melhorar o sistema. Um Juiz sente prazer em sua natureza e habilidade racional de tomar a decisão certa, de acordo com os fatos.\\nRecupere 1 PdV sempre que deduzir corretamente um mistério ou mediar um conflito com sucesso.', gameStyle: 'TODOS' },
  { name: 'Malandro', description: 'O Malandro se nega a sucumbir aos caprichos das outras pessoas. Ele sempre tem em mente o que é melhor para si mesmo.\\nRecupere 1 PdV sempre que sua disposição egoísta o levar a obter lucros, bens materiais e similares.', gameStyle: 'TODOS' },
  { name: 'Mártir', description: 'O Mártir sofre por sua causa, superando suas provas com a crença de que o seu desconforto irá desenvolver as outras pessoas.\\nRecupere 1 PdV ao sacrificar a si mesmo ou ao seu conforto por seus ideais.', gameStyle: 'TODOS' },
  { name: 'Masoquista', description: 'O Masoquista existe para testar os seus limites, obtendo satisfação na humilhação, sofrimento e dor física.\\nRecupere 1 PdV sempre que você experimentar a dor de uma maneira inédita.', gameStyle: 'TODOS' },
  { name: 'Monstro', description: 'O Monstro sabe que é uma criatura das trevas e age de acordo. O mal e o sofrimento são as suas armas.\\nRecupere 1 PdV toda vez que se entregar à sua atrocidade específica.', gameStyle: 'TODOS' },
  { name: 'Pedagogo', description: 'O Pedagogo sabe de tudo e deseja desesperadamente ensinar aos outros.\\nRecupere 1 PdV sempre que você vir ou ouvir falar de alguém que tenha se beneficiado da sabedoria compartilhada por você.', gameStyle: 'TODOS' },
  { name: 'Penitente', description: 'O Penitente existe apenas para se redimir do grave pecado de ser quem ele é, buscando livrar o mundo da dor que ele traz a ele.\\nRecupere 1 PdV sempre que sentir que alcançou a absolvição por uma injustiça.', gameStyle: 'TODOS' },
  { name: 'Perfeccionista', description: 'O Perfeccionista simplesmente exige o melhor, de si mesmo e dos outros.\\nRecupere 1 PdV sempre que realizar seu objetivo sem demonstração de defeito ou impedimento.', gameStyle: 'TODOS' },
  { name: 'Ranzinza', description: 'O Ranzinza é amargo e cínico, encontrando poucos prazeres na vida. Para ele o copo está sempre vazio.\\nRecupere 1 PdV sempre que alguém fizer algo estúpido, exatamente como você disse que faria.', gameStyle: 'TODOS' },
  { name: 'Rebelde', description: 'O Rebelde é um descontente que nunca está satisfeito com o sistema, odiando autoridades e as desafiando.\\nRecupere 1 PdV sempre que suas ações influenciarem adversamente a sua oposição.', gameStyle: 'TODOS' },
  { name: 'Sobrevivente', description: 'Não importa os obstáculos, o Sobrevivente sempre consegue superá-los, recusando a derrota.\\nRecupere 1 PdV sempre que você sobrevive a uma situação ameaçadora através da tenacidade.', gameStyle: 'TODOS' },
  { name: 'Solitário', description: 'O Solitário se isola e prefere a sua própria companhia, desdenhando a presença de terceiros.\\nRecupere 1 PdV ao realizar sozinho uma tarefa que de alguma forma também beneficie o grupo.', gameStyle: 'TODOS' },
  { name: 'Tradicionalista', description: 'Os Caminhos ortodoxos satisfazem o Tradicionalista, que prefere métodos comprovados e odeia mudanças imprevisíveis.\\nRecupere 1 PdV toda vez que os métodos comprovados se provarem os melhores.', gameStyle: 'TODOS' },
  { name: 'Valentão', description: 'O Valentão sente prazer em perturbar os mais fracos. Na mente dele, o poder é tudo o que importa.\\nRecupere 1 PdV toda vez que você alcançar um objetivo através da brutalidade e intimidação.', gameStyle: 'TODOS' },
  { name: 'Visionário', description: 'O Visionário é forte o suficiente para olhar através do mundano e perceber o que poderia ser melhorado no mundo.\\nRecupere 1 PdV toda vez que convencer os outros a acreditarem e seguirem seus sonhos.', gameStyle: 'TODOS' },
  { name: 'Capitalista', description: 'Você percebeu que sempre existe um mercado a ser desenvolvido. Você tem uma compreensão apurada de como vender bens, favores e influência.\\nRecupere 1 PdV sempre que realizar uma "venda" ou escambo proveitoso.', gameStyle: 'TODOS' },
  { name: 'Camaleão', description: 'Independente e adaptável, você é capaz de se passar por outra pessoa perfeitamente se necessário.\\nRecupere 1 PdV toda vez que fizer alguém pensar que é outra pessoa.', gameStyle: 'TODOS' },
  { name: 'Show de Horrores', description: 'Você se esforça para chocar e causar desgosto usando violência gratuita e maneirismos ameaçadores como forma de controle.\\nRecupere 1 PdV sempre que alguém fugir apavorado ou reagir com extremo medo à sua presença.', gameStyle: 'TODOS' },
  { name: 'Enigma', description: 'Suas ações são bizarras, intrigantes e inexplicáveis, deixando os outros perplexos ou achando que você é louco.\\nRecupere 1 PdV toda vez que alguém ficar totalmente perplexo por uma ação sua que depois se mostre frutífera.', gameStyle: 'TODOS' },
  { name: 'Olho da Tempestade', description: 'Apesar de sua aparência calma, caos e destruição parecem segui-lo. A incerteza está presente em cada esquina.\\nRecupere 1 PdV toda vez que um tumulto, distúrbio ou fenômeno violento acontecer perto de você.', gameStyle: 'TODOS' },
  { name: 'Guru', description: 'O seu grau de consciência atrai as pessoas, motivando-as em seus objetivos espirituais ou ideológicos.\\nRecupere 1 PdV toda vez que alguém lhe pedir ajuda e sua orientação levar esse indivíduo a uma ação iluminada.', gameStyle: 'TODOS' },
  { name: 'Sádico', description: 'Você existe para infligir dor e sofrimento às outras pessoas. A tortura lhe dá um imenso prazer.\\nRecupere 1 PdV toda vez que infligir dor em alguém sem nenhuma razão além do próprio prazer.', gameStyle: 'TODOS' },
  { name: 'Sociopata', description: 'Você acredita que seres inferiores devem ser exterminados e que matar é realizar uma proeza gloriosa da evolução darwiniana.\\nRecupere 1 PdV toda vez que for o responsável principal em uma contagem de corpos (matança).', gameStyle: 'TODOS' },
  { name: 'Idealista', description: 'Acredita louca e profundamente em algum propósito superior ou código moral, frequentemente agindo em desacordo com suas vontades pragmáticas para seguir o ideal.\\nRecupere 1 PdV sempre que uma atitude promova e aproxime a realização do seu ideal.', gameStyle: 'TODOS' },
  { name: 'Soldado', description: 'Não sofre de nenhuma compulsão para fazer o que tem de ser feito, contanto que as ordens venham da hierarquia de comando certa.\\nRecupere 1 PdV quando alcançar os objetivos estipulados pela liderança.', gameStyle: 'TODOS' },
  { name: 'Diletante', description: 'Se interessa por tudo mas não se concentra em nada. Flutua em paixões e projetos sem nunca terminar nada.\\nRecupere 1 PdV sempre que encontrar um novo entusiasmo e largar completamente o anterior.', gameStyle: 'TODOS' },
  { name: 'Cientista', description: 'A existência é um quebra-cabeças. Examina lógica e metodicamente todas as situações em busca de resultados e padrões.\\nRecupere 1 PdV sempre que uma abordagem lógica e sistemática ajudar a solucionar um problema.', gameStyle: 'TODOS' },
];

async function seed() {
  try {
    console.log('Sincronizando tabela DefinitionArchetype...');
    await sequelize.sync({ alter: true });

    console.log('Populando Arquétipos...');
    for (const archetype of archetypesData) {
      await DefinitionArchetype.findOrCreate({
        where: { name: archetype.name },
        defaults: archetype as any
      });
    }

    console.log(`✅ Seed de ${archetypesData.length} Arquétipos finalizado com sucesso no Hostinger!`);
    process.exit(0);
  } catch(e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

seed();
