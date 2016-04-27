function deleteCompleted({input, output, services}) {
  input.completedTodos.forEach((todo) => {
    const url = todo.get('@id');
    services.http.delete(url)
      .then(output.success)
      .catch(output.error);
  });
}

deleteCompleted.async = true;

export default deleteCompleted;
