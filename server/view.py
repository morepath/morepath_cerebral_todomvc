from .fakedb import List, Todo, list
from .app import App
from .model import Root


@App.json(model=Root)
def view_root(self, request):
    return {
        'collection': request.link(list)
    }


@App.json(model=List)
def view_list(self, request):
    return {
        'todos': [request.view(todo) for todo in self.get_all()]
    }


@App.json(model=List, request_method='POST')
def add_todo(self, request):
    todo_json = request.json
    todo = Todo(todo_json['title'], todo_json['completed'])
    self.add(todo)

    @request.after
    def after(response):
        response.status = 201

    return request.view(todo)


@App.json(model=Todo)
def view_todo(self, request):
    return {
        '@id': request.link(self),
        'title': self.title,
        'completed': self.completed
    }


@App.json(model=Todo, request_method='PUT')
def change_todo(self, request):
    todo_json = request.json
    self.title = todo_json['title']
    self.completed = todo_json['completed']
    return request.view(self)


@App.json(model=Todo, request_method='DELETE')
def delete_todo(self, request):
    list.remove(self.id)
    return request.view(list)
