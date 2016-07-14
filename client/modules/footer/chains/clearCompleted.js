import getCompleted from '../actions/getCompleted.js'
import deleteCompleted from '../actions/deleteCompleted.js'
import clearCompleted from '../actions/clearCompleted.js'
import setDeleteError from '../../list/actions/setDeleteError.js'

export default [
  getCompleted,
  deleteCompleted, {
    success: [clearCompleted],
    error: [setDeleteError]
  }
]
