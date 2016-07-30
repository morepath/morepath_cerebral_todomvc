import deleteTodo from '../actions/deleteTodo'
import removeTodo from '../actions/removeTodo'
import notifyError from '../factories/notifyError'

export default [
  deleteTodo, {
    success: [removeTodo],
    error: [notifyError('Could not remove Todo')]
  }
]
