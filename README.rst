TodoMVC based on Morepath and Cerebral
======================================

Cerebral TodoMVC with a Morepath REST backend.

Morepath backend
----------------

The backend ist based on `morepath_reactredux <https://github.com/morepath/morepath_reactredux>`_.
You find the code of the backend in the server directory.

From inside the project directory create a clean Python environment with
`virtualenv <https://virtualenv.pypa.io/en/latest>`_ and activate it::

  $ virtualenv env
  $ source env/bin/activate

After this you can install the package including dependencies using::

  $ env/bin/pip install -e .

Once that is done you can start the server::

  $ env/bin/run-app

You can go to http://localhost:5000 to see the UI.

For installing the test suite and running the tests use::

  $ env/bin/pip install -e '.[test]'
  $ env/bin/py.test


TodoMVC JS bundle
-----------------

We use the TodoMVC example from Cerebral,
which is based on Baobab, React and Cerebral:

https://github.com/cerebral/cerebral-todomvc

JavaScript code is in the `client` subdirectory. To rebuild the bundle you
need to install the JS dependencies (listed in package.json). Run::

  $ npm install

to install them. Then run::

  $ webpack

To rebuild the bundle after changing it.
