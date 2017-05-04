$(document).ready(function(){
  // fire an ajax request to our API
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/v1/animals'
  }).then(function (data){
    console.log("Got back the response from the API - rendering all of the animals!!!!!!")
    console.log(data)

    // take the response and for each animal in the response, render out a new
    // list item with that animals name and species
    const listElements = data.map(function(animal){
      return `<li>${animal.name}</li>`
    })

    $('ul#animals').html( listElements.join('') )
  })

  $('form#create-animal').on('submit', function(event){
    event.preventDefault()
    // find the values for animal name and species name from the form
    const $animalNameInput = $('input#animal-name')
    const $speciesNameInput = $('input#species-name')

    const animalName = $animalNameInput.val()
    const speciesName = $speciesNameInput.val()
    console.log("event handler for form!!")

    // send an ajax post request with those values to our API

    $.ajax({
      url: 'http://localhost:3000/api/v1/animals',
      method: 'POST',
      data: {
        animal_name: animalName,
        species_name: speciesName,
        hi: true
        more_garage: "this will get passed along with the params, but our DB is ignoring it"
      }
    }).then(function(animal){
      $('ul#animals').append(`<li>${animal.name}</li>`)
    })

    // render out the data into the DOM
  })
})
