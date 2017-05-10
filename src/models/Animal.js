class Animal {

  static all(){
    return $.ajax({
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

// Animal.all = function(){
//
// }
