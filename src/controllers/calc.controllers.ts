import { Request, Response } from "express";
import listCalcProdcutsService from "../services/users/listCalcProducts.services";

const listProductsCalcController = async (req: Request, res: Response) => {

  try {
    const id = req.params.id
    const {idsProducts} = req.body
    const  data = await listCalcProdcutsService(id, idsProducts)
    return res.json(data)

  } catch (error) {

    if (error instanceof Error) {

      return res.status(400).json({

        message: error.message,
      });

    }

  }

};

export { listProductsCalcController }
