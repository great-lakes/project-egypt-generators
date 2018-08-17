const _g_ = require('./prototype')
const sineWave = require('./prebuilt/sineWave')

// import prebuilt generators
console.log(_g_)
_g_.fn.sine = sineWave

module.exports = _g_
