function putToggleAll ({input, state, output, services}) {
  input.currentTodosRefs.forEach((ref) => {
    const todo = state.select(`app.todos.${ref}`)
    const url = todo.get('@id')
    const todoObj = {
      title: todo.get('title'),
      completed: input.isCompleted
    }
    services.http.put(url, todoObj)
      .then(output.success)
      .catch(output.error)
  })
}

putToggleAll.async = true

export default putToggleAll
