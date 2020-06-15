// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️

processFirstItem(['foo', 'boo',], (str) => str + str)

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Count exists only inside the function, while in counter2 the count variable is global.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter 1, because it returns data and remembers it even after the function has closed. In counter2, the function simply updates the global variable 'count'
 * and doesn't retain any memory it was called previously. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Counter1 would be preferable in any scenario in which we needed count to not interfere with other functions and remain a private variable, and we wanted to call 
 * // on it only when needed. Counter2 might be preferable if for some reason we needed the count variable to be global and accessible by any function (maybe if we
 * we adding the scores together from many different games?). 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

// Edit the ReadMe file with your answers.

// In your own words, define closure (1-2 sentences).

// A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access 
// variables and arguments of its outer function even after the function has finished. This not entirely my own words, but it's the explanation that makes by far
// the most sense to me. 


// Study the following code, then answer the questions below.

// function personalDice(name){
//   return function(){
//       // generate random number between 1 and 6
//     const newRoll = Math.floor(Math.random() * 6);
//     console.log(`${name} rolled a ${newRoll}`)
//   }
// }

// const dansRoll = personalDice("Dan");

// const zoesRoll = personalDice("Zoe");


// dansRoll();
// dansRoll();
// a. Where is closure used in this code? How can you tell? b. Compare and contrast calling dansRoll the first and second time. 
//What is always the same? What could change? c. What is the lexical scope of newRoll?

// a. Closure is used at 'return function()' where the entire function is terminated following the return statement. 
// b. Nothing changes but the random number generated on each successive roll. However, one could create a new named function 
// e.g. const marsRoll = personalDice("Mars") which would operate separately with its own hidden newRoll variable.
// c. newRoll's lexical scope is inner, it can access variables inside the inner function, the outer function, and the global scope. 

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let score = Math.floor(Math.random() * 3);
  return score
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, number){
  let score1 = 0
  let score2 = 0
  for(i = 0; i < number; i++){
    score1 = score1 + callback()
    score2 = score2 + callback()
  }
  return totalScore = {
    "Home": score1,
    "Away": score2
  }
}


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function finalScore(callback, number){
  let score1 = 0
  let score2 = 0
  inningNum = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th']
  for(i = 0; i < number; i++){
    score1 = score1 + callback()
    score2 = score2 + callback()
    console.log(`${inningNum[0+i]} inning: ${score1} - ${score2}!`)
  }
  return `Final Score: ${score1} - ${score2}!`
}