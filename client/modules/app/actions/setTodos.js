function setTodos ({input, state, services}) {
  input.result.todos.forEach((todo) => {
    const ref = services.refs.next(state)
    todo.$ref = ref
    todo.$isSaving = false

    state.set(`app.list.todos.${ref}`, todo)
  })
}

export default setTodos
