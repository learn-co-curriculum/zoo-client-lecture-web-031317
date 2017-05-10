class AnimalListView {

  render(animals){
    const animalListItems = animals.map(function(animal){
      //animal => {name: 'Fido'}
      return `<li>${animal.name}</li>`
    })
    return `<ul>
      ${animalListItems.join('')}
    </ul>`
  }
}
