function unsetLoadingTodos({state}) {
  state.set(['app.list.todos.isLoading'], false);
}

export default unsetLoadingTodos;
