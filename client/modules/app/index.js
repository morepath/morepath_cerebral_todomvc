import NewTodo from '../new'
import List from '../list'
import Footer from '../footer'

import setTodos from './chains/setTodos'

export default () => {
  return (module, controller) => {
    module.addModules({
      new: NewTodo(),
      list: List(),
      footer: Footer()
    })

    module.addSignals({
      appMounted: setTodos
    })

    controller.on('modulesLoaded', () => {
      controller.getSignals().app.appMounted({}, {immediate: true})
    })
  }
}
