import { Request, Response } from "express";
import listProdcutsService from "../services/products/listProducts.services";

const listProductsController = async (req: Request, res: Response) => {

  try {

    const  data = await listProdcutsService()
    return res.json(data)

  } catch (error) {

    if (error instanceof Error) {

      return res.status(400).json({

        message: error.message,
      });

    }

  }

};

export { listProductsController };
