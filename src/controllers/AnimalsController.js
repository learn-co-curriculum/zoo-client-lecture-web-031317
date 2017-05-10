class AnimalsController {
  constructor($list, $form, $animalNameInput, $speciesNameInput){
    this.animals = []
    this.view = new AnimalListView()
    this.$list = $list
    this.$form = $form
    this.$animalNameInput = $animalNameInput
    this.$speciesNameInput = $speciesNameInput
    this.index()

    this.$form.on('submit', (e) => {
      e.preventDefault()
      this.create()
    })
  }

  index(){
    Animal.all().then((data) => {
      this.animals = data
      this.$list.html( this.view.render(this.animals) )
    })
  }

  create (){
    Animal.create({
      animal_name: this.$animalNameInput.val(),
      species_name: this.$speciesNameInput.val()
    }).then((animal) => {
      this.animals.push(animal)
      this.$list.html(this.view.render(this.animals))
      this.$animalNameInput.val('')
      this.$speciesNameInput.val('')
    })
  }
}
