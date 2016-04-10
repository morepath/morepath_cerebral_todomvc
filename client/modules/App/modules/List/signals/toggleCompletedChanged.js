import putTodo from '../actions/putTodo.js';
import toggleTodoCompleted from '../actions/toggleTodoCompleted.js';
import setPutError from '../actions/setPutError.js';

export default [
  putTodo, {
    success: [toggleTodoCompleted],
    error: [setPutError],
  },
];
