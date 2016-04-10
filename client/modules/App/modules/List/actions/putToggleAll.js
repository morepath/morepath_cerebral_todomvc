function putToggleAll({state, output, services}) {
  const completed = !state.get('app.list.isAllChecked');
  const todos = state.get('app.list.todos');

  Object.keys(todos).forEach((ref) => {
    const todo = state.select(`app.list.todos.${ref}`);
    const url = todo.get('@id');
    const todoObj = {
      title: todo.get('title'),
      completed,
    };
    services.http.put(url, todoObj)
      .then(output.success)
      .catch(output.error);
  });
}

putToggleAll.async = true;

export default putToggleAll;
