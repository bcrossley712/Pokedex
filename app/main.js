import { MyPokemonsController } from "./Controllers/MyPokemonsController.js";
import { PokemonsApiController } from "./Controllers/PokemonsApiController.js";

class App {
  myPokemonsController = new MyPokemonsController()
  pokemonsApiController = new PokemonsApiController()
}

window["app"] = new App();
