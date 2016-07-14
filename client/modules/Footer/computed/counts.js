export default function (get) {
  const todos = get(['app', 'list', 'todos'])
  const counts = Object.keys(todos).reduce((counts, key) => {
    const todo = todos[key]

    if (todo.completed) {
      counts.completedCount++
    } else if (!todo.completed) {
      counts.remainingCount++
    }

    return counts
  }, {
    completedCount: 0,
    remainingCount: 0
  })

  return {
    remainingCount: counts.remainingCount,
    completedCount: counts.completedCount
  }
}
