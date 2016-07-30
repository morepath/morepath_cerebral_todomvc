import putTodo from '../actions/putTodo'
import overwriteTodoTitle from '../actions/overwriteTodoTitle'
import stopEditingTodo from './stopEditingTodo'
import notifyError from '../factories/notifyError'

export default [
  putTodo, {
    success: [overwriteTodoTitle],
    error: [notifyError('Could not overwrite Todo title')]
  },
  ...stopEditingTodo
]
