// code your solution here
// razzle();
// function razzle () {
//     console.log ("You've been razzled!");
// }

//=> "You've been razzled!"

// function razzle(lawyer = "Billy", target = "'em") {
//     console.log(`${lawyer} razzle-dazzles ${target}!`);
//   }
//   razzle(); //=> Billy razzle-dazzles 'em!
//   razzle("Methuselah", "T'challah"); //=> Methuselah razzle-dazzles T'challah!

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun("go hiking")); 
console.log(saturdayFun()); 

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork("start a new project"));

function wrapAdjective(flair = "*", adjective = "special") {
    return function(name = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}


const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction()); 
console.log(encouragingPromptFunction("amazing")); 

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}


const highlightWithStar = wrapAdjective("*");
const highlightWithBars = wrapAdjective("||");

console.log(highlightWithStar()); 
console.log(highlightWithStar("amazing"));
console.log(highlightWithBars()); 
console.log(highlightWithBars("awesome")); 
