function pigIt(str){
  
  let newString = str.split(' ')
  let response = ''

  newString.map(word => {
    let firstLetter = word.slice(0,1)
    if(word === '?' || word === '!' | word === '.'){
      response += `${word.slice(1)}${firstLetter} `
    }else{
      response += `${word.slice(1)}${firstLetter}ay ` 
    }
  })

  return response.trim()
}



pigIt('Hello world !')