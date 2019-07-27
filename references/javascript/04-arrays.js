/// ARRAYS ////////////////////////////////////////////////////////////////////
/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Arrays are a more complex DATA TYPE than booleans, strings, and numbers.

  * An array is a data structure that is like a box containing nunbered
    slots. The slots are numbered starting from 0 to the length of the
    array.
  * Arrays are also like "magical boxes of holding" in that they can expand
    to fit the number of items you put in them.
  * Arrays are used to represent lists of items, a common task in managing
    data.

  canonical syntax for declaring a variable initialized with an array:

  var _arr_ = [ __ , __ , __ ];

  1. As with any variable, it appears on the left side of the = 'assignment
     operator'. This establishes the NAME of the variable.
  2. On the right side of the = assignment operator is the VALUE that will
     be saved in the variable NAME.
  3. An 'array literal' always looks like [ __ , __ , __ ] for assignment.
  4. The contents between the [ ] is a LIST of items, separated by commas.
  canonical syntax for reading elements of an array.

  canonical syntax for reading a specific value of an array:

  var _item_ = __[ __ ];

  5. In Javascript, the first element of an array is numbered 0.
  6. Accessing elements in an array use the [ ] in another way to accept
     the INDEX, which is always an integer 0 or higher.

  There are many ways to access data in an array beyond the basic syntax.
  Arrays in Javascript also have a lot of built-in convenience functions
  that are useful in modeling real-world uses of lists. The best documentation
  for seeing everything is on the left side of the Array reference of MDN:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 1 /////////////////////////////////////////////////////////////////
/// creating an array using simple 'array literal' syntax
/// retrieving values from an array using simple 'array indexing' syntax
/// NOTE that both methods use [ ]. When you see [ ] after a variable, it
/// means the code is treating it as an array.
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// declare an array using 'array literal' syntax
var listOfCharacters = ["Kylo", "Rey", "Han", "Leia", "Poe", "Star Lord"];
// retrieve the 0th item of the array
var item0 = listOfCharacters[0];
// retrieve 'Han' from the array
var item2 = listofCharacters[2];
// retrieve 9th element of the array
var item9 = listOfCharacters[9];
// do some list housekeeping
var item5 = listOfCharacters[5];
console.log("who the hell is", item5);
listOfCharacters[5] = "Finn";
var newItem5 = listOfCharacters[5];
console.log("I have changed him from", item5, "to", newItem5);
listOfCharacters[5] = "Luke";

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 1 QUESTIONS

    Q. What index is 'Leia' in the listOfCharacters array?
    Q. Why is the value of item9 undefined?
    Q. Why is item5 and newItem5 different?
    Q. Do item5, newItem5, and listOfCharacters[5] match or differ by
       the end of the code snippet?

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 2 /////////////////////////////////////////////////////////////////
/// finding how many items are in an array
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var weddingGuests = ["Alice", "Bob", "Charlie", "Don", "Eunice"];
var numberOfGuests = weddingGuests.length;

// loop over the guest list and print them out
for (var i = 0; i < numberOfGuests; i++) {
  console.log(weddingGuests[i]);
}
console.log("There are", numberOfGuests, "people coming to the wedding");

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 2 NOTED

    * Going through all the items in an array is called 'iterating over
      the array'.
    * The 'length' property is a read-only value. It changes depending
      on how many values are stored in the array.
    * For most programming tasks, the length property is the only property
      you will use.
    * For more complicated array operations like sorting, finding, etc,
      you will use the built-in array methods. There's a list of them
      on the MDN Array documentation page.

    We'll go through a few common examples next.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 4 /////////////////////////////////////////////////////////////////
/// common list operations

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 2 QUESTIONS
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 2 /////////////////////////////////////////////////////////////////
/// common list operations

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 2 QUESTIONS
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 2 /////////////////////////////////////////////////////////////////
/// common list operations

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 2 QUESTIONS
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 2 /////////////////////////////////////////////////////////////////
/// common list operations

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 2 QUESTIONS
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/
