## Welcome to the Zoo

### What are the different concerns of our application?

Separation of Concerns

1. API requests - fetches from an API √
2. DOM manipulation - renders out a list of animals
3. Logging some stuff to the console  / debugging
4. Taking user input and then doing other stuff with it
  + making a request to the API
  + appending to the DOM


For each category?
  + What classes will we need?
  + What methods will instances respond to?
  + What methods will the class itself respond to?
  + What arguments will get passed back and forth?


### Models
+ Represent Data
+ In ActiveRecord, they're wrapping a SQL database
+ Here in our JS app, they're wrapping up our API
+ 1. API requests - fetches from an API

class Animal

  + class method 'all' to fetch all the animals
  + class method 'create' to make a new animal

`Animal.all().then(animals => console.log(animals))`
`Animal.create({name: "Always Dreaming", species_name: 'Horse'})`

class Species
+ class method 'all' to fetch all the species
+ class method 'create' to make a new species


### Views
+ Concerned with what the user sees/interacts with
+ This is what the user sees 

+ class AnimalListView
  + view = new AnimalListView([{name: 'Fido'}])
  + view.render() // <ul><li>Fido</li></ul>
+ class AnimalListItem
  + view = AnimalListItemView({name: 'Fido'})
  + render // <li>Fido</li>
+ class AnimalForm
  + render // <form></form>

### Controllers
+ Passes data between the model and the Views
+ 2. DOM manipulation - renders out a list of animals

+ 4. Taking user input and then doing other stuff with it
  + making a request to the API
  + appending to the DOM

+ class AnimalsController
  + add any event handlers that we need
  + fetch the initial list of animals from the API
  + and render that to the view

  + index
