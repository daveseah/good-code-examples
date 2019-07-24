/*///////////////////////////////// ABOUT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

  class-sampleclass.js is an ECMAscript-style module that exports a
  class declaration.

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ * /////////////////////////////////////*/

/// PRIVATE DECLARATIONS //////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const m_instances = [];
let m_id = 0;

/// CLASS DECLARATION /////////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class SampleClass {
  constructor() {
    const digits = `${m_id}`.padStart(2, "0");
    this.id = `instance${digits}`;
    ++m_id;
    m_instances.push(this);
  }

  getId() {
    return this.id;
  }
} // SampleClass

/// STATIC CLASS METHODS ///////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
SampleClass.InstanceArrayLength = () => {
  return m_instances.length;
};

/// STATIC CLASS INITIALIZATION ///////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
SampleClass.PREFIX = "Sunny_";

/// EXPORT CLASS //////////////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export default SampleClass;
