const { InvalidInputError } = require('./constants')

/**
 * This function returns the values of the input object as an array
 * @param {object} obj
 */
function solution (obj) {
  if (!obj || obj === null || Array.isArray(obj) || typeof obj !== 'object') {
    throw InvalidInputError
  }
  return Object.values(obj)
}

module.exports = solution
