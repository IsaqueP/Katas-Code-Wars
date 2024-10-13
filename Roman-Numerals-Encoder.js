function solution(integer){
  let response = ''

for(let i=integer;i>=integer;i--){

  if(integer === 0){
    return response
  }else if(integer >= 1000){
    response += 'M'
    integer -= 1000

  }else if(integer >= 500){
    if(integer >= 900){
      response += 'CM'
      integer -= 900
    }else{
      response += 'D'
      integer -= 500
    }

  }else if(integer >= 100){
    if(integer >= 400){
      response += 'CD'
      integer -= 400
    }else{
      response += 'C'
      integer -= 100
    }

  }else if(integer >= 50){
    if(integer >= 90){
      response += 'XC'
      integer -= 90
    }else{
      response += 'L'
      integer -= 50
    }

  }else if(integer >= 10){
    if(integer >= 40){
      response += 'XL'
      integer -= 40
    }else{
      response += 'X'
      integer -= 10
    }

  }else if(integer >= 5){
    if(integer >= 9){
      response += 'IX'
      integer -= 9
    }else{
      response += 'V'
      integer -= 5
    }

  }else if(integer >= 1){
    if(integer >= 4){
      response += 'IV'
      integer -= 4
    }else{
      response += 'I'
      integer -= 1
    }
    
  }
}
}