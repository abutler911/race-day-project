let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 19;

if(runnerAge >= 18 && registeredEarly) {
    raceNumber += 1000;
}

if(runnerAge >=18 && registeredEarly) {
    console.log(`Your race starts at 0930 and your race number is ${raceNumber}.`);
} else if (runnerAge >= 18 && !registeredEarly) {
    console.log(`Your race starts at 1100 and your race number is ${raceNumber}.`);
} else {
    console.log(`Your race starts at 1230 and your race number is ${raceNumber}.`);   
}
