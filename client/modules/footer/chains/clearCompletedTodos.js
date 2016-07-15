import getCompletedTodos from '../actions/getCompletedTodos.js'
import deleteCompletedTodos from '../actions/deleteCompletedTodos.js'
import clearCompletedTodos from './../actions/clearCompletedTodos.js'
import setDeleteError from '../../list/actions/setDeleteError.js'

export default [
  getCompletedTodos,
  deleteCompletedTodos, {
    success: [clearCompletedTodos],
    error: [setDeleteError]
  }
]
