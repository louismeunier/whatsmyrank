import axios from "axios";
import { setup } from "axios-cache-adapter"
const BASE_URL = "https://louismeunier.github.io/wca-stats-helper/rank";

const api = setup({
    baseURL: BASE_URL,
    cache: {
        maxAge: 60 * 60 * 24 * 7
    }
})

const getWCA = async (event, type) => {
    let response;
    await api.get(`/${type}/${event}.json`)
        .then(res => {
            response = res.data;
        })
        .catch(err=>console.error(err));
    return response;
}
export default getWCA;