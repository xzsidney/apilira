import { Request, Response } from 'express';
import { DefinitionLocation } from '../models/index';

export const getRadarLocations = async (req: Request, res: Response) => {
  try {
    const locations = await DefinitionLocation.findAll({
      where: { level: 2 }, // Zones
      include: [
        {
          model: DefinitionLocation,
          as: 'children', // Assuming parent-child relation is aliased as children
          required: false
        }
      ]
    });

    res.json(locations);
  } catch (error: any) {
    console.error('Error fetching radar locations:', error);
    res.status(500).json({ error: 'Erro ao buscar localizações do radar.' });
  }
};
