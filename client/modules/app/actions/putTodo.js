function putTodo ({input, state, output, services}) {
  const todo = state.select(`app.todos.${input.ref}`)
  const url = todo.get('@id')
  const title = todo.get('$newTitle') || todo.get('title')
  const completed = typeof input.completed === 'boolean' ? input.completed : todo.get('completed')
  const todoObj = {
    title,
    completed
  }
  services.http.put(url, todoObj)
    .then(output.success)
    .catch(output.error)
}

putTodo.async = true
putTodo.outputs = ['success', 'error']

export default putTodo
