import visibleTodos from './visibleTodos'

export default function (get) {
  const todos = get(visibleTodos)

  return todos.filter((todo) => {
    return !todo.completed
  }).length === 0 && todos.length !== 0
}
