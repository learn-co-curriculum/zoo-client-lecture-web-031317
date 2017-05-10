$(document).ready(function(){
  const $list = $('#animals')
  const $form = $('form#create-animal')
  const $animalNameInput = $('input#animal-name')
  const $speciesNameInput = $('input#species-name')
  new AnimalsController($list, $form, $animalNameInput, $speciesNameInput)
})
