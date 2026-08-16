import { Request, Response } from "express";
import { CreationPackage, CreationPackageItem } from "../models";

export const getAllCreationPackages = async (req: Request, res: Response) => {
  try {
    const packages = await CreationPackage.findAll({
      include: [
        {
          model: CreationPackageItem,
          as: "CreationPackageItems" // This comes from the automatic association name
        }
      ]
    });
    res.json(packages);
  } catch (error: any) {
    console.error("Error fetching creation packages:", error);
    res.status(500).json({ error: "Erro ao buscar os pacotes de criação." });
  }
};
