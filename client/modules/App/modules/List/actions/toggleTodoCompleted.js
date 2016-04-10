function toggleTodoCompleted({input, state}) {
  const todo = state.select(`app.list.todos.${input.ref}`);
  todo.set('completed', input.completed);
}

export default toggleTodoCompleted;
