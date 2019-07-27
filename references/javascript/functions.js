/// FUNCTIONS /////////////////////////////////////////////////////////////////
/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  There are three concepts to understand about functions:

  concept 1 : You create one using the FUNCTION DECLARATION syntax. Declaring a
              function bundles a bunch of code statements so you can use them
              later.

  concept 2 : After you declare a function, you CALL (aka INVOKE) the function
              using FUNCTION INVOCATION syntax. This 'runs the code' you have
              written inside the function.

  concept 3 : You can provide starting values to the function you are calling by
              PASSING PARAMETERS to it. These parameters can be any literal or
              stored value you want to use, and can be any data type (e.g.
              number, boolean, string, array, or object). They create TEMPORARY
              VARIABlES that are 'scoped' to exist only inside the function
              itself.

  concept 4 : A function can RETURN the result of a calculation, if this is
              desired.

  ## CONCEPT 1+3 'DECLARING A FUNCTION' SYNTAX

  There are several ways to DECLARE A FUNCTION in Javascript. This is the
  CLASSIC WAY:

  // format 1: no parameters function ___ () {
    ___;
  }

  // format 2: one parameter function ___ ( ___ ) {
    ___;
  }

  // format 3: two parameters function ___ ( ___, ___ ) {
    ___;
  }

  1. After the 'function' keyword, provide the NAME of the function so you can
     actually 'call' (run the code in it) later.
  2. Inside the parenthesis are FUNCTION PARAMETERS in what is called a
     PARAMETER LIST. These provide the starting values that the function may
     need to do its calculations. If there are no parameters, retain the empty
     ().
  3. Inside the { }, write your code STATEMENTS. They can refer to the
     PARAMETERS you defined in step 1.

  ## CONCEPT 2 'CALLING A FUNCTION' with 'PASSED PARAMETERS' SYNTAX

  ___();            // format 1: no parameter passed to function ___( ___ ); //
  format 2: one parameter passed to function ___( ___, ___ );  // format 3: two
  parameters passed to function

  4. The function name comes first and is always followed by parenthesis ()
  5. In general, anytime you see a ( ) you are seeing a parameter list that you
     want provided for the operation defined by the 'keyword'
     * 'Functions' use the form 'function ( a, b, c ) { }'
     * 'For loops' use the form 'for ( start ; end ; iteration ) { }'
     * 'Conditionals' use the form 'if (logical expression) { }'

  ## CONCEPT 4 'RETURNING AND USING RETURNED VALUES' SYNTAX

  // FORMAT 1 FUNCTION DECLARATION PATTERN
  // no parameters are expected to be passed in
  // value will be returned to the caller
  function ___() {
    ___;
    return ___;
  }
  // saving returned value of function call
  var ___  = ___();
  // losing value of function call because we don't care
  ___();

  // FORMAT 2 FUNCTION DECLARATION PATTERN
  // one parameter is expected to be passed in
  // value will be returned to caller
  function ___( ___ ) {
    ___;
    return ___;
  }

  // saving returned value of function call
  // passing one parameter
  var ___ = ___( ___ );
  // losing value of function call because again who cares
  ___( ___ );

  6. If your function RETURNS A VALUE, use the 'return' keyword to provide it to
     the CALLER. The caller might not need it.
  7. A subtlety: if your function does not use the 'return' keyword, it still
     'implicitly returns a value' which is undefined. In other words, functions
     always return _something_, even if it is not defined by your code.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 1 /////////////////////////////////////////////////////////////////
/// defining and invoking a function with no parameters or return value
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// define the function
function printPreamble() {
  const line1 = "Dear Sir or Madam:";
  const line2 = "I am happy to present this proposal to MR. JERK 'JJ' JOHNSON";
  const line3 = "for performing the work of COOKING A STEAK for the";
  const line4 = "tidy sum of $20.00 payable on receipt of meal";
  console.log(line1, line2, line3, line4);
} // printPreamble

// now call the function
printPreamble();

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 1 QUESTIONS

    Q. What is the output of this code up to the point that the function is
       completely declared (at closing bracked // myFunction) but
       BEFORE the function is called?
    Q. What is the output of this code AFTER the function is invoked?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 2 /////////////////////////////////////////////////////////////////
/// adding parameters
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function printPreamble(nameOfAsshole) {
  const line1 = "Dear Sir or Madam:";
  const line2 = "I am happy to present this proposal to " + nameOfAsshole;
  const line3 = "for performing the work of COOKING A STEAK for the";
  const line4 = "tidy sum of $20.00 payable on receipt of meal";
  console.log(line1, line2, line3, line4);
} // printPreamble

printPreamble("Mr. John Azlikker, Esq.");
printPreamble("Ms. Lisa Benthover, M.D.");
printPreamble("Penelope Pantbiter");

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 2 QUESTIONS

    Q. What is the output of this code?
    Q. How would you modify this code to customize 'COOKING A STEAK' and
       '$20.00' and 'meal' using parameters?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 3 /////////////////////////////////////////////////////////////////
/// using returned values
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function printPreamble(nameOfAsshole) {
  const line1 = "Dear Sir or Madam:";
  const line2 = "I am happy to present this proposal to " + nameOfAsshole;
  const line3 = "for performing the work of COOKING A STEAK for the";
  const line4 = "tidy sum of $20.00 payable on receipt of meal";
} // printPreamble

var preamble = printPreamble("MR. JERK 'JJ' JOHNSON");
console.log(preamble);

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 3 QUESTIONS

    Q. What is the code output of this code, as written?
    Q. How would you modify ONLY the function to match the output
       of EXAMPLE 1?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 4 /////////////////////////////////////////////////////////////////
/// using returned values again
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function getPreamble(nameOfAsshole) {
  const line1 = "Dear Sir or Madam:";
  const line2 = "I am happy to present this proposal to " + nameOfAsshole;
  const line3 = "for performing the work of COOKING A STEAK for the";
  const line4 = "tidy sum of $20.00 payable on receipt of meal";
  return line1 + line2 + line3 + line4;
} // getPreamble

var preamble = getPreamble("MR. JERK 'JJ' JOHNSON");
console.log(preamble);

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 4 QUESTIONS

    Q. What is the code output of this code, as written?
    Q. What text formatting bug exists, and how would you fix it?
    Q. Did you notice the changed function name to indicate what it does
       compared to the previous examples?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 5 /////////////////////////////////////////////////////////////////
/// using returned values again, yet again
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function getPreamble(nameOfAsshole) {
  const line1 = "Dear Sir or Madam:";
  const line2 = "I am happy to present this proposal to " + nameOfAsshole;
  const line3 = "for performing the work of COOKING A STEAK for the";
  const line4 = "tidy sum of $20.00 payable on receipt of meal";
  return line1 + " " + line2 + " " + line3 + " " + line4;
} // getPreamble

var letters = [];
letters.push(getPreamble("Mr. John Azlikker, Esq."));
letters.push(getPreamble("Ms. Lisa Benthover, M.D."));
letters.push(getPreamble("Penelope Pantbiter"));

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 5 QUESTIONS

    Q. What is the contents of the letters array?
    Q. How would you use a 'for loop' to print out the contents
       of the letters array using console.log()?
    Q. Hey, did you know console.log() is a function that's been
       pre-defined by the system? The 'log()' function is declared
       as part of the 'console' system object.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 6 /////////////////////////////////////////////////////////////////
/// using returned values again, yet again, last time I promise
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function getPreamble(nameOfAsshole) {
  const line1 = "Dear Sir or Madam:";
  const line2 = "I am happy to present this proposal to " + nameOfAsshole;
  const line3 = "for performing the work of COOKING A STEAK for the";
  const line4 = "tidy sum of $20.00 payable on receipt of meal";
  return line1 + " " + line2 + " " + line3 + " " + line4;
} // getPreamble

function getSignature(nameOfSignatory) {
  return " // signed by " + nameOfSignatory;
  console.log("signed!");
} // getSignature

var letters = [];
letters.push(getPreamble("Mr. John Azlikker, Esq."));
letters.push(getPreamble("Ms. Lisa Benthover, M.D."));
letters.push(getPreamble("Penelope Pantbiter"));

for (var i = 0; i < letters.length; i++) {
  var letter = letters[i];
  letter = letter + getSignature("Sri Nutmoon");
}

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 6 QUESTIONS

    Q. What is the contents of the letters array?
    Q. What would happen if the 'getSignature()' function did not have
       the parameter 'Sri Nutmoon' passed to it?
    Q. What is the console output of this program?
    Q. Are you surprised by this? The 'return' statement not only returns
       a value, but it TERMINATES EXECUTION of the function immediately
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 7A ////////////////////////////////////////////////////////////////
/// functions calling functions calling functions
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function getMeAPenDammit(quantity) {
  var pensToGet;
  var pensArray = [];
  if (quantity === undefined) pensToGet = 1;
  for (var i = 0; i < pensToGet; i++) {
    pensArray.push({
      penColor: "red",
      penLineThickness: "1mm"
    });
  }
  return pensArray;
} // getMeAPenDammit

function getMeACoffeeStat(flavor) {
  if (flavor === undefined) return "plain";
  if (flavor === "vanilla" || flavor === "hazelnut") {
    console.log("warning: these are gross flavors, so we're not serving you");
    return "spitefulness";
  }
  return flavor;
} // getMeACoffeeStat

function serveMeFred(work) {
  if (work === "getpen") return getMeAPenDammit();
  if (work === "getcoffee") return getMeACoffeeStat("banana");
  console.log("I don't understand how to " + work + ", Alex");
} // serveMeFred

// declare a task list for our assistant Fred
var FREDS_TASKS = [{ work: "getpen", quantity: 10 }, { work: "getcoffee", flavor: "vanilla" }];

function runAlexBossProcess(assistantTasks) {
  var task = assistantTasks.pop();
  while (task !== undefined) {
    console.log("requesting help for", task.work);
    serveMeFred(task.work);
    task = task.pop();
  }
} // runAlexBossProcess

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 7A QUESTIONS

    Q. If this code is run as-is, are any of the functions invoked?
    Q. If no functions are invoked, does anything actually get done?

    Q. What is the output if you call the function 'serveMeFred()' with
       NO PASSED PARAMETERS?
    Q. What is the console output when you call serveMeFred("getfunky");
    Q. What is the return value of serveMeFred("getfunky");
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 7B ////////////////////////////////////////////////////////////////
/// using predefined functions from example 7A
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// assume that all the functions defined in 7A are available here
var result = "nothing yet";
result = getMeAPenDammit(10);
result = getMeAPenDammit(1);
result = getMeAPenDammit();
console.log(result);

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 7B QUESTIONS

    Q. What result is printed to the console?
    Q. How would you print just the color of the pen to the console?
    Q. What happened to the results of all the other calls?
    Q. Write code that stores the results in an array, then loops over them
       to print the results.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 7C ////////////////////////////////////////////////////////////////
/// using predefined functions from example 7A
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// assume that all the functions defined in 7A are available here
var results = [];
var result = "nothing yet";

result = getMeAPenDammit(10);
results.push(result);

result = getMeAPenDammit(1);
results.push(result);

result = getMeAPenDammit(3);
results.push(result);

console.log(results[0].penColor, results[1].penColor, results[2].penColor);

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 7C QUESTIONS

    Q. How can you reduce the number of lines of this code without changing
       its console output?
    Q. How can you use a 'for loop' to produce the same output?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 7D ////////////////////////////////////////////////////////////////
/// using predefined functions from example 7A
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// assume that all the functions AND variable declarations in 7A are available
runAlexBossProcess(FREDS_TASKS);
FRED_TASKS.reverse();
runAlexBossProcess(FREDS_TASKS);
FRED_TASKS = [];
runAlexBossProcess(FREDS_TASKS);

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 7D QUESTIONS

    Q. What is the output of this program? Q. How would you explain the
    relationship of AlexBoss with Fred to a non-programmer?

    EXAMPLE 7 ESSAY QUESTIONS

    Understanding even a short program like this takes time, especially if
    functions and variables are not named very well or have ambiguities in their
    meaning.

    A helpful approach to breaking-down a program is to:

    * make a list of every function
    * note what the INPUT is (i.e. the passed parameters)
    * note what the OUTPUT is (i.e. the returned value, if any)
    * include an example of each piece of data's 'shape'. For example, if a
      function returns an object, write out what its typical content and
      orgnization would be.

    Try to identify the "main" functions that call other functions to do its
    building. In this example, the main function is runAlexBossProcess(), which
    accepts an array of objects which vary in their composition, and returns no
    values. The "story" of runAlexBossProcess() in non-programmer terms might be
    "a list of tasks to be passed to an assistant that in-turn delegates the
    actual work he knows how to do to others".

    By preparing a 'cheat sheet' of function names with their input and output
    types, you can refer to it as you read through the code starting from the
    "main" functions you've defined.

    Q. Can you make a cheat sheet entry for getMeACoffeeStat()? Include the
    "story", input parameters, returned values. Also note any limits and
    "typical" values to remind you what to expect.

    Q. In your opinion, are there any bugs or weaknesses in the program or its
    assumptions? How would you address them?

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 8 /////////////////////////////////////////////////////////////////
/// functions as values?!? also introducing JSDOC comment styles
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * Alice always picks blueberry because it's her favorite
 * @returns {string} 'blueberry'
 */
function voteByAlice() {
  return "always blueberry";
}

/**
 * Bob has a 50/50 split picking cherry or apple
 */
function voteByBob() {
  if (Math.random() > 0.5) {
    return "feeling cherry ";
  } else {
    return "hows about apple";
  }
}

// global declaration of flavors
var COMMITTEE_APPROVED_FLAVORS = ["strawberry", "banana", "lemon", "orange cream"];

/**
 * Returns the safest voted flavor by always picking the middle
 * one. Uses the global FLAVORS string array
 * @returns {string} flavor
 */
function voteByComittee() {
  const numFlavors = COMMITTEE_APPROVED_FLAVORS.length;
  // if FLAVORS is an empty array, then pick default
  if (numFlavors === 0) return "vanilla";
  // always pick the MIDDLE flavor
  const pick = Math.floor(numFlavors / 2);
  return COMMITTEE_APPROVED_FLAVORS[pick];
}

// let's do some voting!

var voteFunc = voteByAlice;
console.log("voting run 1:", voteFunc());

voteFunc = voteByComittee();
console.log("voting run 2:", voteFunc());

// someone stuffs the official flavor list with their own agenda...
COMMITTEE_APPROVED_FLAVORS.push("durian", "durian", "durian", "durian", "durian", "durian");
console.log("voting run 3:", voteFunc());

// someone "accidentally" erases the official flavor list
COMITTEE_APPROVED_FLAVORS = [];
// someone else changes the voting logic to exploit the empty flavor list
if (COMITTEE_APPROVED_FLAVORS.length > 0) {
  voteFunc = voteByComittee;
} else {
  voteFunc = function() {
    return "NIXON RULES 1972";
  };
}
console.log("voting run 4:", voteFunc());

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 8 QUESTIONS

    Q. Tell me the story of what the hell is going on here if I am
       a non-programmer!
    Q. What are all the voting results printed to the console log?

    ADDITIONAL NOTES

    Functions are objects. That means that a function declaration can be
    ASSIGNED like any other variable, object, boolean, or array! You can use
    this to do crazy shit like above. There are legitimate uses for using
    'function references' like this (e.g. "onclick" listeners attached
    to browser DOM elements are function references).

    For voting result 4, the voteFunc reference is assigned a function
    that _has no name_; in Javascript (and other languages) this is called
    an 'anonymous function' because it literally doesn't have a name.
    Other than not having a name, it can accept parameters and return values
    like any other function. They are used a lot as "disposable functions"
    in Javascript, because why name something if you're only using it in
    one place? You might think of a function as a 'wrapper' for _FUNCTIONALITY_
    instead of just a math function.

    Examples below!

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 9 /////////////////////////////////////////////////////////////////
/// more on function references
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// function declaration of a 'click handler'
function onClick(event) {
  console.log("user clicked", event.target.innerHTML);
  // event.target is documented on MDN
  // https://developer.mozilla.org/en-US/docs/Web/API/Event/target
}

// create a button element
var btnA = document.createElement("button");
// create an event handler for 'click' on a button
// note that onClick is a FUNCTION REFERENCE as it does not have () after it
btnA.addEventListener("click", onClick);
// give the button a name
btnA.innerHTML = "Button A";
// add button to the end of the current body
body.appendChild(btnA);

/// EXAMPLE 9A ////////////////////////////////////////////////////////////////
/// another way to write the above
/// this time using an anonymous function
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// create a button element
var btnA = document.createElement("button");
btnA.addEventListener("click", function(event) {
  console.log("user clicked", event.target.innerHTML);
});
btnA.innerHTML = "Button A";
body.appendChild(btnA);

/// EXAMPLE 9B ////////////////////////////////////////////////////////////////
/// but what if you wanted to use the same code for TWO buttons?
/// two anonymous functions would be annoying to update, so back to 9
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// function declaration of a 'click handler'
function onClick(event) {
  console.log("user clicked", event.target.innerHTML);
}

// create two button elements
var btnA = document.createElement("button");
var btnB = document.createElement("button");

// 'bind' the same function reference to the click handlers
// for each button
btnA.addEventListener("click", onClick);
btnB.addEventListener("click", onClick);

// finish the buttons
btnA.innerHTML = "Button A";
btnB.innerHTML = "Button B";

// add buttons to end of body
body.appendChild(btnA);
body.appendChild(btnB);

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 9 QUESTIONS

    Q. In all three examples 9, 9A, and 9B, what is printed when you click
       Button A?
    Q. In the onClick() function, can you use a conditional to print a different
       message to the console log based on the value of event.target.innerHTML?
    Q. What are some of the other 'interesting properties' that seem to be
       defined in the event.target property? See
       https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    Q. Can you write a function to create a button, then use it to
       create three buttons 'Alice Vote', 'Bob Vote', and 'Committee Vote'?
    Q. Can you change onClick() to call the voting functions in Example 8?

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/
