import { Request, Response } from "express";
import { VampireResonanceDefinition } from "../models";

export const getVampireResonances = async (req: Request, res: Response) => {
  try {
    const resonances = await VampireResonanceDefinition.findAll({
      order: [['nome', 'ASC']]
    });
    return res.json(resonances);
  } catch (error) {
    console.error("Erro ao buscar ressonâncias:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getVampireResonanceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resonance = await VampireResonanceDefinition.findByPk(id);
    if (!resonance) {
      return res.status(404).json({ error: "Ressonância não encontrada" });
    }
    return res.json(resonance);
  } catch (error) {
    console.error("Erro ao buscar ressonância:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const createVampireResonance = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const resonance = await VampireResonanceDefinition.create(data as any);
    return res.status(201).json(resonance);
  } catch (error) {
    console.error("Erro ao criar ressonância:", error);
    return res.status(500).json({ error: "Erro ao criar ressonância" });
  }
};

export const updateVampireResonance = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const resonance = await VampireResonanceDefinition.findByPk(id);
    if (!resonance) {
      return res.status(404).json({ error: "Ressonância não encontrada" });
    }
    await resonance.update(data);
    return res.json(resonance);
  } catch (error) {
    console.error("Erro ao atualizar ressonância:", error);
    return res.status(500).json({ error: "Erro ao atualizar ressonância" });
  }
};

export const deleteVampireResonance = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resonance = await VampireResonanceDefinition.findByPk(id);
    if (!resonance) {
      return res.status(404).json({ error: "Ressonância não encontrada" });
    }
    await resonance.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar ressonância:", error);
    return res.status(500).json({ error: "Erro ao deletar ressonância" });
  }
};
