import getTodos from '../actions/getTodos'
import setTodos from '../actions/setTodos'
import notifyError from '../factories/notifyError'

export default [
  getTodos, {
    success: [setTodos],
    error: [notifyError('Could not fetch Todos from server')]
  }
]
