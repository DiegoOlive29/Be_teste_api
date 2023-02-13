import { IProductsResponse } from "../../interfaces/products.interface"
import { api } from "../../utils/api"

const listProdcutsService = async (): Promise<IProductsResponse[]> =>{

    const {data} = await api.get("products")

    return data

    }



export default listProdcutsService