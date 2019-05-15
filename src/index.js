import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
// import App from './template/App'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './template/utils/ScrollToTop'
import Router from './Router'

ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <Router />
    </ScrollToTop>
  </HashRouter>,
  document.getElementById('root')
)
serviceWorker.register()
