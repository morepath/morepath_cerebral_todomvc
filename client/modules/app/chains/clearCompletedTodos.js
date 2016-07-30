import getCompletedTodos from '../actions/getCompletedTodos'
import deleteCompletedTodos from '../actions/deleteCompletedTodos'
import clearCompletedTodos from '../actions/clearCompletedTodos'
import notifyError from '../factories/notifyError'

export default [
  getCompletedTodos,
  deleteCompletedTodos, {
    success: [clearCompletedTodos],
    error: [notifyError('Could not clear completed Todos')]
  }
]
