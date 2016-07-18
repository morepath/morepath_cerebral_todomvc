function markTodoFailed ({input, state}) {
  state.merge(`app.list.todos.${input.ref}`, {
    $isSaving: false,
    $error: input.result.error
  })
}

export default markTodoFailed
