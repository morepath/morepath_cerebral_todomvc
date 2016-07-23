function getCompleted ({state, output}) {
  const todos = state.get('app.list.todos')
  const completedTodosKeys = []

  Object.keys(todos).forEach((key) => {
    if (todos[key].completed && !todos[key].$isSaving) {
      completedTodosKeys.push(key)
    }
  })

  output({
    completedTodosKeys
  })
}

export default getCompleted
