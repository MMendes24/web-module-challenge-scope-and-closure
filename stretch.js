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

