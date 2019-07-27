/// OBJECTS ///////////////////////////////////////////////////////////////////
/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  canonical syntax to assign an 'object literal' to a new variable

  var ____ = {                 var bob = {
    ___ : ___ ,                  heightInches : 70,
    ___ : ___                    weightPounds : 200
  };                           }

  1. The first parameter (parm1) is the variable name receiving the object
     declaration that follows.
  2. An object literal is "literally data" that you are defining right
     now.
  3. Between { } is a list of 'key value pairs' separated by commas.
  4. The left side of the : is the key aka 'property'.
  5. The right side of the : is the value that is associated with the key.

  The terminology "key-value pair" is very common in computer programming.
  It refers to the practice of associating a name (property, key) with a
  value that you want to look up later.

  Unlike regular variables, an object can hold more than one value, which
  makes them convenient for collecting related values under a single
  name. An object can store values of the base types (number, string)
  as well as other objects.

  Objects use a hierarchical addressing scheme similar to a file's
  directory pathname. Instead of /, object addressing uses dots.
  This is called 'object dot notation'

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 1 /////////////////////////////////////////////////////////////////
/// storing information about food items using simple variables
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var applePrice = 1.99;
var appleDesc = "This delicious apple is from Washington State";
var cakePrice = 12.99;
var cakeDesc = "This cake is baked by actual elven princesses";

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 1 QUESTIONS

    Q. How would you handle 100 food items using variables?
    Q. Is life worth living doing this with variables?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 2 /////////////////////////////////////////////////////////////////
/// storing prices of food items using objects
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var apple = {
  price: 1.99,
  desc: "This delicious apple is from Washington State"
};
var cake = {
  price: 12.99,
  desc: "This cake is baked by actual elven princesses"
};

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 2 QUESTIONS

    Q. Is there a limit to the number of properties (e.g price, desc) stored
       in each object?
    Q. Other than numbers and strings, what other kinds of values can you
       store in these objects?
    Q. Is this any "better" than variables to handle 100 different items?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 3 /////////////////////////////////////////////////////////////////
/// accessing properties of objects
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var apple = {
  price: 1.99,
  desc: "This delicious apple is from Washington State"
};
var cake = {
  price: 12.99,
  desc: "This cake is baked by actual elven princesses"
};
console.log("apple price:", apple.price, "apple desc:", apple.desc);
console.log("cake price:", cake.price, "cake desc:", cake.desc);
console.log("total price:", apple.price + cake.price);

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 3 QUESTIONS

    Q. How would you change the code to only print the price of a food
       item only if it was more than 5.00?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 4 /////////////////////////////////////////////////////////////////
/// adding properties to an existing object
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var apple = {
  price: 1.99,
  desc: "This delicious apple is from Washington State"
};
console.log(apple.wtGrams); // prints undefined
apple.wtGrams = 200; // adds a new property 'wtGrams' with value 200
console.log(apple.wtGrams); // prints 200

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 4 QUESTIONS

    Q. Is the ability to add a property to an object just by writing to it
       a good idea? How would you protect against accidental misspellings?
    Q. How might you use an 'if statement' to check for the existence of
       a property before writing to it?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 5 /////////////////////////////////////////////////////////////////
/// reading properties from an object
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var apple = {
  price: 1.99,
  desc: "This delicious apple is from Washington State",
  nutrition: {
    sugarGrams: 200,
    fiberOz: 50,
    fatOz: 0
  },
  suppliers: [
    "Jones Farm",
    "Petes Farm",
    "Megs Farm",
    {
      name: "Super Farm",
      owner: "Fred Ahzmeuncher",
      tel: "603-123-4566"
    }
  ]
};
console.log(apple.price); // prints 1.99
console.log(apple.nutrition.sugarGrams); // prints 200
console.log(apple.suppliers.owner); // javascript error

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 5 QUESTIONS

    Q. why does the third console.log() statement fail?
    Q. How would you access the 'tel' property using a mix of object dot
       notation and array indexing? Array indexing just means using
       [] notation.
    Q. Is it clearer to write everything on one long line, or to break it
       up into multiple lines?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 6 /////////////////////////////////////////////////////////////////
/// nested objects
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var container = {
  name: "big container",
  apple: {
    price: 1.99,
    desc: "This delicious apple is from Washington State"
  },
  cake: {
    price: 12.99,
    desc: "This cake is baked by actual elven princesses"
  }
};
// print the price of cake
console.log("cake price", container.cake.price);
// change the price to be 2x cost of an apple
container.cake.price = container.apple.price * 2;
console.log("cake price", container.cake.price);

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 6 QUESTIONS
    Q. What is the printed console output of the program?
    Q. Why is the 'total value of shipment' undefined?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/

/// EXAMPLE 7 /////////////////////////////////////////////////////////////////
/// objects containing arrays
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var container = {
  id: "shipment1012",
  items: []
};
container.items.push({
  name: "apple",
  price: 1.99,
  desc: "This delicious apple is from Washington State"
});
container.items.push({
  name: "cake",
  Price: 12.99,
  desc: "This cake is baked by actual elven princesses"
});
var totalValue = 0;
console.log("contents of container shipment " + container.id);
for (var i = 0; i < container.items.length; i++) {
  var item = container.items[i];
  console.log("item #" + i + " is a " + item.name);
  totalValue = totalValue + item.price;
}
console.log("total value of shipment " + totalValue);

/*/ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    EXAMPLE 7 QUESTIONS
    Q. What is the printed console output of the program?
    Q. Why is the 'total value of shipment' undefined?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - /*/
