function deleteTodo ({input, state, output, services}) {
  const todo = state.select(`app.todos.${input.ref}`)
  const url = todo.get('@id')
  services.http.delete(url)
    .then(output.success)
    .catch(output.error)
}

deleteTodo.async = true
deleteTodo.outputs = ['success', 'error']

export default deleteTodo
