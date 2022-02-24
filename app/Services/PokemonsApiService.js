import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js"


class PokemonsApiService {
  async getPokemonsApiList() {
    const res = await pokeApi.get('?limit=151')
    console.log(res.data);
    ProxyState.pokemon = res.data.results
  }
  async getActivePokemon(name) {
    const res = await pokeApi.get(name)
    console.log(res.data)
    ProxyState.activePokemon = new Pokemon(res.data)
    // console.log(ProxyState.activePokemon);
  }
}

export const pokemonsApiService = new PokemonsApiService()