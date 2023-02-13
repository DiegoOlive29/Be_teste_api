import { IProductsPriceResponse } from "../../interfaces/products.interface"
import { api } from "../../utils/api"

const listCalcProdcutsService = async (idUser:string, idsProducts:number[] ): Promise<IProductsPriceResponse[]> =>{

    const products = await api.get("products")
    const users = await api.get("users/"+idUser)


    const productsPrice: IProductsPriceResponse[] = []

    return  productsPrice

    }



export default listCalcProdcutsService