function scuberGreetingForFeet(arg){
  let result
  if (arg <= 400) {
    result = "This one is on me!";
  }
  else if (arg >= 2000) {
    result = 'I will gladly take your thirty bucks.';
  }
  if (arg >= 2500){
    result = 'No can do.';
  }

  return result
}
 
 

function ternaryCheckCity(city){
  let response
  if (city === "NYC") {
    response = "Ok, sounds good.";
  }
  else{
    response = "No go."
  }
  return response
}

function switchOnCharmFromTip(tip){
  let response
  if (tip === 'generous'){
    response = 'Thank you so much.';
  }
  else if (tip === 'not as generous'){
    response = 'Thank you.';
  }
  else{
    response ='Bye.';
  }
  return response
}