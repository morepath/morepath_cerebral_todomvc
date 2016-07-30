import isAllChecked from '../../../computed/isAllChecked'
import visibleTodosRefs from '../../../computed/visibleTodosRefs'

function toggleAllChecked ({state}) {
  const isCompleted = !state.computed(isAllChecked())
  const currentTodosRefs = state.computed(visibleTodosRefs())

  currentTodosRefs.forEach((ref) => {
    state.set(`app.todos.${ref}.completed`, isCompleted)
  })
}

export default toggleAllChecked
