const { InvalidInputError } = require('./constants')
/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution (str) {
  if (typeof str !== 'string') {
    throw InvalidInputError
  }
  const charCounterMap = new Map()
  str.split('').forEach((currentChar) => {
    if (currentChar === ' ') {
      return
    }
    const val = charCounterMap.get(currentChar)
    if (val) {
      charCounterMap.set(currentChar, val + 1)
    } else {
      charCounterMap.set(currentChar, 1)
    }
  })
  const found = [...charCounterMap.entries()].find((val) => val[1] === 1)
  return found ? found[0] : null
}

module.exports = solution
