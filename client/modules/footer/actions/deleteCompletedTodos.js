function deleteCompleted ({input, state, output, services}) {
  input.completedTodosKeys.forEach((key) => {
    const url = state.get(`app.list.todos.${key}.@id`)
    services.http.delete(url)
      .then(output.success)
      .catch(output.error)
  })
}

deleteCompleted.async = true

export default deleteCompleted
