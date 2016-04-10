import morepath
from webtest import TestApp as Client
import morepath_cerebral_todomvc as webui
from .. import fakedb
from ..app import App


def setup_module(module):
    morepath.scan(webui)
    morepath.autocommit()


def teardown_function(function):
    fakedb.reset_list()


def test_root():
    c = Client(App())

    response = c.get('/')
    assert response.json == {"collection": "http://localhost/todos"}
