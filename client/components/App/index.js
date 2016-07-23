import React from 'react'
import { connect } from 'cerebral-view-react'
import NewTodoForm from '../NewTodo'
import TodosList from '../List'
import TodosFooter from '../Footer'
import visibleTodosKeys from '../../computed/visibleTodosKeys.js'

export default connect({
  todos: 'app.list.todos',
  isLoading: ['app.list.todos.isLoading'],
  isSaving: 'app.new.isSaving',
  visibleTodosKeys: visibleTodosKeys()
},
  function App (props) {
    return (
      <div id='todoapp-wrapper'>
        <section className='todoapp'>
          <header className='header'>
            <h1>todos</h1>
            <NewTodoForm />
          </header>

          {props.visibleTodosKeys.length ? <TodosList /> : null}
          {Object.keys(props.todos).length ? <TodosFooter /> : null}
        </section>
        <footer className='info'>
          <p>
            Double-click to edit a todo
          </p>
        </footer>
      </div>
    )
  }
)
