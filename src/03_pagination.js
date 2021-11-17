const { InvalidInputError } = require('./constants')

/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution (pageNumber, itemsPerPage, pageData) {
  if (itemsPerPage < 0) throw InvalidInputError
  const startIndex = pageNumber > 0 ? (pageNumber - 1) * itemsPerPage : 0
  if (startIndex > data.length) return null
  const endIndex = startIndex + itemsPerPage
  return data.filter((dataItem, index) => index >= startIndex && index < endIndex)
}

const data = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

module.exports = { solution, data }
