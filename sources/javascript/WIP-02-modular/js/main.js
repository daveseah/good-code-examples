/*///////////////////////////////// ABOUT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

  main.js is loaded from index.html as an ECMAscript module as follows:
  <script type="module" src="js/main.js"></script>

  This script runs AFTER index.html has completely rendered; this is the
  default way that ECMAscript modules are handled by the browser.

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ * /////////////////////////////////////*/

/// LIBRARIES /////////////////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { Greeting, PrintDiv, CountClassInstances, GetClassInstances } from "./modules/sample-module";

/// INITIALIZATION ////////////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const greetingText = Greeting();
PrintDiv(greetingText);
const numInstances = CountClassInstances();
PrintDiv(`counted ${numInstances} class instances`);
const instancesArray = GetClassInstances();
for (let i = 0; i < instancesArray.length; i++) {
  PrintDiv(`${i} - ${instancesArray[i].getId()}`);
}
