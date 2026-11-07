import axios from "axios";
import apiUrlBase from "./env";

export const api = axios.create({
    baseURL: apiUrlBase,    
})