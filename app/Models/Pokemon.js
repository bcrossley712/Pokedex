

export class Pokemon {
  constructor(data) {
    this.id = data.id || ''
    this.name = data.name
    this.nickName = data.nickName || ''
    this.img = data.img || data.sprites.other['official-artwork']['front_default']
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
  }

  get Template() {
    return `
      <div class="bg-white rounded shadow p-2 m-2">
        <img class="img-fluid rounded-top" src="${this.img}" alt="Pokemon image">
        <div>
          <b class="capital">${this.name}</b>
          <p>${this.nickName}</p>
          <p>Weight: ${this.weight} ounces</p>
          <p>Height: ${this.height} inches</p>
        </div>
        <div class="${this.id.length > 3 ? 'text-end' : ''}">
        ${this.Button}
        </div>
      </div>
    `
  }

  get MyListTemplate() {
    return `
    <di class="rounded  p-2">
            <img class="img-fluid img-small" src="${this.img}" alt="">        
        <b class="text-center w-100 capital">${this.name}</b>
          <button class="btn selectable capital" onclick="app.myPokemonsController.setActivePokemon('${this.name}')"> See details...</button>
      <div class="border border-light mt-2"></div>
    </div>
    `
  }

  get Button() {
    let button = ''
    if (this.id.length > 3) {
      button = `
      <button class="btn btn-danger" onclick="app.myPokemonsController.releasePokemon()">Let it go!</button>
    `} else {
      button = `
      <button class="btn btn-success" onclick="app.myPokemonsController.catchPokemon()">Catch It!</button>
      `
    }
    return button
  }
}