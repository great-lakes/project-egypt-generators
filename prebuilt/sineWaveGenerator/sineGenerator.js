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
  const generatorObj = {
    name: 'Sine Wave Generate',
    description: 'Sine Wave Generator outputs the value in a sine wave pattern given the timestamp',
    image: '',
    generatorFunction: (minAmp, maxAmp, period) => (timestamp) => {
      // convert timestamp into ms, int value
      // (timestamp_int % (pi * 2)) - pi
      // -pi < result < pi

      return 1
    }
  }
  
  __testAndAppend__(generatorObj); //DO NOT DELETE THIS LINE
})(window)
