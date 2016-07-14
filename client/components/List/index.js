import React from 'react'
import Todo from '../Todo'
import { connect } from 'cerebral-view-react'

import isAllChecked from '../../computed/isAllChecked.js'
import visibleTodos from '../../computed/visibleTodos.js'

export default connect({
  isAllChecked: isAllChecked(),
  todoKeys: visibleTodos()
}, function List ({ isAllChecked, todoKeys, signals }) {
  return (
    <section className='main'>
      <input
        className='toggle-all'
        type='checkbox'
        checked={isAllChecked}
        onChange={() => signals.app.list.toggleAllChanged()} />
      <label htmlFor='toggle-all'>
        Mark all as complete
      </label>
      <ul className='todo-list'>
        {todoKeys.map(key => <Todo key={key} todoKey={key} />)}
      </ul>
    </section>
  )
})
