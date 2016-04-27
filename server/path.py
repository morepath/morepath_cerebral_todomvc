from .app import App
from .fakedb import List, Todo, list
from .model import Root


@App.path(path='/', model=Root)
def get_root():
    return Root()


@App.path(path='/todos', model=List)
def get_list():
    return list


@App.path(path='/todos/{id}', model=Todo)
def get_todo(id=0):
    return list.get(id)
