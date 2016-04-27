class List(object):
    def __init__(self):
        self.clear()

    def add(self, todo):
        id = self._id_count
        todo.id = id
        self._id_count += 1
        self._todos[id] = todo

    def remove(self, id):
        del self._todos[id]

    def clear(self):
        self._todos = {}
        self._id_count = 0

    def get(self, id):
        return self._todos.get(id)

    def get_all(self):
        return self._todos.values()


class Todo(object):
    def __init__(self, title, completed):
        self.title = title
        self.completed = completed

list = List()


def reset_list():
    list.clear()
    list.add(Todo('Code', True))
    list.add(Todo('Test', False))
    list.add(Todo('Document', False))
    list.add(Todo('Release', False))

reset_list()
