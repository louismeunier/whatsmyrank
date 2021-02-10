import localforage from 'localforage'
import memoryDriver from 'localforage-memoryStorageDriver'
import { setup } from "axios-cache-adapter"

const BASE_URL = "https://louismeunier.github.io/wca-stats-helper";

async function config () {
    await localforage.defineDriver(memoryDriver);

    const forageStore = localforage.createInstance({
        driver: [
            localforage.INDEXEDDB,
            localforage.LOCALSTORAGE,
            memoryDriver._driver
          ],
          name: 'whats-my-rank-helper'
    }) 
    return setup({
        baseURL: BASE_URL,
        cache: {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          store: forageStore
        }
      })
}

const getWCA = (event, type) => {
    return new Promise((resolve, reject)=> {
        config()
        .then(async api => {
                await api.get(`/rank/${type}/${event}.json`)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err=>reject(err));
        })
    })
    
}

const getLastUpdated = () => {
    return new Promise((resolve,reject)=> {
        config()
        .then(async api => {
            await api.get("/metadata.json")
                .then(res => {
                    resolve(res.data);
                })
                .catch(err=>reject(err));
        })
    })
   
}
export { getWCA, getLastUpdated };
