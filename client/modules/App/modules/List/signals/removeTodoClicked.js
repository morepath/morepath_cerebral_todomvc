import deleteTodo from '../actions/deleteTodo.js';
import removeTodo from '../actions/removeTodo.js';
import setDeleteError from '../actions/setDeleteError.js';

export default [
  deleteTodo, {
    success: [removeTodo],
    error: [setDeleteError],
  },
];
