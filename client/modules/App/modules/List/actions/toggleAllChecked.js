function toggleAllChecked({state}) {
  const isCompleted = !state.get('app.list.isAllChecked');
  const todos = state.get('app.list.todos');

  Object.keys(todos).forEach((key) => {
    const todo = todos[key];
    state.set(`app.list.todos.${todo.$ref}.completed`, isCompleted);
  });

  state.set('app.list.isAllChecked', isCompleted);
}

export default toggleAllChecked;
