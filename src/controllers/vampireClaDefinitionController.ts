import { Request, Response } from "express";
import { VampireClaDefinition } from "../models";

export const getVampireClas = async (req: Request, res: Response): Promise<void> => {
  try {
    const clas = await VampireClaDefinition.findAll();
    res.json(clas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar clãs de vampiro." });
  }
};
