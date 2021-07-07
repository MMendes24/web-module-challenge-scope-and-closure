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

  /*Research the differences between functional programming and object oriented programming. 
  Then, describe the pros and cons of functional programming vs object-oriented programming. 
  This is a common interview question and great practice!*/

  /*Object-oriented programming (OOP) is based on the concept of "objects", and the basic elements are objects and methods (a function that lives inside of an object.)
  It's great when you have a relatively fixed set of operations, but your data is mutable and expanding. In OOP you primarily reuse the same operations on different
  things, adding new classes which implement existing methods. Old classes tend to be left alone. It uses loops for iteration and follows the imperative model of 
  programming. The order in which tasks get executed matters. 

  Functional Languages are good when you have a fixed set of things, and as the need arises, you primarily want to add new ways of operating on those things. Your
  main goals in functional languages tend to be related to manipulating the same things in an ever growing number of ways. Its main elements are variables and functions. 
  FLs primarily use recursion to iterate through data and statements in FLs tend do not need to be executed in a particular order. It follows the declarative 
  programming model. Importance is not given to data, but to functions. FL are less secure because there is no way to hide data. 