decodeMorse = function(morseCode){
  const dictionaryMorse = {
  '.-': 'A',    '-...': 'B',  '-.-.': 'C',  '-..': 'D',   '.': 'E',
  '..-.': 'F',  '--.': 'G',   '....': 'H',  '..': 'I',    '.---': 'J',
  '-.-': 'K',   '.-..': 'L',  '--': 'M',    '-.': 'N',    '---': 'O',
  '.--.': 'P',  '--.-': 'Q',  '.-.': 'R',   '...': 'S',   '-': 'T',
  '..-': 'U',   '...-': 'V',  '.--': 'W',   '-..-': 'X',  '-.--': 'Y',
  '--..': 'Z',
  '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', 
  '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
  '.-.-.-': '.', '-....-': '-', '--..--': ',', '..--..': '?', '.----.': '\'',
  '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&',
  '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '..--.-': '_',
  '.-..-.': '"', '...-..-': '$', '.--.-.': '@', ' ': ' ', '...---...': 'SOS'
};

morseCode = morseCode.trim()
let morseText = morseCode.split(' ')
let newText = ''
  
morseText.forEach((word, index) => {
  if(word === ''){
    morseText.splice(index, 2)
    morseText.splice(index, 0, ' ')
    return
  }
}); 

morseText.forEach((word, index) => {
  //newText.push(dictionaryMorse[word])
  newText += dictionaryMorse[word]
});

return newText
}