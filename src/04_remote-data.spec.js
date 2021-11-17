const solution = require('./04_remote-data')

test('all users have been accounted for', async () => {
  // Arrange
  const expected = 10

  // Act
  const actual = await solution()

  // Assert
  expect(actual.length).toBe(expected)
})

test('each user has username and Completed properties with expected types', async () => {
  // Arrange
  const expectedUserNameType = 'string'
  const expectedCompletedType = 'number'
  // Act
  const actual = await solution()

  // Assert
  actual.forEach(user => {
    expect(typeof user.username).toBe(expectedUserNameType)
    expect(typeof user.completed).toBe(expectedCompletedType)
  })
})
