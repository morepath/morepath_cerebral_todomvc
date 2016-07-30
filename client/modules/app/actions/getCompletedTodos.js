function getCompleted ({state, output}) {
  const todos = state.get('app.todos')
  const completedTodosRefs = []

  Object.keys(todos).forEach((ref) => {
    if (todos[ref].completed && !todos[ref].$isSaving) {
      completedTodosRefs.push(ref)
    }
  })

  output({
    completedTodosRefs
  })
}

export default getCompleted
