export default function (get) {
  const todos = get(['app', 'list', 'todos']);
  const filter = get(['app', 'footer', 'filter']);

  return Object.keys(todos).filter((key) => {
    const todo = todos[key];
    return (
      filter === 'all' ||
      (filter === 'completed' && todo.completed) ||
      (filter === 'active' && !todo.completed)
    );
  }).map((key) => {
    return todos[key];
  });
}
