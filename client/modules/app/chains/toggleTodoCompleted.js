import putTodo from '../actions/putTodo'
import toggleTodoCompleted from '../actions/toggleTodoCompleted'
import notifyError from '../factories/notifyError'

export default [
  putTodo, {
    success: [toggleTodoCompleted],
    error: [notifyError('Could not toggle the completed status of Todo')]
  }
]
