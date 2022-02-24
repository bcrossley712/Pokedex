import { ProxyState } from "../AppState.js";
import { pokemonsApiService } from "../Services/PokemonsApiService.js";
import { Pop } from "../Utils/Pop.js";

async function getPokemonsApiList() {
  try {
    await pokemonsApiService.getPokemonsApiList()
  } catch (error) {
    console.log(error.message);
    Pop.toast(error.message, 'error')
  }
}

function _drawPokemonApiList() {
  let template = ''
  ProxyState.pokemon.forEach(p => template += `<li class="selectable capital" onclick="app.pokemonsApiController.getActivePokemon('${p.name}')">${p.name}</li>`)
  document.getElementById('pokemon-api-list').innerHTML = template
}

function _drawActivePokemon() {
  let activePokemon = ProxyState.activePokemon
  if (activePokemon.name) {
    document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.Template
  } else {
    document.getElementById('active-pokemon').innerHTML = ''

  }
}

export class PokemonsApiController {
  constructor() {
    ProxyState.on('pokemon', _drawPokemonApiList)
    ProxyState.on('activePokemon', _drawActivePokemon)
    getPokemonsApiList()
  }

  async getActivePokemon(name) {
    try {
      await pokemonsApiService.getActivePokemon(name)
    } catch (error) {
      console.log(error.message);
      Pop.toast(error.message, 'error')
    }
  }



}
