import React from 'react';
import Todo from '../Todo';
import {Decorator as Cerebral} from 'cerebral-view-react';

import isAllChecked from '../../modules/List/computed/isAllChecked.js';
import visibleTodos from '../../modules/List/computed/visibleTodos.js';

@Cerebral({
  isAllChecked,
  todos: visibleTodos,
})
class List extends React.Component {
  renderTodo(todo, index) {
    return <Todo key={index} index={index} todo={todo} />;
  }

  render() {
    return (
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={this.props.isAllChecked}
          onChange={() => this.props.signals.app.list.toggleAllChanged()}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map(this.renderTodo.bind(this))}
        </ul>
      </section>
    );
  }

}

export default List;
