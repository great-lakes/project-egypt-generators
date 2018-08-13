/** generator template file
 * parameters: none
 * returns: {
 *   name,
 *   description,
 *   image,
 *   function definition
 * }
 */

(function (window) {
  const functionName = '{Function Name; no spaces; camel case}'
  const generatorObj = {
    name: '{Descriptive Name}',
    description: '{Generator Description}',
    image: '{Image link}',
    functionName,
    functionArgs: ['Paramater argument names; array of string'],
    generatorFunction: (functionParamters) => (timestamp) => {}
  }

  _g_.fn[functionName] = generatorObj;  //DO NOT DELETE OR MODIFY THIS LINE
})(window)
