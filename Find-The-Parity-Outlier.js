function findOutlier(integers){
  let impar = []
  let par = []
  integers.forEach(int => {
    if(int % 2 === 0){
      par.push(int)
    }else{
      impar.push(int)
    }
  });

  if(par.length === 1){
    return par[0]
  }else{
    return impar[0]
  }
}