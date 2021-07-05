function scuberGreetingForFeet(feet){
  // Write your code here!\
  let response; 
  if (feet < 400) {
  response = 'This one is on me!'}
  else if (feet > 2000 && feet <= 2500){
  response = 'I will gladly take your thirty bucks.'}
  else if (feet > 2500){
  response = 'No can do.'}
    return response
}

function ternaryCheckCity(city){
  // Write your code here!
  let response
  city === "NYC" ? response = "Ok, sounds good." : response = "No go."
  return response 
}

function switchOnCharmFromTip(tip){
  // Write your code here!
switch (tip) {
case "generous":
  return "Thank you so much."
  break;
case 'not as generous':
  return "Thank you."
  break;
  default: return "Bye.";
}
}