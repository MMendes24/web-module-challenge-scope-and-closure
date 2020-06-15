/* After you have completed the requirements, create a new file called stretch.js and practice more with closures. There are no tests for these problems.

See if you can complete one or more of the following challenges:

Predict the output of the code below and explain why this is the output using what you learned today. 

(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
*/

//My prediction is that a will be defined (it's equal to 'b = 3') but that b will not be because is not actually defined anywhere in the code. It's just a part of a. 

/*Update! I was wrong. Running the code, a was undefined and b was defined. Apparently this is because a is actually a local variable that lives only inside
0f that function, while b is actually a global variable (because of var in this case) that is equal to three. */

/* I assumed it looked like var b = 3 and var a = b, but what js actually reads is b = 3, var a = b. Console logging them inside the function makes them both 
defined. That was honestly pretty informative. */

// /Write a function that would allow you to do this using a closure. 
// (This is another interview question we've seen before - when you're ready for answers, view an explanation here).

function createBase(baseNumber) {
    return function(x) {
      return baseNumber + x;
    }
  }
  
  let addSix = createBase(6);
  
  addSix(12)

  //it took me some time to grasp, but addSix in this case is a variable that equals the function with an argument already passed to it. Because it already has this
  //first argument, it essentially operates as a shorthand for that function but with the first parameter already entered. This is why when you call addSix the argument
  //that you enter in the parantheses doesn't replace baseNumber (because that's already been accounted for) but rather functions as x, as if you had called
  //createBase(6)(12) to begin with. Effectively, the first part of the function (the outer) has already been invoked and it just needs the remainder (the inner). The
  //big difference in this case is that addSix allows us to call the variable with that parameter already known as an argument identically every time, rather than
  //always having to enter six. Closure is the reason this works, because return baseNumber + x; is able to perform even though "return function(x)" has terminated. 

  