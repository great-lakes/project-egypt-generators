const _g_ = require('../index')

let sineGenerator = _g_('sine')

console.log(sineGenerator)

_g_.fn.sawtooth = {
  name: '{Descriptive Name}',
  description: '{Generator Description}',
  image: '{Image link}',
  functionName: 'sawtooth',
  functionArgs: ['Paramater argument names; array of string'],
  generatorFunction: (functionParamters) => (timestamp) => {}
}

let sawtoothGenerator = _g_('sawtooth')

console.log(sawtoothGenerator)

let generatorsArray = _g_.allGenerators()

console.log(generatorsArray)

// look into jest
