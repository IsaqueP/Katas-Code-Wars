function generateHashtag (str) {
  str = str.trim()
  if(!str){
    return false
  }else{

    let array = str.split(' ')
    let response = '#'

    for(const word of array){
      //charAt(0) = pega a primeira letra
      //toUpperCase() = transforma em maiúscula
      //slice(1) = retorna o resto das letras da palavra
      response += word.charAt(0).toUpperCase() + word.slice(1)
    }

    return response.length > 140 ? false : response
  }
}