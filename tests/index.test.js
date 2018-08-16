/* global expect test */
const _g_ = require('../index')

test('access sine generator', () => {
  let sineGenerator = _g_('sine')
  expect(typeof sineGenerator).toEqual('function')

  // console.log(sineGenerator)
})

test('add new generator and access it', () => {
  _g_.fn.sawtooth = {
    name: '{Descriptive Name}',
    description: '{Generator Description}',
    image: '{Image link}',
    functionName: 'sawtooth',
    functionArgs: ['Paramater argument names; array of string'],
    generatorFunction: (functionParamters) => (timestamp) => {}
  }
  expect(_g_.fn).toHaveProperty('sawtooth')

  let sawtoothGenerator = _g_('sawtooth')
  expect(typeof sawtoothGenerator).toEqual('function')
})

test('attempt to access generator but misspelled', () => {
  let sawtoothGenerator = _g_('sawtoth')
  expect(sawtoothGenerator).toBe(null)
})

test('return all generators', () => {
  let generatorsArray = _g_.allGenerators()
  expect(generatorsArray).toHaveProperty('sine')
  expect(generatorsArray).toHaveProperty('sawtooth')
})
