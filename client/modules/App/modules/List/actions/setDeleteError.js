function setDeleteError({state}) {
  state.set(['app.list.todos.$deleteError'], true);
}

export default setDeleteError;
