function getTodos ({services, output}) {
  services.http.get('/api/todos')
    .then(output.success)
    .catch(output.error)
}

getTodos.async = true
getTodos.outputs = ['success', 'error']

export default getTodos
