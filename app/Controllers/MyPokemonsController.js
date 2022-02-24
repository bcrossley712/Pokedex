import { ProxyState } from "../AppState.js";
import { myPokemonsService } from "../Services/MyPokemonsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawMyList() {
  let template = ''
  ProxyState.myPokemon.forEach(p => template += p.MyListTemplate)
  document.getElementById('my-pokemon').innerHTML = template
}
async function _getMyPokemon() {
  try {
    await myPokemonsService._getMyPokemon()
  } catch (error) {
    console.log(error.message);
    Pop.toast(error.message, 'error')
  }
}
export class MyPokemonsController {
  constructor() {
    ProxyState.on('myPokemon', _drawMyList)
    _getMyPokemon()
  }

  async catchPokemon() {
    try {
      // console.log('Tried to catch', ProxyState.activePokemon.name);
      await myPokemonsService.catchPokemon()
    } catch (error) {
      console.log(error.message);
      Pop.toast(error.message, 'error')
    }
  }

  async releasePokemon() {
    try {
      await myPokemonsService.releasePokemon()
    } catch (error) {
      console.log(error.message);
      Pop.toast(error.message, 'error')
    }
  }


  setActivePokemon(name) {
    myPokemonsService.setActivePokemon(name)
  }
}