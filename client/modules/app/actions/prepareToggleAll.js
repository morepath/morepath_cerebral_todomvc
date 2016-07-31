import isAllChecked from '../../../computed/isAllChecked'
import visibleTodosRefs from '../../../computed/visibleTodosRefs'

function prepareToggleAll ({state, output}) {
  const isCompleted = !state.computed(isAllChecked())
  const currentTodosRefs = state.computed(visibleTodosRefs())

  output({
    isCompleted,
    currentTodosRefs
  })
}

export default prepareToggleAll
