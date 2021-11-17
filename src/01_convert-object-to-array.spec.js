const solution = require('./01_convert-object-to-array')
const { InvalidInputError } = require('./constants')
const generateData = () => {
  const expected = []
  const input = {}

  for (let index = 0; index < 100; index++) {
    const val = Math.random()
    input[`prop_${index}`] = val
    expected.push(val)
  }

  return { input, expected }
}

test('should convert an object into array of values', () => {
  // Arrange
  const input = { foo: 123, bar: 456, baz: 789 }
  const expected = [123, 456, 789]

  // Act
  const actual = solution(input)

  // Assert
  expect(actual).toEqual(expected)
})

test('should convert a dynamically created object to array', () => {
  // Arrange
  const { input, expected } = generateData()

  // Act
  const actual = solution(input)

  // Assert
  expect(actual).toEqual(expected)
})

test('should throw error for non-object input - Array', () => {
  // Arrange
  const input = []
  // Act
  const throwsError = () => solution(input)
  // Assert
  expect(throwsError).toThrow(InvalidInputError)
})

test('should throw error for non-object input - Undefined', () => {
  // Arrange
  const input = undefined
  // Act
  const throwsError = () => solution(input)
  // Assert
  expect(throwsError).toThrow(InvalidInputError)
})

test('should throw error for non-object input - Null', () => {
  // Arrange
  const input = null
  // Act
  const throwsError = () => solution(input)
  // Assert
  expect(throwsError).toThrow(InvalidInputError)
})

test('should throw error for non-object input - Number', () => {
  // Arrange
  const input = 999
  // Act
  const throwsError = () => solution(input)
  // Assert
  expect(throwsError).toThrow(InvalidInputError)
})

test('should throw error for non-object input - Boolean', () => {
  // Arrange
  const input = true
  // Act
  const throwsError = () => solution(input)
  // Assert
  expect(throwsError).toThrow(InvalidInputError)
})

test('should throw error for non-object input - String', () => {
  // Arrange
  const input = 'object string'
  // Act
  const throwsError = () => solution(input)
  // Assert
  expect(throwsError).toThrow(InvalidInputError)
})

test('should throw error for non-object input - Symbol', () => {
  // Arrange
  const input = Symbol('Symbol1')
  // Act
  const throwsError = () => solution(input)
  // Assert
  expect(throwsError).toThrow(InvalidInputError)
})

test('should throw error for non-object input - Function', () => {
  // Arrange
  const input = () => { }
  // Act
  const throwsError = () => solution(input)
  // Assert
  expect(throwsError).toThrow(InvalidInputError)
})
