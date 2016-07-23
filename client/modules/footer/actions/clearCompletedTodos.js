function clearCompleted ({input, state}) {
  input.completedTodosKeys.forEach((key) => {
    state.unset(`app.list.todos.${key}`)
  })
}

export default clearCompleted
