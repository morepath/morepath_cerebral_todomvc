TodoMVC based on Morepath and Cerebral
======================================

Cerebral TodoMVC with a Morepath REST backend.

Morepath backend
----------------

The backend ist based on `morepath_reactredux <https://github.com/morepath/morepath_reactredux>`_.

If you don't have virtualenv install it::

  $ pip install virtualenv

Create a clean Python environment with virtualenv and activate it::

  $ virtualenv venv
  $ source venv/bin/activate

Setup buildout::

  $ python bootstrap.py

After this you can install dependencies using::

  $ bin/buildout

Once that is done you can start the server::

  $ bin/start

You can go to http://localhost:5000 to see the UI

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
