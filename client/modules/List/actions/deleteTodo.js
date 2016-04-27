function deleteTodo({input, state, output, services}) {
  const todo = state.select(`app.list.todos.${input.ref}`);
  const url = todo.get('@id');
  services.http.delete(url)
    .then(output.success)
    .catch(output.error);
}

deleteTodo.async = true;

export default deleteTodo;
