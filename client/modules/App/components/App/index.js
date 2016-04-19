import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import NewTodoForm from '../../modules/NewTodo/components/NewTodo';
import TodosList from '../../modules/List/components/List';
import TodosFooter from '../../modules/Footer/components/Footer';
import visibleTodos from '../../modules/List/computed/visibleTodos.js';

@Cerebral({
  todos: ['app', 'list', 'todos'],
  isLoading: ['app', 'list', 'todos', 'isLoading'],
  isSaving: ['app', 'new', 'isSaving'],
  visibleTodos,
})
class App extends React.Component {
  render() {
    return (
      <div id="todoapp-wrapper">
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTodoForm />
          </header>

          {this.props.visibleTodos.length ? <TodosList /> : null}
          {Object.keys(this.props.todos).length ? <TodosFooter /> : null}
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
        </footer>
      </div>
    );
  }
}

module.exports = App;
