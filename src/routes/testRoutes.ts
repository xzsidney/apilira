import { Router, Request, Response } from 'express'
import { 
  Character,
  VampireClaDefinition,
  VampirePredatorDefinition,
  WerewolfTribeDefinition,
  MageTraditionDefinition,
  HunterCreedDefinition,
  CharacterAttribute, 
  CharacterSkill, 
  CharacterStatus, 
  CharacterPower, 
  CharacterPowerSelection, 
  CharacterMeritFlaw, 
  CharacterItem,
  CharacterBackground,
  CharacterHaven
} from "../models";

const router = Router()

// Rota de teste livre (sem autenticação) para visualização rápida no navegador
router.get('/characters', async (req: Request, res: Response) => {
  try {
    const characters = await Character.findAll({
      include: [
        { model: VampireClaDefinition, as: 'vampireCla' },
        { model: VampirePredatorDefinition, as: 'vampirePredator' },
        { model: WerewolfTribeDefinition, as: 'werewolfTribe' },
        { model: MageTraditionDefinition, as: 'mageTradition' },
        { model: HunterCreedDefinition, as: 'hunterCreed' },
        { model: CharacterAttribute, as: 'attributes', include: ['attributeDefinition'] },
        { model: CharacterSkill, as: 'skills', include: ['skillDefinition'] },
        { model: CharacterStatus, as: 'statuses', include: ['statusDefinition'] },
        { model: CharacterPower, as: 'powers', include: [
            'powerDefinition',
            { model: CharacterPowerSelection, as: 'selections', include: ['powerLevelDefinition'] }
          ]
        },
        { model: CharacterMeritFlaw, as: 'meritsFlaws', include: ['meritFlawDefinition'] },
        { model: CharacterItem, as: 'items', include: ['itemDefinition'] },
        { model: CharacterBackground, as: 'backgrounds', include: ['backgroundDefinition'] },
        { model: CharacterHaven, as: 'havens', include: ['havenDefinition'] }
      ],
      order: [['createdAt', 'DESC']]
    })
    
    // Retorna os dados crus em JSON para fácil leitura no browser ou Postman
    res.json(characters)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar personagens de teste' })
  }
})

// Rota de visualização HTML super simples para clicar e ver os dados em JSON estruturado
router.get('/viewer', (req: Request, res: Response) => {
  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Validador de Personagens</title>
      <style>
        body { font-family: sans-serif; display: flex; height: 100vh; margin: 0; }
        #sidebar { width: 300px; border-right: 1px solid #ccc; overflow-y: auto; padding: 10px; background: #f9f9f9; }
        #content { flex: 1; padding: 20px; overflow-y: auto; background: #fff; }
        ul { list-style: none; padding: 0; }
        li { padding: 10px; border-bottom: 1px solid #ddd; cursor: pointer; }
        li:hover { background: #eee; }
        pre { background: #222; color: #0f0; padding: 15px; border-radius: 5px; overflow-x: auto; font-size: 14px; }
      </style>
    </head>
    <body>
      <div id="sidebar">
        <h3>Personagens</h3>
        <ul id="char-list">Carregando...</ul>
      </div>
      <div id="content">
        <h3>Dados do Personagem</h3>
        <p>Clique em um personagem na lista ao lado para ver os dados exatos (JSON) que estão salvos no banco.</p>
        <div id="json-view"></div>
      </div>

      <script>
        let allChars = [];
        
        fetch('/api/test/characters')
          .then(res => res.json())
          .then(data => {
            allChars = data;
            const list = document.getElementById('char-list');
            list.innerHTML = '';
            data.forEach((c, index) => {
              const li = document.createElement('li');
              li.textContent = c.name + " (" + (c.gameStyle || 'Desconhecido') + ")";
              li.onclick = () => {
                document.getElementById('json-view').innerHTML = '<pre>' + JSON.stringify(allChars[index], null, 2) + '</pre>';
              };
              list.appendChild(li);
            });
          })
          .catch(err => {
            document.getElementById('char-list').innerHTML = 'Erro ao carregar dados.';
          });
      </script>
    </body>
    </html>
  `;
  res.send(html);
})

export default router
