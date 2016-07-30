function clearCompleted ({input, state}) {
  input.completedTodosRefs.forEach((ref) => {
    state.unset(`app.todos.${ref}`)
  })
}

export default clearCompleted
