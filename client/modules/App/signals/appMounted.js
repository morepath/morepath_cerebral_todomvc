import setLoadingTodos from '../actions/setLoadingTodos.js';
import getTodos from '../actions/getTodos.js';
import setTodos from '../actions/setTodos.js';
import setTodosError from '../actions/setTodosError.js';
import unsetLoadingTodos from '../actions/unsetLoadingTodos.js';

export default [
  setLoadingTodos,
  getTodos, {
    success: [setTodos],
    error: [setTodosError],
  },
  unsetLoadingTodos,
];
