function setError({input, state}) {
  state.merge(`app.list.todos.${input.ref}`, {
    id: input.result.id,
    $isSaving: false,
    $error: input.result.error,
  });
}

export default setError;
