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

export default router
