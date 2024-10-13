var number = function(busStops){
  let amountOfPeopleInTheBus = 0
  busStops.forEach(stop => {
    amountOfPeopleInTheBus += (stop[0]-stop[1])
  });
  return amountOfPeopleInTheBus
}