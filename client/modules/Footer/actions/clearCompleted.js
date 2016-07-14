function clearCompleted ({input}) {
  input.completedTodos.forEach((todo) => {
    todo.unset()
  })
}

export default clearCompleted
