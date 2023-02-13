import { IUserResponse } from "../../interfaces/user.interfaces"
import { api } from "../../utils/api"

const listUserService = async (): Promise<IUserResponse[]> =>{

    const {data} = await api.get("users")

    return data

    }



export default listUserService