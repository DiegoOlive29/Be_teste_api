import { Request, Response } from "express";
import listUserService from "../services/users/listUser.services";

const listUserController = async (req: Request, res: Response) => {

  try {

    const  data = await listUserService()
    return res.json(data)

  } catch (error) {

    if (error instanceof Error) {

      return res.status(400).json({

        message: error.message,
      });

    }

  }

};

export { listUserController };
