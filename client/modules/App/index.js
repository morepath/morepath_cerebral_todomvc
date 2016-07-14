import NewTodo from '../NewTodo'
import List from '../List'
import Footer from '../Footer'

import appMounted from './signals/appMounted'

export default () => {
  return (module, controller) => {
    module.addModules({
      new: NewTodo(),
      list: List(),
      footer: Footer()
    })

    module.addSignals({
      appMounted})

    controller.on('modulesLoaded', () => {
      controller.getSignals().app.appMounted({}, {immediate: true})
    })
  }
}
