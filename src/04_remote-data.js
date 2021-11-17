const got = require('got')
/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
async function solution () {
  try {
    const todos = await got('https://jsonplaceholder.typicode.com/todos', { responseType: 'json' })
    const completedTodos = [...todos.body].filter(todo => todo.completed)

    const users = await got('https://jsonplaceholder.typicode.com/users', { responseType: 'json' })

    return [...users.body].map(user => {
      return {
        username: user.username,
        completed: completedTodos.reduce((acc, current) => {
          if (current.userId === user.id) {
            return acc + 1
          }
          return acc
        }, 0)
      }
    })
  } catch (error) {
    console.log('Error', error.response.body)
  }
}

module.exports = solution
