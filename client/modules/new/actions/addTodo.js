function addTodo ({state, output, services}) {
  const ref = services.refs.next(state)
  const todo = {
    $ref: ref,
    $isSaving: true,
    title: state.get('app.new.title'),
    completed: false
  }

  state.set(`app.list.todos.${ref}`, todo)
  state.set('app.new.title', '')

  output({
    ref
  })
}

export default addTodo
