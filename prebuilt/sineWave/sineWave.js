/** generator template file
 * parameters: none
 * returns: {
 *   name,
 *   description,
 *   image,
 *   function definition
 * }
 */
var g = require('g.js');

(function (window) {
  const generatorObj = {
    name: 'Sine Wave Generate',
    description: 'Sine Wave Generator outputs the value in a sine wave pattern given the timestamp',
    image: '',
    functionName: 'sine',
    functionArgs: ['min', 'max','period'],
    generatorFunction: (minAmp, maxAmp, period) => (timestamp) => {
      return g.sineWave(timestamp, minAmp, maxAmp, period)
    }
  }
  testAndAppend(generatorObj) // DO NOT DELETE THIS LINE
})(window)
