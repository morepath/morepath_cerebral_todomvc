import redirectToAll from './chains/redirectToAll'
import setTitle from './chains/setTitle'
import submitTodo from './chains/submitTodo'
import setTodoNewTitle from './chains/setTodoNewTitle'
import overwriteTodoTitle from './chains/overwriteTodoTitle'
import removeTodo from './chains/removeTodo'
import editTodo from './chains/editTodo'
import toggleAllChecked from './chains/toggleAllChecked'
import toggleTodoCompleted from './chains/toggleTodoCompleted'
import stopEditingTodo from './chains/stopEditingTodo'
import clearCompletedTodos from './chains/clearCompletedTodos'
import setFilter from './chains/setFilter'

import setTodos from './chains/setTodos'

export default (module, controller) => {
  module.addState({
    newTodoTitle: '',
    todos: {},
    filter: 'all',
    isSaving: false
  })

  module.addSignals({
    appMounted: setTodos,
    rootRouted: redirectToAll,
    newTodoTitleChanged: {
      chain: setTitle,
      immediate: true
    },
    newTodoSubmitted: submitTodo,
    todoNewTitleChanged: {
      chain: setTodoNewTitle,
      immediate: true
    },
    todoNewTitleSubmitted: overwriteTodoTitle,
    removeTodoClicked: removeTodo,
    todoDoubleClicked: editTodo,
    toggleAllChanged: toggleAllChecked,
    toggleTodoCompletedChanged: toggleTodoCompleted,
    todoNewTitleAborted: stopEditingTodo,
    clearCompletedClicked: clearCompletedTodos,
    filterClicked: setFilter
  })

  controller.on('modulesLoaded', () => {
    controller.getSignals().app.appMounted({}, {immediate: true})
  })
}
