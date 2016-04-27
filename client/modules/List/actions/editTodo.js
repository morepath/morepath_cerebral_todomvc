function editTodo({input, state}) {
  const todo = state.get(`app.list.todos.${input.ref}`);

  state.merge(`app.list.todos.${input.ref}`, {
    $isEditing: !todo.$isSaving,
  });
}

export default editTodo;
