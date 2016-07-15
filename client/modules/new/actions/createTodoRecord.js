function createTodoRecord ({ input, state }) {
  const todo = {
    $ref: input.ref,
    $isSaving: true,
    title: state.get('app.new.title'),
    completed: false
  }

  state.set(`app.list.todos.${input.ref}`, todo)
}

export default createTodoRecord
