function getCompleted ({state, output}) {
  const todos = state.get('app.list.todos')
  const completedTodos = []

  Object.keys(todos).forEach((key) => {
    if (todos[key].completed && !todos[key].$isSaving) {
      const todo = state.select(`app.list.todos.${key}`)
      completedTodos.push(todo)
    }
  })

  output({
    completedTodos
  })
}

export default getCompleted
