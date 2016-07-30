import {Controller} from 'cerebral'
import Model from 'cerebral/models/immutable'

import App from './modules/app'
import Devtools from 'cerebral-module-devtools'
import Http from 'cerebral-module-http'
import Router from 'cerebral-module-router'

const controller = Controller(Model({}))

controller.addModules({
  app: App,

  http: Http(),
  devtools: Devtools(),
  router: Router({
    '/': 'app.rootRouted',
    '/:filter': 'app.filterClicked'
  })
})

export default controller
