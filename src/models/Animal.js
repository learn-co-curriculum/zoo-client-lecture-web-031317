class Animal {

  static zorp(){
    return 'Zorp'
  }

  bark(){
    return "Woof!"
  }

  static all(){
    return   $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/animals'
    })
  }

  static create(params){
    return $.ajax({
      url: 'http://localhost:3000/api/v1/animals',
      method: 'POST',
      data: params
    })
  }
}

 // return the Promise object from our AJAX request to get all the animal
