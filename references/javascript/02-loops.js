/// FOR LOOPS /////////////////////////////////////////////////////////////////
/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  canonical syntax:

  for ( ___ ; ___ ; ___ ) {
    ___
  }

  1. The starting value is set in the 1st parameter (var counter=0)
  2. The ending condition is in the 2nd parameter (counter < 10)
  3. The stepping expression is established in the 3rd parameter (counter=counter+1)
  4. You can put ANY code statement(s) between the { } to repeat their execution

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 1 /////////////////////////////////////////////////////////////////
/// A "for loop" counter that repeats 3 times, output 0 1 2
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

for (var counter = 0; counter < 3; counter = counter + 1) {
  // statement(s) go here
  console.log(counter); // prints the value of counter
}

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 1 QUESTIONS

    (1) If counter=0 is changed to counter=1, how will output change?
    (2) If 1st parameter (parm1) is changed to "counter = 3" and parm2 is
        changed to "counter < 6", how many times does the code inside
        the { } run?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 2 /////////////////////////////////////////////////////////////////
/// a backwards "for loop" counter that repeats 3 times, output 3 2 1
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

for (var counter = 3; counter > 0; counter = counter - 1) {
  console.log(counter); // prints the value of counter
}

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 2 QUESTIONS

    (3) if parm3 'counter = counter - 1' is replaced with 'counter++', how
        many times will the loop run?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 3 /////////////////////////////////////////////////////////////////
/// nested loops
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

for (var i = 1; i <= 3; i++) {
  for (var j = 3; j >= 0; j--) {
    console.log("loop " + i + "," + j);
  } // for j
} // for i

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 3 QUESTIONS

    (4) How many times does the outer loop (for i) run?
    (5) How many times does the inner loop (for j) run?
    (6) How many lines does the console.log() statement print?
    (7) What is the console.log output?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 4 /////////////////////////////////////////////////////////////////
/// variable length counters
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var start = 0;
var end = 3;
for (var i = start; i < end; i++) {
  console.log(start, end, i);
}

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 4 QUESTIONS

    (8) What is the complete output of the code snippet?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 5/////////////////////////////////////////////////////////////////
/// variable length counters trickery
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var start = 0;
var end = 3;
for (var i = start; i < end; i++) {
  end = end + 1;
  console.log(start, end, i);
}
/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 5 QUESTIONS

    (9) How many times does the loop run?
   (10) What kind of bullshit is this?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 6 /////////////////////////////////////////////////////////////////
/// iterating over an array
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var namesArray = ["Alice", "Bob", "Charlie"];
var namesLength = namesArray.length;
for (var i = 0; i < namesLength; i++) {
  console.log(namesArray[i]);
}
/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 6 QUESTIONS

    (11) What is the output of this program?
    (12) How would you modify the program to print the names in reverse order?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 7 /////////////////////////////////////////////////////////////////
/// advanced example iterating over an array with fancy conditions
/// see the conditionals.js file to read about conditions
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var namesArray = ["Alice", "Bob", "Ben", "Adam", "Fred"];
var beginsWithA = [];
var beginsWithB = [];
var beginsWithC = [];
for (var i = 0; i < namesArray.length; i++) {
  var name = namesArray[i];
  var firstLetter = name.charAt(0);
  switch (firstLetter) {
    case "A":
      beginsWithA.push(name);
      break;
    case "B":
      beginsWithB.push(name);
      break;
    case "C":
      beginsWithC.push(name);
      break;
    default:
      console.log("Name " + name + " does not begin with A or B");
  } // switch (firstLetter) ...
} // for i ...

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 7 QUESTIONS

    (13) What is the output of the program? How many lines are printed?
    (14) What is the contents of the beginsWithA array after the program runs?
    (15) What is the contents of beginsWithC array after the program runs?
    (16) How would you handle both upper and lowercase characters?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/
