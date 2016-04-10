Morepath backend for Cerebral
=============================

A Morepath REST backend with a Baobab, React and Cerebral based MVC frontend.

Morepath backend
----------------

You can run the code using a clean Python environment (using virtualenv)::

  $ python bootstrap-buildout.py

after this you can install dependencies using::

  $ bin/buildout

Once that is done you can start the server::

  $ bin/start

You can go to http://localhost:5000 to see the UI

TodoMVC JS bundle
-----------------

We use the TodoMVC example from Cerebral:

https://github.com/cerebral/cerebral-todomvc

JavaScript code is in the `client` subdirectory. To rebuild the bundle you
need to install the JS dependencies (listed in package.json). Run::

  $ npm install

to install them. Then run::

  $ webpack

To rebuild the bundle after changing it.
