function getTodos({services, output}) {
  services.http.get('/api/todos')
    .then(output.success)
    .catch(output.error);
}

getTodos.async = true;

export default getTodos;
