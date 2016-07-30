function updateTodo ({input, state}) {
  state.merge(`app.todos.${input.ref}`, {
    '@id': input.result['@id'],
    $isSaving: false
  })
}

export default updateTodo
