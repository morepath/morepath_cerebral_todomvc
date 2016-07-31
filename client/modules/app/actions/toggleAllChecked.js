function toggleAllChecked ({input, state}) {
  input.currentTodosRefs.forEach((ref) => {
    state.set(`app.todos.${ref}.completed`, input.isCompleted)
  })
}

export default toggleAllChecked
