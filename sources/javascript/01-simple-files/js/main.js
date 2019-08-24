/*///////////////////////////////// ABOUT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

  01 SIMPLE FILES

  main.js is loaded from index.html with a simple script tag in index.html
  as follows:
  <script src="js/main.js"></script>

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ * /////////////////////////////////////*/

/// INITIALIZATION ////////////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// define a function to collect text for printing to the javascript
// console and a div in the document
function printToDiv(str) {
  const div = document.getElementById("codeoutput");
  if (div !== undefined) div.innerHTML += str + "\n";
  else console.log("failed to print:", "'" + str + "'");
}

/// EVENT HOOKS ///////////////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// We have to wait until the web browser has finished loading and drawing the
// initial page layout before we can manipulate it. This is accomplished by
// "listening for" a particular event, in this case the 'DOMContentLoaded'
// which "fires" to run our code when the condition is ready.
window.addEventListener("DOMContentLoaded", function () {
  // use our previously-defined function
  printToDiv("script in DOMContentLoaded event listener called printToDiv()");
});
