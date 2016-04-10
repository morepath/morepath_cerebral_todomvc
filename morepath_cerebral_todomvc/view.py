from .fakedb import List, Todo, list
from .app import App
from .model import Root


@App.json(model=Root)
def root_get(self, request):
    return {
        'collection': request.link(list)
    }


@App.json(model=List)
def list_get(self, request):
    return {
        'todos': [request.view(todo) for todo in self.get_all()]
    }


@App.json(model=List, request_method='POST')
def list_post(self, request):
    todo_json = request.json
    todo = Todo(todo_json['title'], todo_json['completed'])
    self.add(todo)

    @request.after
    def after(response):
        response.status = 201

    return request.view(todo)


@App.json(model=Todo)
def todo_get(self, request):
    return {
        '@id': request.link(self),
        'title': self.title,
        'completed': self.completed
    }


@App.json(model=Todo, request_method='PUT')
def todo_put(self, request):
    todo_json = request.json
    self.title = todo_json['title']
    self.completed = todo_json['completed']
    return request.view(self)


@App.json(model=Todo, request_method='DELETE')
def todo_delete(self, request):
    list.remove(self.id)
    return request.view(list)
