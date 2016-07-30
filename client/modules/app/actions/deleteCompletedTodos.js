function deleteCompleted ({input, state, output, services}) {
  input.completedTodosRefs.forEach((ref) => {
    const url = state.get(`app.todos.${ref}.@id`)
    services.http.delete(url)
      .then(output.success)
      .catch(output.error)
  })
}

deleteCompleted.async = true
deleteCompleted.outputs = ['success', 'error']

export default deleteCompleted
