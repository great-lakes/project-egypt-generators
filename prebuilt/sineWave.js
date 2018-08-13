/** generator template file
 * parameters: none
 * returns: {
 *   name,
 *   description,
 *   image,
 *   function definition
 * }
 */
var waveGen = require('g.js')

module.exports = {
  name: 'Sine Wave Generator',
  description: 'Sine Wave Generator outputs the value in a sine wave pattern given the timestamp',
  image: '',
  functionName: 'sine',
  functionArgs: ['min', 'max', 'period'],
  generatorFunction: (minAmp, maxAmp, period) => (timestamp) => {
    return waveGen.sineWave(timestamp, minAmp, maxAmp, period)
  }
}
