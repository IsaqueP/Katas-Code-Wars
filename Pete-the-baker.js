function cakes(recipe, available) {
  let amount = []
  //adiciono a quantidade de receitas que cada ingrediente consegue fazer ao array 'amount'
  for (var key in recipe) {
    if (Object.hasOwn(recipe, key)) {
      available[key] === undefined ? amount.push(0) : amount.push(parseInt(available[key] / recipe[key]))
    }
  }
  
  //verifico o menor número
  let smallestNumber = amount.reduce((menorValor, elementoAtual) => { 
    return menorValor < elementoAtual ? menorValor : elementoAtual
  })


  return smallestNumber
}

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, milk: 200})