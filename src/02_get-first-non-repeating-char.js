/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution (str) {
  const map1 = new Map()
  str.split('').forEach((currentChar) => {
    const val = map1.get(currentChar)
    if (val) {
      map1.set(currentChar, val + 1)
    } else {
      map1.set(currentChar, 1)
    }
  })
  const entries = [...map1.entries()]
  let found = ''
  entries.forEach((val) => {
    if (found.length === 0 && val[1] === 1) {
      found = val[0]
    }
  })
  return found
}

module.exports = solution
