import { IProductsPriceResponse } from "../../interfaces/products.interface"
import { api } from "../../utils/api"

const listCalcProdcutsService = async (idUser:string, idsProducts:number[] ): Promise<IProductsPriceResponse[]> =>{

    const products = await api.get("products")
    const user = await api.get("users/"+idUser)

    const productsPrice: IProductsPriceResponse[] = []
    for (let i = 0; i < products.data.length; i++) {
        for (let y = 0;  y < idsProducts.length;  y++) {
            if(products.data[i].id == idsProducts[y])
                productsPrice.push(products.data[i])
            
        }
        
    }

    for (let i = 0; i < productsPrice.length; i++) {
        productsPrice[i].price_discont = Math.floor((user.data.tax/100)*productsPrice[i].price)
        
    }

    return  productsPrice

    }



export default listCalcProdcutsService