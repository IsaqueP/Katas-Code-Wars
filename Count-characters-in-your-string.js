function count(string) {
  //recebe o texto e separa cada letra
  let response = {}
  let letters = string.split('')

  for(const letter of letters){
    //atribui a 'letra' como chave do objeto
    //se a letra se repetir, soma seu valor mais uma vez
    if(!response[letter]){
      response[letter] = 1
    }else{
      response[letter] += 1
    }
  }
  return response
}
