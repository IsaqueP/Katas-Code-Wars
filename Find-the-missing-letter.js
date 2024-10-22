function findMissingLetter(array) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const isCapitalized = array[0] === array[0].toUpperCase()

  const start = alphabet.indexOf(array[0].toLowerCase())
  const end = start + array.length

  for (let i = start; i < end; i++) {
    const currentLetter = isCapitalized ? alphabet[i].toUpperCase() : alphabet[i]
    
    if (currentLetter !== array[i - start]) {
      return currentLetter
    }
  }
}


findMissingLetter(['a','b','c','d','f'])

