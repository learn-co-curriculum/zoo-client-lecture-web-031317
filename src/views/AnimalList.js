class AnimalList {

  renderAnimalList(animals){
    const listElements = animals.map( animal => this.renderAnimalListItem(animal) )

    return listElements.join('')
  }

  renderAnimalListItem(animal){
    return `<li><p>${animal.name}</p><p>${animal.species.name}</p></li>`
  }

}
