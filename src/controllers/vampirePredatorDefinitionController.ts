import { Request, Response } from "express";
import { VampirePredatorDefinition } from "../models";

// GET /api/vampire-predators
export const getVampirePredators = async (req: Request, res: Response): Promise<void> => {
  try {
    const predators = await VampirePredatorDefinition.findAll();
    res.status(200).json(predators);
  } catch (error) {
    console.error("Erro ao buscar predadores:", error);
    res.status(500).json({ error: "Erro interno no servidor ao buscar predadores" });
  }
};

// GET /api/vampire-predators/:id
export const getVampirePredatorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const predator = await VampirePredatorDefinition.findByPk(id);
    if (!predator) {
      res.status(404).json({ error: "Predador não encontrado" });
      return;
    }
    res.status(200).json(predator);
  } catch (error) {
    console.error("Erro ao buscar predador:", error);
    res.status(500).json({ error: "Erro interno no servidor ao buscar predador" });
  }
};

// POST /api/vampire-predators
export const createVampirePredator = async (req: Request, res: Response): Promise<void> => {
  try {
    const predator = await VampirePredatorDefinition.create(req.body);
    res.status(201).json(predator);
  } catch (error) {
    console.error("Erro ao criar predador:", error);
    res.status(500).json({ error: "Erro interno no servidor ao criar predador" });
  }
};

// PUT /api/vampire-predators/:id
export const updateVampirePredator = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const predator = await VampirePredatorDefinition.findByPk(id);
    if (!predator) {
      res.status(404).json({ error: "Predador não encontrado" });
      return;
    }
    await predator.update(req.body);
    res.status(200).json(predator);
  } catch (error) {
    console.error("Erro ao atualizar predador:", error);
    res.status(500).json({ error: "Erro interno no servidor ao atualizar predador" });
  }
};

// DELETE /api/vampire-predators/:id
export const deleteVampirePredator = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const predator = await VampirePredatorDefinition.findByPk(id);
    if (!predator) {
      res.status(404).json({ error: "Predador não encontrado" });
      return;
    }
    await predator.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar predador:", error);
    res.status(500).json({ error: "Erro interno no servidor ao deletar predador" });
  }
};
