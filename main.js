let raceNumber = Math.floor(Math.random() * 1000);
let registrationEarly = true; 
let runnerAge = 18; 

if (registrationEarly && runnerAge > 18) {
  raceNumber += 1000;
}
  
if (registrationEarly && runnerAge > 18) {
  console.log (`You will race at 9:30 am. Your Race number is ${raceNumber}.`);
}

else if (!registrationEarly && runnerAge > 18) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
}

else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`)
}

else {
  console.log(`Please see the registration desk.`)
}
