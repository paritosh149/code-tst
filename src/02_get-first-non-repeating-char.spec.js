const solution = require('./02_get-first-non-repeating-char')
const { InvalidInputError } = require('./constants')

test('Test 1 - "this is the string"', () => {
  expect(solution('this is the string')).toBe('e')
})

test('Test 2 - "persuit is a good place to work"', () => {
  expect(solution('persuit is a good place to work')).toBe('u')
})

test('Test 3 - "we have free coffee"', () => {
  expect(solution('we have free coffee')).toBe('w')
})

test('Test 4 - Non-string object should throw Error', () => {
  expect(() => solution({})).toThrow(InvalidInputError)
})

test('Test 5 - String with no unique character should return null', () => {
  expect(solution('aa ee')).toBe(null)
})
