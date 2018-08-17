const exportFunction = function (generatorName) {
  const generatorObj = exportFunction.fn[generatorName]
  if (generatorObj) {
    return exportFunction.fn[generatorName].generatorFunction
  }

  console.error('Generator: ' + generatorName + ' is not found')
  return null
}

exportFunction.fn = {} // this is the prototype of the global generator object

exportFunction.allGenerators = function () {
  return exportFunction.fn
}

module.exports = exportFunction
