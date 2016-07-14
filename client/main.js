import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'
import './styles.css'
import 'file?name=[name].[ext]!./index.html'

import React from 'react'
import { render } from 'react-dom'
import { Container } from 'cerebral-view-react'
import controller from './controller'

import App from './components/App'

render(
  <Container controller={controller}>
    <App />
  </Container>
  , document.querySelector('#app'))
