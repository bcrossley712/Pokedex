import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js";
import { Pop } from "../Utils/Pop.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonsService {
  async _getMyPokemon() {
    const res = await sandboxApi.get()
    ProxyState.myPokemon = res.data.map(p => new Pokemon(p))
  }
  async catchPokemon() {
    let currentPokemon = ProxyState.activePokemon
    const res = await sandboxApi.post('', currentPokemon)
    console.log(res.data);
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
    console.log(ProxyState.myPokemon);


  }
  async releasePokemon() {
    let id = ProxyState.activePokemon.id
    const res = await sandboxApi.delete(id)
    console.log('[releasePokemon]', res.data);
    ProxyState.activePokemon = {}
    ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id != id)
  }

  setActivePokemon(name) {
    let currentPokemon = ProxyState.myPokemon.find(p => p.name == name)
    ProxyState.activePokemon = currentPokemon
  }
}

export const myPokemonsService = new MyPokemonsService()