function postTodo ({input, state, output, services}) {
  const todo = state.get(`app.list.todos.${input.ref}`)

  services.http.post('/api/todos', todo)
    .then(output.success)
    .catch(output.error)
}

postTodo.async = true

export default postTodo
