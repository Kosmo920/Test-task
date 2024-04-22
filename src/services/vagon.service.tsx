import { IVagon } from "@/interfaces/Vagon.interface"
import axios from "axios"

const API_URL = 'https://rwl.artport.pro/commercialAgent/hs/CarrWorkApp/';
axios.defaults.baseURL = API_URL

export const VagonService = {
    async getAll(){
        const {data} = await axios.get<{Vagons: IVagon[]}>('/VagonInfo')
        return data.Vagons
    },

    async getById(id:string){
        const {data} = await axios.get<{Vagons: IVagon[]}>('/VagonInfo', {
            params:{id}
        }
    )
        return data.Vagons[0]
    },
}