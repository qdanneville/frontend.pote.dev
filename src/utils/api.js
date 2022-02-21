import axios from "axios";
import { config } from '../config'

console.log('config :', config);

const instance = axios.create({
    baseURL: config.API_URL
})

export default instance