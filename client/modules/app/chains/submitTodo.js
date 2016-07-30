import {set} from 'cerebral/operators'

import createTodo from '../actions/createTodo'
import postTodo from '../actions/postTodo'
import updateTodo from '../actions/updateTodo'
import markTodoFailed from '../actions/markTodoFailed.js'
import notifyError from '../factories/notifyError'

export default [
  createTodo,
  set('app.newTodoTitle', ''),
  postTodo, {
    success: [updateTodo],
    error: [
      markTodoFailed,
      notifyError('Could not submit new Todo to server')
    ]
  }
]
