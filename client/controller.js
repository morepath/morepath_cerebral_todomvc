import Controller from 'cerebral'
import Model from 'cerebral-model-baobab'
import HttpModule from 'cerebral-module-http'
import RouterModule from 'cerebral-module-router'
import DevtoolsModule from 'cerebral-module-devtools'

import AppModule from './modules/App'
import RefsModule from './modules/Refs'

const controller = Controller(Model({}))

controller.addModules({
  app: AppModule(),
  refs: RefsModule(),
  http: HttpModule(),
  devtools: DevtoolsModule(),
  router: RouterModule({
    '/': 'app.footer.filterClicked'
  }, {
    mapper: {query: true}
  })
})

export default controller
