interface IProductsResponse{
    id: number
    name: string
    price: number
   
   }
   
interface IProductsPriceResponse{
    id: number
    name: string
    price: number
    price_discont: number
}


   export {IProductsResponse,IProductsPriceResponse}