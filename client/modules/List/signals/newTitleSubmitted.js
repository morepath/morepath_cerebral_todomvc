import putTodo from '../actions/putTodo.js';
import overwriteTodoTitle from '../actions/overwriteTodoTitle.js';
import setPutError from '../actions/setPutError.js';
import stopEditingTodo from '../actions/stopEditingTodo.js';

export default [
  putTodo, {
    success: [overwriteTodoTitle],
    error: [setPutError],
  },
  stopEditingTodo,
];
