import uuid from 'uuid'

function setTodos ({input, state, services}) {
  input.result.todos.forEach((todo) => {
    const ref = uuid.v4()
    todo.$isSaving = false
    state.set(`app.todos.${ref}`, todo)
  })
}

export default setTodos
