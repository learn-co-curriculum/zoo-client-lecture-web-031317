$(document).ready(function(){
  const view = new AnimalList()

  Animal.all().then(function (animals){
    $('ul#animals').html( view.renderAnimalList(animals) )
  })

  $('form#create-animal').on('submit', function(event){
    event.preventDefault()
    const $animalNameInput = $('input#animal-name')
    const $speciesNameInput = $('input#species-name')

    const animalName = $animalNameInput.val()
    const speciesName = $speciesNameInput.val()
    console.log("event handler for form!!")

    $animalNameInput.val('')
    $speciesNameInput.val('')

    Animal.create({
      animal_name: animalName,
      species_name: speciesName,
      hi: true
    }).then(function(animal){
      $('ul#animals').append(view.renderAnimalListItem(animal))
    })
  })
})
