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
  console.log('inside generator function');
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
  globalGenerators.push(generatorObj); //test line
})(window)
