import {Controller} from 'cerebral'
import Model from 'cerebral/models/immutable'

import AppModule from './modules/app'

import Refs from './modules/refs'
import Devtools from 'cerebral-module-devtools'
import Http from 'cerebral-module-http'
import Router from 'cerebral-module-router'

const controller = Controller(Model({}))

controller.addModules({
  app: AppModule(),
  refs: Refs(),
  http: Http(),
  devtools: Devtools(),
  router: Router({
    '/': 'app.footer.filterClicked'
  }, {
    mapper: {query: true}
  })
})

export default controller
